                                // *---------Array İterations----------*//

                                           //?----Basic------// 
const exerArr = [-1, -2, -3, 0,1,2,3,4,5,6,7,8,9,10,12,14, 50, 55, 60, 70]



//? 1. Bir dizideki pozitif sayıların karesini alıp, sonucu 50'den büyük olanları 
//! filter(), map()
//* döndüren bir fonksiyon yazın.
//* const q1 = exerArr
//* .filter((i) => i > 0)
//* .map((i) => i**2)
//* .filter((i) => i > 50);
//* console.log(q1);


//? 2. Bir dizideki tüm sayıların çarpımını hesaplayan bir fonksiyon yazın.
//! reduce(a,b) single result

//* const q2 = exerArr.reduce((i, x) => i * x);
//* console.log(q2);

//? 3. Bir dizideki ilk negatif sayının indeksini döndüren bir fonksiyon yazın.

//* const q3 = exerArr.findIndex((i) => i <0)
//* console.log(q3);

const exerstr = ['Yeliz', 'Murat', 'Mehmet Efe', 'Melek']

//? 4. Bir dizideki kelimelerin hepsini büyük harfe çeviren bir fonksiyon yazın.

//* const q4 = exerstr.map((i) => i.toUpperCase());
//* console.log(q4);


//? 5. Bir dizide ilk 50'den büyük sayıyı bulan bir fonksiyon yazın.
//! find()

//* const q5 = exerArr.find((i) => i > 50);
//* console.log(q5);

//? 6. Bir dizideki sayıların karesini alıp, sonucu 100'den küçük olanları döndüren
//? bir fonksiyon yazın.

//* const q6 = exerArr.map((i) => i*i).filter((i) => i < 100);
//* console.log(q6);



// 7. Bir dizide tüm elemanların çift sayı olup olmadığını kontrol eden bir
// fonksiyon yazın.



// 8. Bir diziyi tersten oluşturmak için bir fonksiyon yazın.
// 9. Bir dizide en az bir elemanın 10'un katı olup olmadığını kontrol eden bir
// fonksiyon yazın.
// 10. Bir dizideki tüm kelimeleri ters çeviren bir fonksiyon yazın.
// 11. Bir diziden sadece tek sayıları döndüren bir fonksiyon yazın.
// 12. Bir dizideki her elemana indeksini ekleyip yeni bir dizi döndüren bir
// fonksiyon yazın.
// 13. Bir dizideki en büyük sayıyı bulan bir fonksiyon yazın.
// 14. Bir dizideki her elemanı 3 artıran bir fonksiyon yazın (diziyi yerinde
// değiştirerek).
// 15. Bir dizide ilk defa 10 olan elemanın indeksini döndüren bir fonksiyon yazın.
// 16. Bir dizide tüm sayıların pozitif olup olmadığını kontrol eden bir fonksiyon
// yazın.
// 17. Bir dizideki 4 karakterden uzun kelimeleri döndüren bir fonksiyon yazın.
// 18. Bir dizideki alt dizileri düz bir liste haline getiren bir fonksiyon yazın.
// 19. Bir dizideki kelimeleri harflere ayırıp düz bir liste haline getiren bir fonksiyon
// yazın.
// 20. Bir dizide çift sayıların toplamını hesaplayan bir fonksiyon yazın.


                            //!---------------------Medium Level----------------//


// 1. Bir dizideki elemanların sırasını tersine çeviren bir algoritma yazın, ancak
// dizi elemanlarını doğrudan değiştirmeden yeni bir dizi oluşturun.
// 2. Bir dizideki tüm sayıları çift mi yoksa tek mi olduğuna göre iki ayrı alt diziye
// ayıran bir fonksiyon yazın.
// 3. Bir dizide her bir elemandan, kendisinden sonra gelen sayıların toplamını
// hesaplayıp yeni bir dizi oluşturan bir algoritma yazın.
// 4. Bir dizide, en sık tekrar eden elemanı ve tekrar sayısını bulan bir algoritma
// yazın.
// 5. Bir dizideki tüm elemanların modunu (en çok tekrar eden eleman)
// hesaplayan bir algoritma yazın.
// 6. Bir diziyi alt dizilere bölerek (örneğin her 3 elemanda bir) alt dizilerden
// oluşan bir dizi döndüren bir fonksiyon yazın.
// Örnek:
// [1, 2, 3, 4, 5, 6] → [[1, 2, 3], [4, 5, 6]] .
// 7. Bir dizideki tüm elemanların birbirine olan farklarını hesaplayıp yeni bir dizi
// döndüren bir fonksiyon yazın.
// Örnek:
// [10, 7, 4] → [3, 3] .
// 8. Bir dizide, her bir elemanı kendisinin karesiyle ve indeksinin çarpımıyla
// değiştiren bir algoritma yazın.
// 9. Bir dizideki sayıları büyükten küçüğe sıralayın, ancak dizinin orijinal sırasını
// bozmadan sadece yeni diziyi döndürün.
// 10. Bir diziyi, her elemanın toplam uzunluğunu hesaplayarak sıralayan bir
// algoritma yazın.
// Örnek:
// ['a', 'bb', 'ccc'] → ['ccc', 'bb', 'a'] .
// 11. Bir dizideki ilk 5 elemanı toplayan, geri kalanını sıfır olarak değiştiren bir
// fonksiyon yazın.
// Örnek:
// [1, 2, 3, 4, 5, 6, 7] → [15, 0, 0, 0, 0, 0, 0] .
// 12. Bir dizide, elemanları belirli bir eşikten (örneğin 10) büyük ve küçük olmak
// üzere ikiye ayıran bir algoritma yazın.
// 13. Bir dizideki elemanların indeksleriyle birlikte toplanmasını sağlayan bir
// algoritma yazın.
// Örnek:
// [5, 10, 15] → [5, 11, 17] .
// 14. Bir dizide, her bir elemanın karesinin toplamını döndüren bir fonksiyon
// yazın, ancak negatif sayıları hesaba katmayın.
// 15. Bir dizide, elemanların tekrar sayısını dikkate alarak yeni bir dizi döndüren
// bir algoritma yazın.
// Örnek:
// [2, 2, 3, 3, 3] → [4, 9] .
// 16. Bir dizide, indekslere göre elemanları tek ve çift indeksler olarak iki ayrı
// diziye ayıran bir algoritma yazın.
// 17. Bir dizide, sadece rakam olan string’leri toplayarak toplamı döndüren bir
// fonksiyon yazın.
// Örnek:
// ['1', '2', 'abc', '3'] → 6 .
// 18. Bir dizide, art arda tekrar eden elemanları tek bir elemana indirgeyen bir
// algoritma yazın.
// Örnek:
// [1, 1, 2, 3, 3, 3, 4] → [1, 2, 3, 4] .
// 19. Bir dizideki tüm çift sayıların karesini alıp, bu karelerin toplamını hesaplayan
// bir fonksiyon yazın.
// 20. Bir dizideki her elemanı indeksine göre çevirerek bir string döndüren bir
// algoritma yazın.
// Örnek:
// [10, 20, 30] → "0:10, 1:20, 2:30" .