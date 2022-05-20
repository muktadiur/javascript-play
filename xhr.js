function http(method, url, data) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = "application/json";
        xhr.send(data);

        xhr.onload = function () {
            if (xhr.status >= 400) {
                reject("Something went wrong.");
            } else {
                resolve(xhr.response);
            }
        };

        xhr.onerror = function () {
            reject(xhr.response);
        };
    });
    return promise;
}

http("GET", "https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

data = JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
});

http("POST", "https://jsonplaceholder.typicode.com/posts", data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
