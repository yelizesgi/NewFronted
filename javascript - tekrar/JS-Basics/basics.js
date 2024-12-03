//*******?IF Else */
//1- Kullanıcının yaşına ve üyelik durumuna göre farklı mesajlar veren bir if-else yapısı yazın.
// Kullanıcının yaşı 18'den büyükse ve VIP üyesi ise "Hoşgeldiniz, VIP Üye" yazdırın.
// Yaşı 18'den büyükse ve normal üye ise "Hoşgeldiniz" yazdırın.
// Yaşı 18 veya daha küçükse "Giriş yapamazsınız" yazdırın.
// const age = 20;
// const isVIP = true;
console.log("********JS Basic Refresh*******");
//? const age= +prompt("Lutfen yasınızı giriniz");
//? const vip = prompt("Vıp üyesi misiniz E/H");
//? if(age >= 18 && vip === "E"){
//?    console.log(`Yaşiniz: ${age}, Hoşgeldiniz, VIP üye`)
//? }else if(age > 18){
//?      console.log(`Yaşiniz: ${age}, Hoşgeldiniz`)
//? }
//? else{
//?     console.log(`Yaşiniz: ${age}, Giriş yapamazsınız...`)
//? }

//* 3- Hava durumuna göre kıyafet önerisi veren bir if-else yapısı yazın.
//* Hava durumu "güneşli" ise "T-shirt giyin", "yağmurlu" ise "Şemsiye alın", "karlı" ise "Mont giyin" yazdırın.
//* Diğer durumlar için "Hava durumunu kontrol edin" yazdırın.
//* const weather = "yağmurlu"; // Bu değeri farklı hava durumlarıyla değiştirerek test edin.
//* const weather = "yağmurlu";

//? const degree = prompt("Lütfen hava sıcaklığını giriniz")
//? if(degree > 22){
//?     console.log(`Girdiğiniz sıcaklık: ${degree}, Hava güneşli, T-shirt giyin`)
//? }else if(degree < 22 && degree > 5){
//?     console.log(`Girdiğiniz sıcaklık: ${degree}, Hava yağmurlu, Şemsiye alın`)
//? }else{
//?     console.log(`Girdiğiniz sıcaklık: ${degree}, Hava karlı, Mont giyin`)
//? }

//*4- Kullanıcı adı ve şifreye göre giriş kontrolü yapan bir if-else yapısı yazın.
//* Kullanıcı adı "admin" ve şifre "1234" ise "Giriş başarılı", değilse "Giriş başarısız" yazdırın.
//* const username = "admin"; // Bu değeri farklı kullanıcı adlarıyla değiştirerek test edin.
//* const password = "1234"; // Bu değeri farklı şifrelerle değiştirerek test edin.

//? const username = prompt("Please enter your username")
//? const password = prompt("Please enter your password")
//? if(username === "admin" && password === "1234"){
//?     console.log(`UserName: ${username}, Giriş başarili`)
//? }else{
//?     console.log(`UserName: ${username}, Şifre eşleştirmesi gerçekleşmedi giriş başarisiz`)
//? }

// //***************SORU1*******************
//*5- Kullanıcınan alınan notu
//* 40 ve altı harf notu "FF"
//* 50 ve üstü harf notu "DD"
//* 65 ve üstü harf notu "CC"
//* 89 ve üstü harf notu "BB"
//* 90 ve üstü harf notu "AA"

//? const note = +prompt("Please enter your exam note");

//? if(note<40){
//?     console.log(`Girdiğiniz Not: ${note}, harf notunuz FF`)
//? }else if(note <=50){
//?     console.log(`Girdiğiniz Not: ${note}, harf notunuz DD`)
//? }else if(note <=65){
//?     console.log(`Girdiğiniz Not: ${note}, harf notunuz CC`)
//? }else if(note <=89){
//?     console.log(`Girdiğiniz Not: ${note}, harf notunuz BB`)
//? }else{
//?     console.log(`Girdiğiniz Not: ${note}, harf notunuz AA`)
//? }

// //***************SORU2*******************
//* Kullanıcıdan alınan 3 sayıyından en büyüğünü gösteren bir if koşulunu yazınız

//? const num1= +prompt("Please enter the first number")
//? const num2= +prompt("Please enter the second number")
//? const num3= +prompt("Please enter the third number")

//? if(num1>num2 && num1>num3){
//?     console.log(`Girmiş olduğunuz sayılar: ${num1}, ${num2}, ${num3}, büyük sayı ${num1} `)
//? }else if(num2>num1 && num2>num3){
//?     console.log(`Girmiş olduğunuz sayılar: ${num1}, ${num2}, ${num3}, büyük sayı ${num2} `)
//? }else{
//?     console.log(`Girmiş olduğunuz sayılar: ${num1}, ${num2}, ${num3}, büyük sayı ${num3} `)
//? }

// //***************SORU*******************
//* Kullanıcıdan alınan 3 sayıyı büyükten küçüğe sıralayan bir if koşulunu yazınız

//?  const say1= +prompt("Please enter the first number")
//?  const say2= +prompt("Please enter the second number")
//?  const say3= +prompt("Please enter the third number")

//? if(say1>say2 && say1>say3 && say2>say3){
//?     console.log(`Girilen sayilar: ${say1}, ${say2}, ${say3}, siralama : ${say1}>${say2}>${say3} `)
//? }else if(say1>say2 && say1>say3 && say3>say2){
//?     console.log(`Girilen sayilar: ${say1}, ${say2}, ${say3}, siralama : ${say1}>${say3}>${say2} `)
//? }else if(say2>say1 && say2>say3 && say1>say3){
//?     console.log(`Girilen sayilar: ${say1}, ${say2}, ${say3}, siralama : ${say2}>${say1}>${say3} `)
//? }else if(say2>say1 && say2>say3 && say3>say1){
//?     console.log(`Girilen sayilar: ${say1}, ${say2}, ${say3}, siralama : ${say2}>${say3}>${say1} `)
//? }else if(say3>say1 && say3>say2 && say1>say2){
//?     console.log(`Girilen sayilar: ${say1}, ${say2}, ${say3}, siralama : ${say3}>${say1}>${say2} `)
//? }else{
//?     console.log(`Girilen sayilar: ${say1}, ${say2}, ${say3}, siralama : ${say3}>${say2}>${say1} `)
//? }

// // ----------------SORU2-------------------//

// let month = prompt("Please write a month");
// let result1 = "";
// switch (month) {
//   case "january":
//     result1 = "1st";
//     break;
//   case "february":
//     result1 = "2nd";
//     break;
//   case "march":
//     result1 = "3rd";
//     break;
//   case "april":
//     result1 = "4th";
//     break;
//   case "may":
//     result1 = "5th";
//     break;
//   case "june":
//     result1 = "6th";
//     break;
//   case "july":
//     result1 = "7th";
//     break;
//   case "august":
//     result1 = "8th";
//     break;
//   case "september":
//     result1 = "9th";
//     break;
//   case "october":
//     result1 = "10th";
//     break;
//   case "november":
//     result1 = "11th";
//     break;
//   case "december":
//     result1 = "12th";

//     break;
//   default:
//     alert("invalid entry");
//     break;
// }

// console.log(`${month} is the ${result1} month of the year`);

// // ----------------SORU3-------------------//

// alert(
//   "please enter only numbers with different values in order to see the numbers; sum, multiply, min and max."
// );
// x = +prompt();
// y = +prompt();
// z = +prompt();

// if (x != y && y != x && y != z) {
//   if (x < y && y < z) {
//     smallNumber = x;
//     bigNumber = z;
//   } else if (x < y && z < y) {
//     smallNumber = x;
//     bigNumber = y;
//   } else if (y < z && z < x) {
//     smallNumber = y;
//     bigNumber = x;
//   } else if (y < x && x < z) {
//     smallNumber = y;
//     bigNumber = z;
//   } else if (z < x && x < y) {
//     smallNumber = z;
//     bigNumber = y;
//   } else if (z < y && y < x) {
//     smallNumber = z;
//     bigNumber = x;
//   }

//   console.log("sum of the numbers you have entered is:", x + y + z);

//   console.log("multiply of the numbers you have entered is:", x * y * z);

//   console.log("smallest number you have entered is", smallNumber);

//   console.log("biggest number you have entered is", bigNumber);

//   alert("you can see the results in console section");
// } else if (x == z || y == x || y == z) {
//   alert(
//     "equivalance is not a part of the programm. Please enter numbers with different values"
//   );
// } else {
//   alert("invalid input please try again");
// }

// ----------------SORU4-------------------//

// ?let input = +prompt("Please enter a number to see the number is even or odd.");
//? let result = input % 2 == 0 ? "even" : "odd";
//? console.log(result);
//----------------SORU5-------------------//

// let process = prompt(
//   "Welcome to the fahrenheit-celcius converter. You can type F for Fahrenheit to Celcius or C for Celcius to Fahrenheit."
// );

// console.log(process);
// if (process === "f" || process == "F") {
//   let fahrenheit = +prompt(
//     "please enter a number of fahreinheit to convert into celcius"
//   );

//   let celcius = (fahrenheit - 32) * 0.5556;
//   console.log(`${celcius} Celcius`);
//   alert("you can see the result in console");
// } else if (process == "c" || process == "C") {
//   let celcius = +prompt(
//     "please enter a number of celcius to convert into fahrenheit"
//   );

//   let fahrenheit = celcius * 1.8 + 32;
//   console.log(`${fahrenheit} Fahrenheit`);
//   alert("you can see the result in console");
// } else {
//   alert("invalid input please try again");
// }

//**! Ternary */

// Bir çalışanın performans puanına göre bonus hesaplayan bir ternary ifadesi yazın.
// Performans puanı 90 ve üzeri ise bonus %20, 80-89 arası ise %10, 70-79 arası ise %5, 70'in altı ise bonus yok.
// Çalışanın maaşı 1000 birim olsun.
// const performanceScore = 85; // Bu değeri değiştirerek test edin.
// const salary = 1000;

//? const performans = +prompt("Please enter the performans point");
//? const salary = +prompt("Please enter salary");
//? const bonus = performans >= 90 ? salary * 0.2 : salary * 0.1;
//? console.log(salary + bonus);

// Program 0-100 arasında rasgele bir sayi tutacak ve kullanicinin bu sayiyi 5 kere(hak) de bilmesini isteyecektir. Her yanlista hakkini bir dusurecek ve ARTTIR/AZALT diyerek kullaniciyi yonlendirecektir.Sonuc olarak kullanicinin hakki 0 olursa "Uzgunuz kaybettiniz" eger bildi ise "Tebrikler ... denemede bildiniz" yazacaktir.

// //TODO:
// //*-------------------------------------------------------
// const students = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"]
// //* SORU: ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
// //* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
// //* ne kadar sayida bulunuldugunu ana programa dondurecek bir
// //* fonksiyon yaziniz. Eger aranilan isimde bir ogrenci yok ise
// //* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
// //*--------------------------------------------------------

// //! ogrenciAra("ahmet")  ===> "Ahmet 2 adet bulundu"
// //! ogrenciAra("canan")  ===> "Canan bulunamadı"

// //!Size bir  cümle verildi. "Clarusway" kelimesini bulmanız istendi. Ve eğer bulursanız şuna benzer bir cümle döndürmeniz gerekir:
// //? findClarusway("I am finding Clarusway !") ➞ "I found Clarusway at 4!"

// //? Clarusway'i bulamıyorsanız,
// // findClarusway("I am not finding!") ➞ "I can't find Clarusway :(" yazın.

// test: "I like Clarusway"  // Output : I found at Clarusway at 3!;
// test : "I like bootcamps " // Output  I can't find Clarusway :(;

// function findClarusway(sentence){
//     // write your code here
// }
