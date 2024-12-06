"use strict";
// 1. Array (Massiv)
// Task: TypeScriptda massiv yaratib, undagi elementlarning turini aniqlang. 
// Misol: faqat string va number turidagi elementlardan iborat massiv yaratib, 
// undan foydalaning.
// Misol:
Object.defineProperty(exports, "__esModule", { value: true });
const arr = [1, "salom", "alik"];
console.log(arr);
// 2. Tuple (Kuple)
// Task: Tupledan foydalanib, bir nechta turdagi ma'lumotlarni o'z ichiga olgan 
// o'zgaruvchilar yaratib chiqing. Misol uchun: ism, yosh va tug'ilgan sana.
// Misol:
const person = ["Qulpiniso", 17, "12.12.2007"];
console.log(person);
// 3. Type Aliases (Tur nomi aliaslari)
// Task: type yordamida yangi tur yaratib, uni bir nechta joyda ishlatishga misol keltiring. 
// Misol: biror shaxsning malumotlari (ism, yosh, manzil).
// Misol:
let fullInfo = ["Olim", 32, "Tashkent"];
console.log(fullInfo);
// 4. Union Type (Ittifoq turi)
// Task: Union turidan foydalanib, bir o'zgaruvchiga bir nechta turdagi qiymatlarni qabul 
// qilishini ta'minlang. Masalan, o'zgaruvchi raqam yoki matn bo'lishi mumkin.
// Misol:
let mix = 5; // true or "salom" bersa ishlaydi
console.log(mix);
// 5. Function (Funktsiya)
// Task: TypeScriptda funksiya yaratib, uning parametr va qaytish turini aniqlang. 
// Misol: ikkita raqamni qo'shadigan funksiya.
// Misol:
function add(a, b) {
    return a + b;
}
console.log(add(1, 5));
// 6. Literal Type (Literal tur)
// Task: Literal turidan foydalanib, faqat muayyan 
// qiymatlarni qabul qiladigan o'zgaruvchi yaratish.
// Misol:
const str = "Salom dunyo";
const len = str.length;
const sp = str.split(' ');
console.log(`len : ${len}`);
console.log(sp);
console.log(`str: ${str}`);
const object = {
    name: "Olim",
    age: 33,
    address: "Tashkent"
};
console.log(object);
const object2 = {
    name: "Olim",
    address: "Tashkent"
};
console.log(object2);
const person2 = {
    name: "Olim",
    age: 44,
    isMarried: false,
    address: "Tashkent"
};
// person2.name = "Qulpiniso" BU XOLAT NOTOGRI CHUNKI READONLY QILGANDAN SONG QIYAMATNI OZGARTIRIB BOLMAYDI
console.log(person2);
// 10. Type Assertions (Turga oid aniqlashlar)
// Task: Type assertion yordamida TypeScriptga ma'lum bir turga ega bo'lgan o'zgaruvchini ko'rsatish.
// Misol:
let obj = { name: "olim" };
