/* -------------------------------------------------- Built-in Method --------------------------------------------------*/

// 1. forEach()
// Method pada array ini akan menjalakan sebuah program pada setiap nilai dari array
// contohnya:
const print = [1, 2, 3, 4]
print.forEach((item) => console.log(item));
// hasilnya: 1
// hasilnya: 2
// hasilnya: 3
// hasilnya: 4
// hasilnya: 5

// 2. at()
// Method ini digunakan untuk array dan bertujuan untuk mengambil suatu nilai dari array sesui index yang dipassing ke parameternya
// contohnya:
const arrAt = [11, 22, 10, 4]
console.log(arrAt.at(1))
// hasilnya : 22

// 3. concat()
// Method ini digunakan untuk array untuk menggabungkan 2 atau lebih array dan mengembalikan array baru yang berisi dari array
// yang digabungkan
// contohnya
const arr1 = ["Hello"]
const arr2 = ["World"]
const con = arr1.concat(arr2)
console.log(con)
// hasilnya: Hello World

//4. copyWithin()
// Method pada array ini akan mengkopi bagian dari array lalu dikirimkan ke lokasi yang berbeda tanpa mengubah
// panjang dari array tersebut.
// contoh:
const arr3 = ["Sun", "Mon", "Tue", "Wed"]
console.log(arr3.copyWithin(1, 3))
// hasilnya: ["Sun", "Wed", "Tue", "Wed"]

//4. every()
// Method pada array yang akan melakukan penegecekan keseluruh nilai dari array lalu mengembalikan hasil boolean
// contohnya:
const arr4 = [2, 3, 9, 6]
const isNegative = arr4.every((curr) => curr < 0)
console.log(isNegative)
// hasilnya: false

//5. filter()
// Method pada array yang akan mengkopi nilai sebuah array jika kondisinya terpenuhi
// contohnya:
const arr5 = ["Jakarta", "Bogor", "Bandung", "Indonesia"]
const cities = arr5.filter((word) => word !== 'Indonesia')
console.log(cities)
// hasilnya: ["Jakarta", "Bogor", "Bandung"]

//6. find()
// Method pada array yang mengembalikan element yang pertama jika kondisinya terpenuhi
// contohnya:
const arr6 = [11, -2, 22, 10]
const negativeNumber = arr6.find((num) => num < 0)
console.log(negativeNumber)
// hasilnya: -2

//7. findIndex()
// Method pada array yang mengembalikan alamat index dari suatu hasil dari sebuah function jika terpenuhi
//contohnya:
const arr7 = [11, -2, 22, 10]
const indexNegative = arr7.findIndex((num) => num <0)
console.log(indexNegative)
// hasilnya: 1

//8. findLast()
// Method pada array yang akan mengembalikan value array jika nilai dari functionnya terdapat pada salah satu nilai array namun pengecekan dilakukan dari belakang
// dan jika tidak terpenuhi maka method ini akan menggembalikan nilai undefined
const arr8 = [11, 32, 22, 10]
const found = arr8.findLast((num) => num > 10)
console.log(found)
// hasilnya: 22

//9. findLastIndex()
// Method pada array yang akan mengembalikan index dari value pada array jika nilai dari functionnya terdapat pada salah satu nilai array namun pengecekan dilakukan dari belakang
// dan jika tidak terpenuhi maka method ini akan menggembalikan -1
// contohnya:
const arr9 = [11, 88, 23, 10, 22]
const big = arr9.findLastIndex((num) => num > 50)
console.log(big)
// hasilnya: 1

//10. includes()
// Method pada array yang akan mengecek apakah terdapat suatu niali yang dicari pada semua isi array? dan akan menggembalikan nilai boolean
// contohnya:
const cities2 = ["Bandung", "Berlin", "Geneve", "Sarajevo"]
console.log(cities2.includes("Bandung"))
// hasilnya: true

// 11. join()
// Method pada array yang akan mengubah seluruh isi array menjadi sebuah data string lalu memberikan pemisah diantara nilai dari array tersebut
// contohnya:
const farm = ["Ayam", "Sapi", "Domba"]
console.log(farm.join(", "))
// hasilnyaL Ayam, Sapi, Domba

// 12. map()
// Method pada array yang akan membuat array baru dari hasil suatu program yang dijalankan pada array yang lain
// contohnya:
const field = ["Padi", "Sayur", "Bunga"]
const newField = field.map((item) => {
        if(item === "Bunga"){
            return item = "Buah"
        } else {
            return item
        }
    })
console.log(newField)
// hasilnya: [ 'Padi', 'Sayur', 'Buah' ]

//13. pop()
// Method untuk array yang dimana method ini akan menghapus nilai dari array yang terakhir
// contohnya:
const arr10 = [2, 3, 4, 5]
console.log(arr10.pop())
// hasilnya: [2, 3, 4]

//14. push()
// Method untuk array yang dimana method ini akan menambahkan nilai baru di array ke urutan yang paing belakang
// contohnya:
const arr11 = [11, 10, 2]
arr11.push(30)
console.log(arr11)
// hasilnya: [11, 10, 2, 30]

//15. shift()
// Method pada array ini berfungsi untuk mengahapus element pertama dari array dan bisa diassign kan ke suatu variabel
// sehingga variabel ini mempunyai element yang dihapus
const arr12 = [2, 3, 11, 3]
const firstEl = arr12.shift()
console.log(firstEl)
// hasilnya: 2

//16. concat()
// Method ini juga bisa digunakan untuk tipe data string, dimana method ini akan menggabungkan 2 string atau lebih dan dapat menambahkan pemisah di antara string yang coba
// digabungkan
// contohnya:
const a = "Hello"
const b = "World"
console.log(a.concat("-", b))
// hasilnya: Hello-World

//17. toUpperCase()
// Method pada string ini akan mengubah semua huruf menjadi huruf kapital atau upper case
// contohnya:
const text = "lorem ipsum dolor sit amet"
console.log(text.toUpperCase())
// hasilnya: LOREM IPSUM DOLOR SIT AMET

//18. split()
// Method pada string yang berfungsi untuk mengambil setiap kata dari string dengan menggunakan pemisah yang diinputkan kedalam parameter dan memasukannya ke dalam 
// array yang di-assign ke suatu variabel
// contohnya:
const text2 = "Lorem ipsum dolor"
const res = text2.split(" ")
console.log(res)
// hasilnya: ["Lorem", "ipsum", "dolor"]

//19. toLowerCase()
// Method pada string yang mengubah semua karakternya menjadi huruf kecil
// contohnya:
const text3 = "Hello World"
console.log(text3.toLowerCase())
// hasilnya hello world

//20. trim()
// Method pada string yang menghilangkan spasi pada awal dan akhir dari string tanpa mengubah isinya
// contohnya:
const greeting = "   Selamat pagi    "
console.log(greeting.trim())
// hasilnya: Selamat pagi

/* ----------------------------------------------------- Built-in Function ------------------------------------------------------*/

//1. isNaN()
// Sebuah function yang akan mengecek apakah nilai yang diberikan pada paramter bentuknya NaN atau bukan dan akan mengirimkan hasilnya
// dalam tipe data boolean
// contohnya:
function calculate(a, b){
    if(isNaN(a) || isNaN(b)){
        return a + b
    }
    return 'Bukan sebuah number'
}

console.log(calculate(10, "10"))
// hasilnya: Bukan sebuah number

//2. Math.min()
// sebuah function dimana function akan mengembalikan nilai terkecilnya dari beberapa nilai parameter yang diberikan
// contohnya:
const score = [20, 40, 10, 80]
console.log(Math.min(...score))
// hasilnya: 10

//3. Math.round()
// Sebuah function yang akan mengembalikan pembulatan terdekat dari nilai parameter yang diberikan
// contohnya:
console.log(Math.round(1.4))
// hasilnya: 1

//4. parseInt
// Sebuah function yang akan mengembalikan suatu nilai dari number bertipe data string yang di passing melalui parameter ke integer asli/number
// contohnya:
console.log(parseInt("12"))
// hasilnya: 12 

//5. parseFloat
// Sebuah function yang akan mengenbalikan suatu nilai float dari sebuah nilai number bertipe data string yang dikirim kan oleh parameter
const PI = "3.14"
console.log(parseFloat(PI)) 
// hasilnya: 3.14