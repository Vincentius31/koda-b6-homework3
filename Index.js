const DataSet = [
    "Maria",
    "Mark",
    "Mar io",
    "Deborah",
    "maria",
    "deborah",
    "marju",
    "Maliki"
]

function strLowerCase(str) {
  let newStr = ""; // Buatlah variable String yang baru
  for (let i = 0; i < str.length; i++) { // Lakukan loop sampai dengan panjang String
    let code = str.charCodeAt(i); // Ambil nilai kode char

    // cek apakah string tersebut berisikan huruf besar atau tidak (ASCII dari 65-90)
    if (code >= 65 && code <= 90) {
      code += 32; // Tambah 32 untuk mengkonversi ke lowercase
    }

    // Masukan string original yang sudah di lower case ke string yang baru
    newStr += String.fromCharCode(code);
  }
  return newStr;
}

function cocok(namaSiswa, keywordPencarian){ //Membuat function untuk mengecek apakah sebuah kata pencarian cocok dengan nama siswa yang ada pada DataSet
    let translateNamaSiswa = strLowerCase(namaSiswa) //Translate untuk menjalankan case sensitivity manual
    let translateKeywordPencarian = strLowerCase(keywordPencarian) //Translate untuk menjalankan case sensitivity manual

    for(let i = 0; i<= translateNamaSiswa.length - keywordPencarian.length; i++){//Looping ini mengambil hasil dari nilai dari panjang String namaSiswa yang akan dicek - panjang String keyword pencarian
        let res = true; //Inisiasi variable res kita buat true
        for(let j = 0; j< translateKeywordPencarian.length; j++){//Looping ini untuk mengambil nilai panjang dari keyword
            if(translateNamaSiswa[i+j] !== translateKeywordPencarian[j]){//if disini memberikan kondisi jika namaSiswa tidak memiliki panjang yang sama dengan keyword pencarian
                res = false;//Kita buat res disini menjadi false
                break;
            }
        }
        if(res){//if disini untuk memberikan kondisi pada res yang bernilai true maka akan me return nilai true
            return true
        }
    }
}

function search(keywordPencarian, dataArray, cb){
    let hasilPencarian = []

    for(let i=0; i<dataArray.length; i++){
        if(cocok(dataArray[i], keywordPencarian)){
            hasilPencarian.push(dataArray[i])
        }
    }
    cb(hasilPencarian)
}

function tampilkanHasil(hasilPencarian){
    console.log("Hasil pencarian siswa:")
    console.log(hasilPencarian)
    console.log("Jumlah siswa:", hasilPencarian.length)
}

search("MaR", DataSet, tampilkanHasil)