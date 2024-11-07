// console.log("sebelum pembanding")
// if(1 + 1 === 2){
//     console.log("di dalam pembanding")
// }
// console.log("setelah pembanding")

// let angka = Math.random();
// console.log(angka);

// if(angka >= 0.5){
//     console.log('Angka lebih besar dari 0.5');
// }
// if(angka <= 0.5){
//     console.log('Angka lebih kecil dari 0.5');
// }

// const iniHari = prompt('Isikan Hari!').toLowerCase();

// if(iniHari === 'senin'){
//     console.log('Selamat bekerja!');
// }else if(iniHari === 'sabtu'){
//     console.log('Semoga jangan cepat berlalu');
// }else {
//     console.log('Yah biasa aja')
// }

// const nilai = '40';

// if(nilai < 50){
//     console.log('E')
// }else if(nilai < 60){
//     console.log('D')
// }else if(nilai < 70){
//     console.log('C')
// }else if(nilai < 80){
//     console.log('B')
// }else if(nilai < 100){
//     console.log('A')
// }

// const password = prompt("Buat password");

// Password harus sepanjang 6 karakter
// if(password.length >= 6){
//     if(password.indexOf(' ') === -1){
//         console.log("Password valid");
//     }else{
//         console.log('Password tidak boleh ada spasi');
//     }
// }else{
//     console.log("Password minimal 6 karakter");
// }

// if(password.length >= 6 && password.indexOf(' ') === -1){
//     console.log('Password valid');
// }else{
//     console.log('Password tidak memenuhi syarat');
// }

// const role = prompt('Masukan role akun');

// if(role !== 'admin'){
//     console.log('Akses ditolak');
// }else{
//     console.log('Boleh mengaksesnya');
// }

// const balonku = prompt('input warna balon');
// switch (balonku){
//     case 'merah':
//         console.log('warna merah');
//         break;
//     case 'hijau':
//         console.log('dooor');
//         break;
//     default:
//         console.log('bukan balon saya')
// }
// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }
// const animals = ['cat','dog','mouse','koala','zebra'];

// for (let i = 0; i < animals.length; i++){
//        console.log(i + 1,animals[i]);
// }
// const pilihan = 'abcd';
// for(let i = 1; i <= 10; i++){
//     console.log(`${i} .Soal nomor ${i}:`);
//     for(let j = 0; j < pilihan.length; j++){
//         console.log(`    ${pilihan[j]}. Pilihan jawaban`);
//     }
// }

// let num = 0;
// while (num < 10){
//     console.log(num);
//     num++;
// }
// const PASSWORD = 'Pass123';

// let guess = prompt('enter the password');
// while(guess !== PASSWORD){
//     guess = prompt('enter the password')
// }
// alert('congrast! the password is correct');
// let input = prompt('hei, ay something!');
// while (true){
//     input = prompt(input);
//     if(input.toLowerCase() === 'stop') break;
// }
// alert ('ok');

// for (let i = 0; i < 10000; i++){
//     console.log(i);
//     if(i === 100) break;
// }

// Studi kasus : Game tebak angka //

// let maximum = parseInt(prompt('Masukan nilai Maksimal'));
// while (!maximum){
//     maximum = parseInt(prompt('Masukan nilai Maksimal'));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

// let guess = parseInt(prompt('Isi tebakan kamu!'));
// let attempts = 1;

// while (parseInt(guess) !== targetNum){
//     attempts++;
//     if(guess > targetNum){
//         guess= parseInt(prompt('Terlalu tinggi! Tebak lagi:'));
//     }else{
//         guess= parseInt(prompt('Terlalu rendah! Tebak lagi:'));
//     }
// }
// alert(`Selamat Tebakan Kamu Benar! Dengan Percobaan ${attempts} kali`);

// const fruits = ['Banana','Orange','Apple','Mango'];

// for (let fruit of fruits){
//     console.log(`Buah ${fruit}`);
// }

// const studentScore = {
//     Olivia: 20,
//     Liam: 13,
//     Emma: 40,
//     Noah: 18,
//     Amelia: 32,
//     Oliver: 10,
//     Ava: 11,
//     Elijah: 21,
//     Sophia: 14,
//     Mateo: 22,
// };

// for (let student in studentScore){
//     console.log(`${student} memiliki skor ${studentScore[student]}`);
// }

// let total = 0;
// let scores = Object.values(studentScore);
// for (let score of scores){
//     total += score;
// }
// console.log(total / scores.length);


// Function //

// function lemparDadu(){
//     console.log(Math.floor(Math.random() * 6) + 1);
// }

// function nyanyi(){
//     console.log('Cek ..');
//     console.log('Do Re Mi..')
// }
// nyanyi();
// nyanyi();

// function sapa(nama){
//     console.log(`Halo,${nama}.Selamat Pagi!`);
// }
// sapa('Steel');

// function jumlahkan(a = 0, b = 0){
//     const total = a + b;
//     console.log(total);
// }
// jumlahkan(3, 7);


// Return //

// function jumlahkan(a, b){
//     if(typeof a !== 'number' || typeof b !== 'number'){
//         return 'Bukan Angka';
//     }
//     return a + b;
// }


// Scope //

// let programming = 'JavaScript';

// function typeSafe(){
//     let programming = 'TypeScript'; 
//     console.log(programming);
// }
// typeSafe();

// console.log(programming);

// let tinggi = 8;
// if(tinggi > 5){
//     var lebar = 10;
//     // console.log(lebar);
// }
// console.log('Lebar:', lebar);


// for(let index = 0; index < 10; index ++){
//     var lebar = index;
//     // console.log(indexNumber);
// }
// console.log('Lebar:', lebar);

// function lamarKerja(){
//     const jabatan = 'programmer';
//     function lebihDalam(){
//         function orangDalam(){
//             let kenalan = `Orang Dalam Bisa Memasukan ${jabatan}`;
//             console.log(kenalan)
//         }
//         orangDalam();
//     }
//     lebihDalam();
// }

// const hasilPerpangkatan = function (nilai,pembanding){
//     return nilai * pembanding;
// };

// function duaKali(func){
//     func()
//     func()
// }

// function lemparDadu(){
//     const hasil = Math.floor(Math.random() * 6) + 1;
//     console.log(hasil);
// }

// function hasilnyaAdalahFunction(){
//     const rand = Math.random();
//     if(rand > 0.1){
//         return function(){
//             console.log('Selamat,angkanya lebih besar');
//         };
//     }else{
//         return function(){
//             console.log('Maaf,mungkin bisa coba lagi');
//         };
//     }
// }
// function myFun(){
//     console.log('Hi');
//     return 'Hello';
// }
// const myMath = {
//     perkalian: function(x, y){
//         return x * y;
//     },
// };

// const saya = {
//     nama : 'steel',
//     hobi : 'sepak bola',
//     kenalan : function(){
//         return `Saya ${this.nama}.Hobi saya ${this.hobi}`
//     }
// }

// function teriak(msg){

//     try{
//         console.log(msg.toUpperCase());
//     }catch(error){
//         console.log(error);
//         console.log('Silahkan masukan tipr data string pada argument teriak()');
//     }
// }


// Foreach Method //

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// angka.forEach(function(el){
//     if(el % 2 === 0){
//         console.log(el);
//     }
// });

// const animes = [
//     {
//         title: 'Attack on Titan',
//         rating: 90,
//     },
//     {
//         title: 'One Piece',
//         rating: 89,
//     },
//     {
//         title: 'bleach',
//         rating: 82,
//     },
//     {
//         title: 'Hunter x Hunter',
//         rating: 90,
//     },
//     {
//         title: 'Naruto',
//         rating: 84,
//     },
// ];

// animes.forEach(function(anime){
//     console.log(`${anime.title} - ${anime.rating}/100`);
// });

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const angkaDouble = angka.map(function(num){
//     return num * 2;
// });

// const animes = [
//     {
//         title: 'Attack on Titan',
//         rating: 90,
//     },
//     {
//         title: 'One Piece',
//         rating: 89,
//     },
//     {
//         title: 'bleach',
//         rating: 82,
//     },
//     {
//         title: 'Hunter x Hunter',
//         rating: 90,
//     },
//     {
//         title: 'Naruto',
//         rating: 84,
//     },
// ];
// const animeList = animes.map(function(anime){
//     return anime.title.toUpperCase();
// });


// Function reguler //

// function perpangkatan(x){
//     return x * x;
// }
// const hasil = perpangkatan(7);


// Function expretion //

// function perpangkatan(x){
//     return x * x;
// }


// Arrow function //

// const perpangkatan = (x) => {
//     return x * x;
// };

// const random = () => {
//     return Math.floor(Math.random() * 1000);
// };

// const random = () => (
//     Math.floor(Math.random() * 1000)
// );

// const add = (a, b) => a + b


// Settimeout Dan Setinterval //

// console.log('Halo ...');
// setTimeout(() => {
//     console.log('Masih di sana gak?');
// },5000);
// console.log('Ana pergi yah...');

// const interval = setInterval(() => {
//     console.log(Math.random());
// },2000);

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const angkaBaru = angka.filter((n) => {
//     return n < 5;
// });

// const animes = [
//     {
//         title: 'Attack on Titan',
//         rating: 90,
//         year: 2013,
//     },
//     {
//         title: 'One Piece',
//         rating: 89,
//         year: 1999,
//     },
//     {
//         title: 'bleach',
//         rating: 82,
//         year: 2004,
//     },
//     {
//         title: 'Hunter x Hunter',
//         rating: 90,
//         year: 2001,
//     },
//     {
//         title: 'Naruto',
//         rating: 84,
//         year: 2002,
//     },
// ];

// const animeBagus = animes.filter((anime) => anime.rating >= 85);
// const judulAnimeBagus = animes.filter((anime) => anime.rating >= 85)
//     .map((anime) => anime.title);

// const animeCukupBagus = animes.filter((anime) => anime.rating < 85);
// const animeBAru = animes.filter((anime) => anime.year > 2010);


// Every Dan Some Method //

// const examScore = [80, 85, 70, 90, 93, 77];
// const isGraduate = examScore.every((score) => score >= 75);

// const animes = [
//     {
//         title: 'Attack on Titan',
//         rating: 90,
//         year: 2013,
//     },
//     {
//         title: 'One Piece',
//         rating: 89,
//         year: 1999,
//     },
//     {
//         title: 'bleach',
//         rating: 82,
//         year: 2004,
//     },
//     {
//         title: 'Hunter x Hunter',
//         rating: 90,
//         year: 2001,
//     },
//     {
//         title: 'Naruto',
//         rating: 84,
//         year: 2002,
//     },
// ];

// const isAnimeListNew = animes.some((anime) => anime.year > 2010);

// Reduce //

// const examScore = [80, 85, 70, 90, 93, 77];
// const total = examScore.reduce((total, score) => {
//     return total + score;
// });

// const animes = [
//     {
//         title: 'Attack on Titan',
//         rating: 90,
//         year: 2013,
//     },
//     {
//         title: 'One Piece',
//         rating: 89,
//         year: 1999,
//     },
//     {
//         title: 'bleach',
//         rating: 82,
//         year: 2004,
//     },
//     {
//         title: 'Hunter x Hunter',
//         rating: 95,
//         year: 2001,
//     },
//     {
//         title: 'Naruto',
//         rating: 84,
//         year: 2002,
//     },
// ];

// const bestAnime = animes.reduce((bestAnime, currAnime) => {
//     console.log(bestAnime, currAnime)
//     if(currAnime.rating > bestAnime.rating){
//         return currAnime;
//     }
//     return bestAnime;
// });

// const person = {
//     firstName: 'John',
//     lastName: 'Steel',
//     fullName: function (){
//         console.log(this);
//         return `${this.firstName} ${this.lastName}`;
//     },
// };


// Default Value Pada Function //

// function lemparDadu(sisi = 6){
//     return Math.floor(Math.random() * sisi) + 1;
// }

// function sapa(name,msg = 'Selamat Bekerja'){
//     console.log(`${name} ${msg}`);
// }


// Spread operator pada function //

// const angka = [1,2,3,4,5]
// Math.max(angka) //salah
// Math.max(...angka) //benar

// const angka = [1,2,3,4,5,6,7,8,9];
// const nama = ['Alex','Jose','Zidane','Carlo','Pep'];

// const campuran = [...nama,...angka];

// const user = {
//     name: 'John',
//     email: 'john@gmail.com',
// };
// const credential = {
//     password: 'password',
//     token: '3ini3i489239hd83'
// };

// const userBaru = {...user,...credential};


// Rest Param //
// const nama = ['Alex','Jose','Zidane','Carlo','Pep','Xabi','Xavi'];

// const pemenang = (gold,silver,bronze,...sisa) => {
//     console.log(`Medali emas di berkan kepada ${gold}`);
//     console.log(`Medali silver di berkan kepada ${silver}`);
//     console.log(`Medali perunggu di berkan kepada ${bronze}`);
//     console.log(`Peserta lainnya: ${sisa}`);
// };


// Destructing //
// const nama = ['Alex','Jose','Zidane','Carlo','Pep','Xabi','Xavi'];
// const [gold,silver,bronze,...peserta] = nama;

// const user = {
//     name: 'John',
//     email: 'john@gmail.com',
// };
// const { name: nama,email,phone = '084324232'} = user;

// const animes = [
//     {
//         title: 'Attack on Titan',
//         rating: 90,
//         year: 2013,
//     },
//     {
//         title: 'One Piece',
//         rating: 89,
//         year: 1999,
//     },
//     {
//         title: 'bleach',
//         rating: 82,
//         year: 2004,
//     },
//     {
//         title: 'Hunter x Hunter',
//         rating: 95,
//         year: 2001,
//     },
//     {
//         title: 'Naruto',
//         rating: 84,
//         year: 2002,
//     },
// ];

// const anime = animes.map(({title,year,rating}) => {
//     return `${title} (${year}) rating: ${rating}`;
// });