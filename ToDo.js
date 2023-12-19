//id изменить на массив
//обнуляется поисковая строка
//ошибка для пробелов и пустых


//функция, которая будет выполнена при загрузке DOM-дерева
function handleDOMContentLoaded() {
    //проверяем, есть ли значение 'add-name' в localStorage
    //если есть, устанавливаем значение поля ввода 'add-name' равным сохраненному значению
    if (localStorage.getItem('add-name')) {
        document.getElementById('add-name').value = localStorage.getItem('add-name');
    }
    //получаем элементы формы, поля ввода 'add-name' и контейнер таблицы
    const form = document.getElementById('table-form');
    const addNameInput = document.getElementById('add-name');
    const tableContainer = document.getElementById('table-container');

    //функция для удаления карточки из контейнера таблицы
    function removeCard(card) {
        //удаляем данные о карточке из localStorage
        localStorage.removeItem(card.id);
        //удаляем карточку из контейнера таблицы
        tableContainer.removeChild(card);
    }

    //добавляем слушатель события 'submit' к форме
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        //получаем значение поля ввода 'add-name'
        const addName = addNameInput.value;
        //создаем новый элемент 'div' для карточки и добавляем ему класс 'card'
        const card = document.createElement('div');
        card.classList.add('card');
        //генерируем уникальный идентификатор для карточки
        const cardId = 'card-' + Date.now();
        card.id = cardId;
        //создаем новый элемент 'span' для текста карточки и задаем ему значение из поля ввода
        const text = document.createElement('span');
        text.textContent = addName;
        //добавляем элемент с текстом внутрь карточки
        card.appendChild(text);
        //сохраняем карточку в localStorage с ключом, равным идентификатору
        localStorage.setItem(cardId, addName);
        //добавляем слушатель события 'click' к карточке
        card.addEventListener('click', function () {
            removeCard(card);
        });
        //добавляем карточку в контейнер таблицы
        tableContainer.appendChild(card);
        //сохраняем значение поля ввода в localStorage с ключом 'add-name'
        localStorage.setItem('add-name', addName);
        addNameInput.value = '';
    });

    //восстанавливаем сохраненные карточки при загрузке страницы
    //цикл for перебирает элементы в локальном хранилище, используя свойство localStorage.length
    for (let i = 0; i < localStorage.length; i++) {
        //метод localStorage.key(i) используется для получения ключа каждого элемента
        const key = localStorage.key(i);
        //функция startsWith('card-') проверяет, начинается ли ключ со строки 'card-'.
        if (key.startsWith('card-')) {
            const cardId = key;
            //метод localStorage.getItem(key) извлекает значение, связанное с ключом.
            const addName = localStorage.getItem(key);
            const card = document.createElement('div');
            card.classList.add('card');
            card.id = cardId;
            const text = document.createElement('span');
            text.textContent = addName;
            card.appendChild(text);
            //слушатель события 'click' добавляется к элементу карточки, чтобы при клике была вызвана функция removeCard(card).
            card.addEventListener('click', function () {
                removeCard(card);
            });
            tableContainer.appendChild(card);
        }
    }
}

//добавляем слушатель события 'DOMContentLoaded' к объекту window и задаем ему функцию handleDOMContentLoaded
window.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
