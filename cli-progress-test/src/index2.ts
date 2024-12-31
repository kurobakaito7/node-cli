import { clearTimeout } from "timers";

import { ProgressBar } from "./ProgressBar.js";

const bar = new ProgressBar();
bar.start(200, 0);

let value = 0;
const timer = setInterval(() => {
    value++;
    bar.update(value);
    if(value >= 200) {
        clearTimeout(timer);
        bar.stop();
    }
}, 20);