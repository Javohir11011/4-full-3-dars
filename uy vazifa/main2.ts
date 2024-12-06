// #### 1.1. Ikkita massiv berilgan. Har ikkala massivda ham mavjud bo'lgan elementlarni toping va ularning tartiblangan
// ro'yxatini qaytaring.

// ```typescript
// // Input
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [4, 5, 6, 7, 8];

// // Output
// console.log(findCommonElements(array1, array2)); // [4, 5]

const array1 : Array < number > = [1, 2, 3, 4, 5];
const array2 : Array < number > = [4, 5, 6, 7, 8];
const emptyArray :Array <Number >=[]
const findCommonElements = (array1:Array<number>, array2:Array<number>)=>{
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] in array2) {
        emptyArray.push(array1[i])
      }
    }
    return emptyArray;
};
console.log(findCommonElements);




// 1.2. Foydalanuvchi haqida ma'lumotlarni saqlovchi tuple yaratib, bu ma'lumotlarni qaytaradigan funksiya yozing.

// ```typescript
// // Input
// const userInfo = getUserInfo();

// // Output
// console.log(userInfo); // ["Ali", 30, "Toshkent", true]
// ```
const person3 : [string, number, string, boolean] = ["olim", 22, "Tashkent", false]
const userInfo= ():[string, number, string, boolean]=>{
  const tuple : [string, number, string, boolean]=["Ali", 30, "Toshkent", true]
  return tuple
}

const allTuple = userInfo()
console.log(allTuple);




// 2.1. Ikkita alias yarating: biri string yoki number qiymatlarni, ikkinchisi esa faqat boolean qiymatlarni qabul qilsin. 
// Keyin, bu aliaslarni qabul qiluvchi va ularning qiymatiga qarab turli xabarlarni qaytaruvchi funksiya yozing.

// ```typescript
// // Input
// console.log(checkValue("Hello")); // Output: Qiymat string yoki number: Hello
// console.log(checkValue(42)); // Output: Qiymat string yoki number: 42
// console.log(checkValue(true)); // Output: Qiymat boolean: true


const  stringOrNumber : string | number = "Salom"
const  bool : boolean = false

const checkValue = (stringOrNumber:string | number, bool :boolean)=>{
  if (stringOrNumber == 'string' || stringOrNumber == 'number') {
      console.log(`Qiymat string yoki number: ${stringOrNumber}`)
  }
  else {
    console.log(` Output: Qiymat boolean: ${bool}`);
  }
}
// checkValue(stringOrNumber, bool)  





// #### 3.1. Funksiya yarating, bu funksiya berilgan sonlar orasidan eng kattasini topib qaytarsin. Funksiya faqat musbat sonlarni qabul qilsin.

// ```typescript
// // Input
// console.log(findMaxPositive(1, -2, 3, 4, -5)); // Output: 4
// ```

const num1 :number = 1
const num2 :number = 2
const num3 :number = 4
const num4 :number = 6
const num5 :number = 1

const findMaxPositive = (num1 :number,num2 :number,num3 :number,num4 :number,num5 :number)=>{
  const maxValue = Math.max(num1, num2, num3, num4, num5)
  return maxValue
}

// console.log(findMaxPositive(num1, num2, num3, num4, num5));





// 3.2. Foydalanuvchi rolini belgilovchi literal tur yarating. Bu rol `admin`, `editor`, yoki `viewer` qiymatlarini qabul qilishi kerak. 
// Foydalanuvchi roliga qarab, tegishli xabarni qaytaradigan funksiya yozing.

// ```typescript
// // Input
// console.log(getRoleMessage("admin")); // Output: Siz admin roli bilan kirdingiz.
// console.log(getRoleMessage("viewer")); // Output: Siz viewer roli bilan kirdingiz.


type role = 'admin' | 'editor' | 'viewer'
const getRoleMessage = (role :string)=>{
  if(role === 'admin' || role === 'editor' || role === 'viewer'){
  return `Siz ${role} roli bilan kirdingiz...`
  }
  else{
    return "afsus jigar tizimga kirolmadingiz"
  }
}
// console.log(getRoleMessage('editoeer'))





// 4.1. TypeScript interfeysidan foydalanib, mashina haqida ma'lumotlarni saqlovchi ob'ekt yarating. Keyin, ushbu 
// interfeysni qabul qiluvchi va mashina ma'lumotlarini qaytaradigan funksiya yozing.

// ```typescript
// // Input
// const myCar: Car = {
//   marka: "Toyota",
//   model: "Corolla",
//   yil: 2020,
//   aktiv: true,
// };

// // Output
// console.log(getCarInfo(myCar)); // Output: Toyota Corolla, 2020 yil, Aktiv: true
// ```