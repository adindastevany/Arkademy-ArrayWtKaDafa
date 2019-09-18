const a = 'a';
const promiseku = new Promise((resolve, reject) => {
    if(a === 'a') {
        resolve("Berhaasil");
    } else {
        reject("Gagal");
    }
});

promiseku.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});