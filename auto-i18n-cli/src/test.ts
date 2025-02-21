import template from '@babel/template';
import prettier from 'prettier';
import { PluginObj, transformFromAstSync } from '@babel/core';
import parser from '@babel/parser';
import { jSXExpressionContainer } from '@babel/types';

const sourceCode = `
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return <div>
    <div>{count}</div>
    <button onClick={() => setCount(count => count + 1)}>增加</button>
    <button onClick={() => setCount(count => count - 1)}>减小</button>
  </div>
}

export default App
`;

function myPlugin(): PluginObj {
    return {
        visitor: {
            Program(path) {
                let index = 0;
                while (path.node.body[index].type === 'ImportDeclaration') {
                    index++;
                }
                // const ast = template.statement("import  { defineMessages, useIntl } from 'react-intl'")();
                // 处理同名变量
                let methodName1 = 'defineMessages';
                let methodName2 = 'useIntl';
                if (path.scope.hasBinding(methodName1)) {
                    methodName1 = path.scope.generateUid(methodName1);
                }
                if (path.scope.hasBinding(methodName2)) {
                    methodName2 = path.scope.generateUid(methodName2);
                }
                const ast = template.statement(`import { ${methodName1}, ${methodName2} } from 'react-intl'`)();
                path.node.body.splice(index, 0, ast);

                const textArr:string[] = [];
                path.traverse({
                    JSXText(p) {
                        if(p.node.value.trim() !== ''){
                            textArr.push(p.node.value);
                        }
                    }
                });

                const messageAst = template.statement(`const messsages = defineMessages({
                    ${textArr.map((item) => {
                        return `${item}: {
                            id:  "${item}"
                        }`;
                    }).join(',')}
                })`)();
                path.node.body.splice(index + 1, 0, messageAst);
            },
            FunctionDeclaration(path, state) {
                if (path.parent.type === 'Program') {
                    let methodName = 'intl'
                    if (path.scope.getBinding(methodName)) {
                        methodName = path.scope.generateUid(methodName);
                    }

                    const ast = template.statement(`const ${methodName} = useIntl();`)()
                    path.node.body.body.unshift(ast);

                    state.intlName = methodName;
                }
            },
            JSXText(path, state) {
              if(path.node.value.trim()!== ''){
                const ast = template.expression(`${state.intlName}.formatMessage(messsages["${path.node.value}"])`)();
                path.replaceWith(jSXExpressionContainer(ast));
              }
            }
        }
    }
}

const ast = parser.parse(sourceCode, {
    sourceType: 'module',
    plugins: ['jsx'],
});

const res = transformFromAstSync(ast, sourceCode, {
    plugins: [myPlugin],
    retainLines: true,
});

(async function () {
    const formatedCode = await prettier.format(res?.code!, {
        filepath: 'aaa.tsx'
    });
    console.log(formatedCode);
})()