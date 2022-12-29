'use strict';

// Напишіть html код який містить кнопку якраз посередині (вертикально і горизонтально) сторінки.
// В початковому стані - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.

// Після натиснення - на кнопці має бути текст 'Turn on', фон сторінки має стати темний.
// Під кнопкою має з'явитись текстове повідомлення 'Last turn off: `{DD-MM-YYYY HH:MM:SS}`', де `{DD-MM-YYYY HH:MM:SS}` - це формат часу для виведення

// Після повторного натиснення - на кнопці має бути текст 'Turn off', фон сторінки має стати світлий.
// Під кнопкою має з'явитись текстове повідомлення 'Last turn on: `{DD-MM-YYYY HH:MM:SS}`', де `{DD-MM-YYYY HH:MM:SS}` - це формат часу для виведення

// Стан кнопки та повідомлення останню зміну стану має зберігатись після перезавантаження/закриття сторінки.

// Логіку роботи реалізуйте в окремому js-файлі.

let turnBtn = document.querySelector('.button');
let background = document.querySelector('.background');

let lastUpd = document.querySelector('.last-upd');
background.style.backgroundColor = localStorage.getItem('bodyBackgroundState');
turnBtn.textContent = localStorage.getItem('buttonStateText') || 'Turn Off';
lastUpd.textContent = localStorage.getItem('lastUpdText');



let ChangeTurn = () => {
    
    let date = new Date();
    let formatedDate = ("0" + date.getDate()).slice(-2) + "-" + ("0"+(date.getMonth()+1)).slice(-2) + "-" +
    date.getFullYear() + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2);

    if (turnBtn.textContent.includes('Turn On')) {
        background.style.backgroundColor = 'white';
        turnBtn.textContent = 'Turn Off';
        lastUpd.textContent = 'Last turn on:  ' + formatedDate;

    }
    else {
        background.style.backgroundColor = 'black';
        turnBtn.textContent = 'Turn On';
        lastUpd.textContent = 'Last turn off:  ' + formatedDate;
    };
    
    localStorage.setItem('bodyBackgroundState', background.style.backgroundColor);
    localStorage.setItem('buttonStateText', turnBtn.textContent);
    localStorage.setItem('lastUpdText', lastUpd.textContent);
};

turnBtn.addEventListener('click', ChangeTurn);