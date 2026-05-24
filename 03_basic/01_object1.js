// singleton 
// Object.create

// object literals

const mysym = symbol("key1")

const Detail = {
    name: "Vikash",
    "full name": "vikash kumar",
    age: 19,
    email: "vikash@google.com",
    location: "Varanasi",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"],

    mysym: "mykey1",
}

console.log(Detail.name);

// console.log(Detail["full name"]);
// console.log(Detail["email"]);

console.log(Detail[mysym]);

