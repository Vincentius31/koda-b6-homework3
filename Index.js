const DataSet = [
    "Maria",
    "Mark",
    "Mario",
    "Deborah",
    "maria",
    "deborah",
    "marju",
    "Maliki"
]

function strLowerCase(str) {
  const char = {
    A: 'a', B: 'b', C: 'c',
    D: 'd', E: 'e', F: 'f',
    G: 'g', H: 'h', I: 'i',
    J: 'j', K: 'k', L: 'l',
    M: 'm', N: 'n', O: 'o',
    P: 'p', Q: 'q', R: 'r',
    S: 's', T:'t', U: 'u',
    V: 'v', W: 'w', X: 'x',
    Y: 'y', Z: 'z'
  }

  let strBaru = ""
  for(let i=0; i<str.length; i++){
    let potongan = str[i]
    if(char[potongan]){
        strBaru += char[potongan]
    }
    else{
        strBaru += potongan
    }
  }
  return strBaru
}

function cocok(namaSiswa, keywordPencarian){ 
    let translateNamaSiswa = strLowerCase(namaSiswa) 
    let translateKeywordPencarian = strLowerCase(keywordPencarian) 

    for(let i = 0; i<= translateNamaSiswa.length - keywordPencarian.length; i++){
        let res = true; 
        for(let j = 0; j< translateKeywordPencarian.length; j++){
            if(translateNamaSiswa[i+j] !== translateKeywordPencarian[j]){
                res = false;
                break;
            }
        }
        if(res){
            return true
        }
    }
}

function search(keywordPencarian, cb){
    let hasilPencarian = []

    for(let i=0; i<DataSet.length; i++){
        if(cocok(DataSet[i], keywordPencarian)){
            hasilPencarian.push(DataSet[i])
        }
    }
    cb(hasilPencarian)
}

function tampilkanHasil(hasilPencarian){
    console.log("Hasil pencarian siswa:")
    console.log(hasilPencarian)
    console.log("Jumlah siswa:", hasilPencarian.length)
}

search("MaR", tampilkanHasil)