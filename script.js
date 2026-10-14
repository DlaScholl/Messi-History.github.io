// Цитаты Лионеля Месси
const quotes = [
    "Я начинаю заново каждый год. Я всегда голоден до новых титулов.",
    "Вы должны бороться, чтобы достичь своей мечты, но вы также должны быть достаточно удачливы, чтобы достичь её.",
    "Я не люблю говорить о себе, мне нравится говорить о футболе.",
    "Рекорды существуют, чтобы их бить.",
    "Я всегда хотел быть примером для своих детей и для всех детей в мире.",
    "Деньги не делают тебя счастливым. У меня сейчас 50 миллионов долларов, но я так же счастлив, как когда у меня было 8 миллионов.",
    "Я не лучший игрок в мире. Но я стараюсь быть лучшим каждый день.",
    "Футбол - это не просто игра, это моя жизнь.",
    "Когда ты выигрываешь, ты ничего не говоришь, потому что слова могут быть неправильно истолкованы. Когда ты проигрываешь, ты должен говорить.",
    "Моя цель - всегда становиться лучше. Неважно, сколько мне лет.",
    "Я никогда не перестаю мечтать. Мечты - это то, что держит нас в движении.",
    "Трофеи - это прекрасно, но самое важное - это наслаждаться игрой.",
    "Я играю не для того, чтобы быть лучшим, а для того, чтобы быть счастливым.",
    "Семья - это самое важное для меня. Без их поддержки я бы не смог добиться того, чего достиг.",
    "Чемпион мира... это было моей мечтой с детства. И мы сделали это!"
];

// Функция для показа случайной цитаты
function showQuote() {
    const quoteDisplay = document.getElementById('quote-display');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    quoteDisplay.textContent = '"' + randomQuote + '"';
    quoteDisplay.classList.add('show');
    
    // Анимация появления
    setTimeout(() => {
        quoteDisplay.style.transform = 'scale(1.02)';
        setTimeout(() => {
            quoteDisplay.style.transform = 'scale(1)';
        }, 200);
    }, 100);
}

// Добавляем плавную прокрутку для всех ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Добавляем эффект появления элементов при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Наблюдаем за всеми fact-box и fact-card
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.fact-box, .fact-card');
    elementsToAnimate.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });
});