//!------- Js Object- Array-----------//

//* 1. reduce() kullanarak nesne dizisinde kaç kişinin belirli bir
//* yaşın üzerinde olduğunu sayın.
 const people = [
{ id: 1, name: "Ali", age: 25 },
{ id: 2, name: "Ayşe", age: 30 },
{ id: 3, name: "Mehmet", age: 20 },
{ id: 4, name: "Zeynep", age: 40 }
];

//* Örneğin, 25 yaşından büyük olanları sayın.
// ? const bigage= people.reduce((small,big)=> {
//     if(big.age > 25){
//         if(!small[big.age]){
//             small[big.age] = [];
//         }
//         small[big.age].push(big)
//     }
//     return small;
// },{} );
// console.log(bigage)


// ?const newarray = people.map(i =>{
//     if(i.age>=25){
//         console.log(i.name)
//     }
// })

//* 2. map() ve reduce() kullanarak nesne dizisini id 'ye göre bir
//* nesneye çevirin.
// const people = [
// { id: 1, name: "Ali" },
// { id: 2, name: "Ayşe" }
// ];
//? Beklenen çıktı: { 1: "Ali", 2: "Ayşe" }

//!  Bu çiftleri bir nesne haline getirelim
//? Object.fromEntries(), [anahtar, değer] çiftlerinden bir nesne (object) oluşturur

// const Idname = people.sort((a,b)=> a.id - b.id)
// const result = Object.fromEntries(Idname.map(i => [i.id, i.name]))

// console.log(result)

//* 3. filter() ve reduce() ile belirli bir yaş aralığındaki kişilerin
//* toplam yaşını bulun.
// const people = [
// { id: 1, name: "Ali", age: 25 },
// { id: 2, name: "Ayşe", age: 30 },
// { id: 3, name: "Mehmet", age: 20 },
// { id: 4, name: "Zeynep", age: 40 }
// ];


//* Örneğin, 20 ile 35 yaş arasındaki kişilerin toplam yaşını hesaplayın.
//* 4. map() kullanarak isimleri ters çevirin.
// const names = ["Ali", "Ayşe", "Mehmet", "Zeynep"];
//? Beklenen çıktı: ["ilA", "eşyA", "temheM", "penyeZ"]

//* 5. reduce() kullanarak dizide tekrar eden elemanların sayısını
//* içeren bir nesne oluşturun.
// const items = ["elma", "armut", "elma", "çilek", "armut", "muz", "elma"];
//? Beklenen çıktı: { elma: 3, armut: 2, çilek: 1, muz: 1 }

//* 6. map() kullanarak nesne dizisini yeni bir formata dönüştürün.
// const people = [
// { id: 1, firstName: "Ali", lastName: "Yılmaz" },
// { id: 2, firstName: "Ayşe", lastName: "Demir" }
// ];
//? Beklenen çıktı: [{ fullName: "Ali Yılmaz" }, { fullName: "Ayşe Demir" }]

//* 7. filter() ile nesne dizisinden belirli bir özelliği olmayanları
//* kaldırın.
// const people = [
// { id: 1, name: "Ali", age: 25 },
// { id: 2, name: "Ayşe" },
// { id: 3, name: "Mehmet", age: 20 }
// ];
//* Yaşı olmayanları kaldırın.

//* 8. reduce() ile iç içe geçmiş dizileri düzleştirin.
// const nestedArrays = [[1, 2], [3, 4], [5, [6, 7]]];
//? Beklenen çıktı: [1, 2, 3, 4, 5, 6, 7]

//* 9. map() ile belirli bir özelliği olmayan nesneler için varsayılan
//* değerler atayın.
// const people = [
// { id: 1, name: "Ali", age: 25 },
// { id: 2, name: "Ayşe" }
// ];
//? Yaşı olmayanlara varsayılan olarak 18 atayın.

//* 10. filter() kullanarak null veya undefined değerleri kaldırın.
// const values = [1, null, "test", undefined, 5, "hello"];
//? Beklenen çıktı: [1, "test", 5, "hello"]

//* 11. reduce() kullanarak nesne dizisinden belirli bir özelliğe göre
//* gruplama yapın.
// const people = [
// { id: 1, name: "Ali", ageGroup: "young" },
// { id: 2, name: "Ayşe", ageGroup: "adult" },
// { id: 3, name: "Mehmet", ageGroup: "young" }
// ];
//* Yaş grubuna göre gruplandırın.

//* 12. map() ve reduce() ile dizideki sayıları tek veya çift olarak
//* gruplandırın.
// const numbers = [1, 2, 3, 4, 5, 6];
//? Beklenen çıktı: { tek: [1, 3, 5], çift: [2, 4, 6] }

//* 13. filter() ile sadece belirli bir harfle başlayan isimleri
//* döndürün.
// const names = ["Ali", "Ayşe", "Mehmet", "Zeynep"];
//* Örneğin, "A" ile başlayanları seçin.

//* 14. map() kullanarak dizideki her nesneye yeni bir özellik
//* ekleyin.
// const people = [
// { id: 1, name: "Ali" },
// { id: 2, name: "Ayşe" }
// ];
//* Her nesneye `status: "active"` özelliğini ekleyin.

//* 15. reduce() kullanarak dizideki string'lerin toplam uzunluğunu
//* hesaplayın.
// const words = ["hello", "world", "JavaScript"];
//? Beklenen çıktı: 18

//* 16. filter() ile yalnızca belirli bir uzunluktaki string’leri
//* döndürün.
// const words = ["hello", "hi", "JavaScript", "CSS"];
//* 3 harf ve daha uzun olanları seçin.

//*17. map() ve reduce() ile nesne dizisini belirli bir yapıya
//* dönüştürün.
// const people = [
// { id: 1, name: "Ali", age: 25 },
// { id: 2, name: "Ayşe", age: 30 }
// ];
//? Beklenen çıktı: { Ali: 25, Ayşe: 30 }

//* 18. filter() ile belirli bir özelliği içeren nesneleri bulun.
// const people = [
// { id: 1, name: "Ali", age: 25 },
// { id: 2, name: "Ayşe", city: "Ankara" }
// ];
//* Şehir bilgisi olanları seçin.

//* 19. reduce() kullanarak iç içe geçmiş nesnelerden belirli bir
//* değeri çekin.
// const data = {
// user: { profile: { name: "Ali", age: 25 } }
// };
//* `name` değerini çekin.

//* 20. map() , filter() ve reduce() 'u aynı kod bloğunda kullanarak
//* kompleks bir dönüşüm yapın.
// const people = [
// { id: 1, name: "Ali", age: 25 },
// { id: 2, name: "Ayşe", age: 30 },
// { id: 3, name: "Mehmet", age: 20 }
// ];
//* 25 yaşından büyük olanların isimlerini büyük harfle yazın ve toplam yaşla
//* rını bulun.