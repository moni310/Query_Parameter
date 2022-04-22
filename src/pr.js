console.log("Hello");
async function fun(){
    console.log("Inside the function");
    const response = await fetch("https://api.github.com/users")
    console.log("before response");
    const users = await response.json();
    console.log("users resolved")
    return users;
}
console.log("Before calling fun")
let a= fun()
console.log(a)
a.then(data => console.log(data))
console.log("last line")

