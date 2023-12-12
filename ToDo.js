// Функция для обработки события DOMContentLoaded
function handleDOMContentLoaded() {
    // Проверяем, есть ли значение 'add-name' в localStorage
    // Если есть, устанавливаем значение поля ввода 'add-name' равным сохраненному значению
    if (localStorage.getItem('add-name')) {
        document.getElementById('add-name').value = localStorage.getItem('add-name');
    }

    // Получаем элементы формы, поля ввода 'add-name' и контейнер таблицы
    const form = document.getElementById('table-form');
    const AddNameInput = document.getElementById('add-name');
    const TableContainer = document.getElementById('table-container');

    // Добавляем слушатель события 'submit' к форме
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const AddName = AddNameInput.value;

        // Создаем новый элемент 'div' для карточки и добавляем ему класс 'card'
        const card = document.createElement('div');
        card.classList.add('card');

        // Создаем новый элемент 'span' и устанавливаем его текстовое содержимое равным значению addName
        const text = document.createElement('span');
        text.textContent = AddName;

        // Добавляем элемент text внутрь элемента card
        card.appendChild(text);

        // Добавляем элемент card внутрь контейнера таблицы
        TableContainer.appendChild(card);

        // Сохраняем значение addName в localStorage
        localStorage.setItem('add-name', AddName);

        // Очищаем поле ввода 'add-name'
        AddNameInput.value = '';
    });
}

// Ожидаем события DOMContentLoaded и вызываем функцию handleDOMContentLoaded
document.addEventListener('handleDOMContentLoaded', handleDOMContentLoaded);