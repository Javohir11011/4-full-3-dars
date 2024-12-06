"use strict";
// #### 1.1. Ikkita massiv berilgan. Har ikkala massivda ham mavjud bo'lgan elementlarni toping va ularning tartiblangan
// ro'yxatini qaytaring.
// ```typescript
// // Input
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [4, 5, 6, 7, 8];
// // Output
// console.log(findCommonElements(array1, array2)); // [4, 5]
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const emptyArray = [];
const findCommonElements = (array1, array2) => {
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] in array2) {
            emptyArray.push(array1[i]);
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
const person3 = ["olim", 22, "Tashkent", false];
const userInfo = () => {
    const tuple = ["Ali", 30, "Toshkent", true];
    return tuple;
};
const allTuple = userInfo();
console.log(allTuple);
// 2.1. Ikkita alias yarating: biri string yoki number qiymatlarni, ikkinchisi esa faqat boolean qiymatlarni qabul qilsin. 
// Keyin, bu aliaslarni qabul qiluvchi va ularning qiymatiga qarab turli xabarlarni qaytaruvchi funksiya yozing.
// ```typescript
// // Input
// console.log(checkValue("Hello")); // Output: Qiymat string yoki number: Hello
// console.log(checkValue(42)); // Output: Qiymat string yoki number: 42
// console.log(checkValue(true)); // Output: Qiymat boolean: true
const stringOrNumber = "Salom";
const bool = false;
const checkValue = (stringOrNumber, bool) => {
    if (stringOrNumber == 'string' || stringOrNumber == 'number') {
        console.log(`Qiymat string yoki number: ${stringOrNumber}`);
    }
    else {
        console.log(` Output: Qiymat boolean: ${bool}`);
    }
};
// checkValue(stringOrNumber, bool)  
// #### 3.1. Funksiya yarating, bu funksiya berilgan sonlar orasidan eng kattasini topib qaytarsin. Funksiya faqat musbat sonlarni qabul qilsin.
// ```typescript
// // Input
// console.log(findMaxPositive(1, -2, 3, 4, -5)); // Output: 4
// ```
const num1 = 1;
const num2 = 2;
const num3 = 4;
const num4 = 6;
const num5 = 1;
const findMaxPositive = (num1, num2, num3, num4, num5) => {
    const maxValue = Math.max(num1, num2, num3, num4, num5);
    return maxValue;
};
const getRoleMessage = (role) => {
    if (role === 'admin' || role === 'editor' || role === 'viewer') {
        return `Siz ${role} roli bilan kirdingiz...`;
    }
    else {
        return "afsus jigar tizimga kirolmadingiz";
    }
};
console.log(getRoleMessage('editoeer'));
