// 1.) Sort
// Sort berfungsi untuk mengurutkan sebuah nilai yang ada dalam sebuah array
// Contoh penggunaan Sort :

let number = [5, 4, 2, 1, 3];
number.sort();

console.log(number);
// [1, 2, 3, 4, 5]

//2.) Reverse
//Reverse berfungsi untuk membalikan urutan sebuah array
// Contoh penggunaan Reverse :

let words =["e", "d", "c", "b", "a"];
words.reverse("");

console.log(words);
// [a, b, c, d, e]

// 3.) Push
// Push berfungsi untuk memasukan value ke sebuah array dan disimpan dipaling akhir/paling kanan
// Contoh penggunaan Push :

let nums = [1, 2, 3, 4, 5];
nums.push(6);

console.log(nums);
// [1, 2, 3, 4, 5, 6]

//4.) Map
// Map berfungsi untuk mengolah setiap element di array/object dan kemudian menghasilkan array/object baru
// Contoh penggunaan Map :

const sweetArray = [2, 3, 4, 5, 35]
const sweeterArray = sweetArray.map(sweetItem => {
    return sweetItem * 2
})

console.log(sweeterArray);
// [4, 6, 8, 10, 70]   

// 5.) Split
// Split berfungsi untuk membagi string menjadi array substring dan mengembalikan array baru tanpa mengubah string asli
// Contoh penggunaan Split

var text = "jakarta"

text.split("");

console.log(text.split(""));
// [j, a, k, a, r, t, a]

// 6.) Join
// Join berfungsi untuk menggabungkan seluruh array menjadi sebuah string.
// Contoh penggunaan Join :

var exp = [1, 2, 3]

exp.join();

console.log(exp.join("-"));
// [1-2-3]

// 7.) Pop
// Pop berfungsi untuk menghapus elemen terakhir sebuah array
// Contoh penggunaan Pop :

var cont = [1,2,3,4,5,6,7,8]

cont.pop();

console.log(cont);
// [1, 2, 3, 4, 5, 6, 7]

// 8.) Shift
// Shift berfungsi untuk menghapus elemen paling awal sebuah array
// Contoh penggunaan Shift :

var cont = [1,2,3,4,5,6,7,8]

cont.shift();

console.log(cont);
// [2, 3, 4, 5, 6, 7, 8]

// 9.) Unshift
// Unshift berfungsi untuk menambahkan elemen paling awal sebuah array
// Contoh penggunaan Unshift :

var cont = [1,2,3,4,5,6,7,8]

cont.unshift(0);

console.log(cont);
// [0, 1, 2, 3, 4, 5, 6, 7, 8]

// 10.) Foreach
// Foreach berfungsi untuk melakukan pengulangan di dalam array
// Contoh penggunaan Foreach :

let data = ["d","f","z","w","a","t"]
        data.forEach( (item) => {
            console.log(item)
        })

// d
// f
// z
// w
// a
// t