const object = {
    name: "Sajib",
    age: 41,
    country: "Bangladesh",
};

Object.prototype[Symbol.iterator] = function () {
    const entries = Object.entries(object);
    const count = entries.length;
    let index = 0;
    return {
        next() {
            if (index < count) {
                const element = {
                    [entries[index][0]]: entries[index][1],
                };
                const result = { done: false, value: element };
                index++;
                return result;
            }
            return { done: true };
        },
    };
};

for (let element of object) {
    console.log(element);
}

for (let prop in object) {
    console.log(prop);
}
