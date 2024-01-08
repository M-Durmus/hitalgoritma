// Girdi olarak verilen bir string içindeki ardışık aynı karakterleri sayan ve sadece üç veya
// daha fazla tekrarlayan karakterler için sayı ve karakteri içeren yeni bir string oluşturan
// bir algoritma tasarlayın.
// Örnek girdi : aaabbbbccccccaaaa
// Çıktı : 3a4b6c4a

let sampleInput = "aaabbbbccccccaaaa";
let inpurArr = sampleInput.split("");

result = [];

inputArr.forEach((letter) => {});

counts = {};
inpurArr.map((letter) => {
  if (counts[letter] == undefined) {
    counts[letter] = 0;
  }
  counts[letter]++;
});

result = "";
Object.keys(counts).map((letter) => {
  result += `${counts[letter]}${letter}`;
});

console.log(result);

// Tamamlanamadı :(
