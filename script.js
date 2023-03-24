
// let rand =  Math.random();
// console.log(rand)
// let prom = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//         rand >= 0.5
//         ? resolve("hello")
//         : reject("There is error in function")
//     // }, 1000)
// })

// prom
// .then((a) => console.log(a))
// .catch((b) => console.log(b))

// let h2 = document.querySelector("h2")
// let 



fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
    return res.json();
    // console.log(res)
})
.then(data =>  {

    data.forEach(data => {
        const markup = `<li>${data.title}</li>`

        document.querySelector("ul").insertAdjacentHTML("beforeend",markup)
    });
    // console.log(data)
} )


