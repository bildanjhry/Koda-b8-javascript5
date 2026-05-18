# Penjelasan Program

## Program menentukan nilai array

### Catatan ini dibuat untuk menjelaskan bagaimana alur dari program pengecekan apakah semua nilai array merupakan bilangan ganjil atau genap.

Program dibungkus menggunakan function arrEvenOdd() yang menerima 2 parameter, array dan status bilangan Even/Odd. Langkah pertama ialah men-deklarasikan 2 variable Even dan Odd yang diisi dengan nilai boolean, lalu selanjutnya dilakukan pengecekan/guarding apakah parameter status valid sesuai kriteria.

Jika validasi telah sukses maka program selanjutnya yaitu mengecek dari status yang dikirim kan. Untuk program yang menggunakan built-in method, jika bernilai true maka program akan mengirimkan variabel Even yang berisi nilai dari arr.every(isEven?) dan begitupun jika status yang dikirim kan adalah Odd. 

Untuk program yang tidak menggunakan built-in method, jika nilai bernilai true maka akan melakukan perulangan dengan ekspektasi setiap nilai array semuanya bersifat Even/Odd lalu dikirimkan nilai true, jika tidak maka program akan mengembalikan nilai false, dan jika dari 2 kondisi tersebut tidak ada yang terpenuhi maka akan dikirimkan nilai false.