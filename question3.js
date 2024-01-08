// Bir web uygulaması için bir zamanlama algoritması geliştirmeniz gerekiyor. Bu algoritma,
// kullanıcıların belirli zaman aralıklarında yapılacak etkinlikleri planlamalarına yardımcı olacak.
// Kullanıcılar tarafından girilen zaman aralıkları çakışabilir ve sizin göreviniz, herhangi bir
// çakışmayı en aza indirecek şekilde bu zaman aralıklarını düzenlemek.
// • Her zaman aralığı, başlangıç ve bitiş zamanlarını temsil eden bir çift olarak verilir
// (örneğin, [[1, 4], [3, 5], [6, 8], [7, 9]]).
// • Verilen zaman aralıklarını analiz eder ve çakışan zaman aralıklarını belirler.
// • Çakışan zaman aralıklarını optimize ederek mümkün olan en az sayıda çakışma ile
// yeni bir zaman aralığı dizisi oluşturur.
// • Optimize edilmiş zaman aralıklarını döndürür.
// Örnek:
// Girdi: [[1, 4], [2, 5], [6, 8], [7, 9]]
// Çıktı: Bir çakışma olmadan optimize edilmiş zaman aralıkları (Örneğin: [[1, 5], [6, 9]])

let inputTime = [
  [1, 4],
  [2, 5],
  [6, 8],
  [7, 9],
  [11, 14],
  [10, 12],
];

let day = {};
for (let index = 1; index < 24; index++) {
  day[index] = false;
}

for (let i = 0; i < inputTime.length; i++) {
  const firstElement = inputTime[i];
  for (let j = firstElement[0]; j < firstElement[1]; j++) {
    day[j] = true;
  }
}

let result = [];
let overlap = [];
Object.keys(day).map((hour) => {
  if (day[hour] && overlap.length == 0) {
    overlap.push(hour);
  } else if (!day[hour] && overlap.length == 1) {
    overlap.push(hour);
    result.push(overlap);
    overlap = [];
  }
});

console.log(result);
