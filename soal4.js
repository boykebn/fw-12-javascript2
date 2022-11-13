// 4.a

let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apart. 556",
        city: "Gwenborough",
        zipcode:"92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
};

// variabel dengan value yang akan di assign ulang ke value variabel di atas
let data2 = {
    name: "Boyke Berry Nugraha",
    email: "boykeberryn@gmail.com",
    hobbies: "reading, playing music, swimming",
};

// validasi assign ulang dengan method spread operator
let newData = {
    ...data,
    ...data2,
};

// validasi menampilkan value dengan destruc
const { street, city } = data.address;

console.log(newData);
console.log(street);
console.log(city);

