// Bir dizi tam sayı verildiğinde, aralarındaki mutlak fark en az olan tüm çiftleri bulun ve
// bu çiftleri döndürün. Eğer birden fazla çift en küçük farka sahipse, hepsini
// döndürmelisiniz.
// Girdi: [-120, 2, -12, -121, 1]
// Beklenen Çıktı: Ardışık sayı çiftleri arasındaki en küçük farkı olan sayı çiftlerinin bir listesi veya
// sözlüğü. Örneğin, bu girdi için en küçük farka sahip çiftler [-121, -120] ve [1, 2] olabilir. Bu
// durumda, çıktı sözlük formatında bu çiftleri içerebilir.
// Notlar:
// Sayılar listesini sıralamayı ve ardışık elemanlar arasındaki farkları hesaplamayı unutmayın.
// En küçük farkı birden fazla çift paylaşabilir, bu durumda tüm bu çiftleri döndürmelisiniz.

let input = [-120, 2, -12, -121, 1];

let minResult;
let resultArr = [];
for (let i = 0; i < input.length; i++) {
  const firstElement = input[i];
  for (let j = 0; j < input.length; j++) {
    if (i == j) continue;

    const secondElement = input[j];
    if (firstElement > secondElement) continue;

    let diff = Math.abs(firstElement - secondElement);

    if (minResult == undefined || diff < minResult) {
      minResult = diff;
      resultArr = [];
    }

    if (diff == minResult) {
      resultArr.push([firstElement, secondElement]);
    }
  }
}

console.log(resultArr);
