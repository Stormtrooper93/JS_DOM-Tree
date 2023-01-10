// 1. **Задача на селектори:**
// Для сторінки з вебінару ([https://github.com/Niko42na/PRJCTR/blob/webinar10/index.html](https://github.com/Niko42na/PRJCTR/blob/webinar10/index.html)) напишіть селектори для наступних елементів:
//     - для елементу з текстом 'Навігація по DOM дереву'
//     - для першого елементу <section>
//     - для елементу списку з текстом 'Пункт 5'
//     - для елементу з класом 'hatredLevelBlock'
    
//     Кожен селектор має бути унікальним (тобто всі мають бути створені за допомогою різних методів) і має бути присвоєний якійсь змінній.

let domNavigation = document.getElementById('headerTwo').textContent;
console.log(domNavigation);

let section = document.getElementsByTagName('section').item(0);
console.log(section);

let fiveItem = document.querySelector('.item5').textContent;
console.log(fiveItem);

let hatredLevelBlock = document.getElementsByClassName('hatredLevelBlock').item(0);
console.log(hatredLevelBlock);