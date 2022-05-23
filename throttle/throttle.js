const throttle = (fn, delay) => {
    let lastTime = 0;
    console.log("throttle called");
    return (...args) => {
        const now = new Date().getTime();
        if (delay > now - lastTime) return;
        lastTime = now;
        fn(...args);
        console.log(now);
    };
};
const init = () => {
    const throttleButton = document.querySelector("#throttleButton");
    const clickLog = () => console.log("button clicked");
    throttleButton.addEventListener("click", throttle(clickLog, 2000));
};

document.addEventListener("DOMContentLoaded", init);
