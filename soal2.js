// membuat sebuah variabel dgn value tipe data array
const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope',
];

// membuat function dengan 3 parameter
function searchName(initials, barrier, callback) {
    // proses validasi dengan menggunakan methode filter
    // dengan dibuatkan function baru untuk untuk validasi menggunakan methode toLowercase dan Includes
    const nameFilter = name.filter( (x) => x.toLowerCase().includes(initials));

    // digunakan function callback untuk mengeksekusi
    callback(nameFilter, barrier);
} 

    // function yang memvalidasi dari function callback
function newFu (nameFilter, barrier) { 
    console.log(nameFilter.slice(0, barrier));
}

searchName("an", 4, newFu);
