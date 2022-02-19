

const status = false;

const promise = new Promise((resolve, reject) => {
    if (status) resolve('SUCCESS');
    else reject('FAILED');
});

promise
    .then((val) => console.log(val))
    .catch((err) => console.log(err))


