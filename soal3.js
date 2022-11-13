// membuat sebuah fungsi dengan 3 parameter
function seleksiNilai (nilaiAwal, nilaiAkhir, dataArr) {
    // validasi pertama
    if(nilaiAwal > nilaiAkhir) {
        console.log("Nilai akhir harus lebih besar dari nilai awal!");
        return;
    }else if(dataArr.length < 5) {
        console.log("Jumlah angka dalam Data Array harus lebih dari 5!");
        return;
    }

    // validasi untuk dilakukan filter dengan memberi validasi pembatas
    const filter = dataArr.filter((func1) => { return nilaiAwal < func1 && nilaiAkhir > func1}); 

    // validasi untuk menyusun 
    const sorted = filter.sort((a, b) => a - b);

    // validasi untuk kondisi jika dari semua validasi di atas false
    if(sorted.length === 0){
        console.log("Nilai tidak ditemukan");
        return;
    }
    console.log(sorted);
}

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(4, 17, [2, 25, 4]);
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]);