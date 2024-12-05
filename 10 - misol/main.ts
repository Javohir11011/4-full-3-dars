// 1. Array (Massiv)
// Task: TypeScriptda massiv yaratib, undagi elementlarning turini aniqlang. 
// Misol: faqat string va number turidagi elementlardan iborat massiv yaratib, 
// undan foydalaning.
// Misol:

import { func } from "joi";

const arr : Array<number | string> = [1,"salom", "alik"]
console.log(arr);


// 2. Tuple (Kuple)
// Task: Tupledan foydalanib, bir nechta turdagi ma'lumotlarni o'z ichiga olgan 
// o'zgaruvchilar yaratib chiqing. Misol uchun: ism, yosh va tug'ilgan sana.
// Misol:

const person : [String, Number, String] = ["Qulpiniso", 17, "12.12.2007"]
console.log(person);



// 3. Type Aliases (Tur nomi aliaslari)
// Task: type yordamida yangi tur yaratib, uni bir nechta joyda ishlatishga misol keltiring. 
// Misol: biror shaxsning malumotlari (ism, yosh, manzil).
// Misol:


let fullInfo: [string?, number?, string?] = ["Olim", 32, "Tashkent"]
console.log(fullInfo);




// 4. Union Type (Ittifoq turi)
// Task: Union turidan foydalanib, bir o'zgaruvchiga bir nechta turdagi qiymatlarni qabul 
// qilishini ta'minlang. Masalan, o'zgaruvchi raqam yoki matn bo'lishi mumkin.
// Misol:


let mix : string | number | boolean  = 5 // true or "salom" bersa ishlaydi
console.log(mix);


// 5. Function (Funktsiya)
// Task: TypeScriptda funksiya yaratib, uning parametr va qaytish turini aniqlang. 
// Misol: ikkita raqamni qo'shadigan funksiya.
// Misol:

function add(a:number, b:number):number{
    return a + b
}

console.log(add(1, 5));



// 6. Literal Type (Literal tur)
// Task: Literal turidan foydalanib, faqat muayyan 
// qiymatlarni qabul qiladigan o'zgaruvchi yaratish.
// Misol:

const str = "Salom dunyo"
const len = str.length
const sp = str.split(' ')
console.log(`len : ${len}`);
console.log(sp);
console.log(`str: ${str}`);


// 7. Object Type (Obyekt turi)
// Task: Object turidan foydalanib, ma'lum bir tuzilishga ega obyekt yaratib, 
//uning xususiyatlarini aniqlang.
// Misol:

type obj = {
    name : string,
    age : number,
    address : string,
    isMerried ? : boolean
}


const object : obj = {
    name : "Olim",
    age : 33,
    address : "Tashkent"
}


console.log(object);
