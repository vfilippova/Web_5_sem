// Функция, которая будет выполнена при загрузке DOM-дерева
function handleDOMContentLoaded() {
    // Проверяем, есть ли значение 'add-name' в localStorage
    // Если есть, устанавливаем значение поля ввода 'add-name' равным сохраненному значению
    if (localStorage.getItem('add-name')) {
        document.getElementById('add-name').value = localStorage.getItem('add-name');
    }
    
// Получаем элементы формы, поля ввода 'add-name' и контейнер таблицы
    const form = document.getElementById('table-form');
    const addNameInput = document.getElementById('add-name');
    const tableContainer = document.getElementById('table-container');
    
    // Добавляем слушатель события 'submit' к форме
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Получаем значение поля ввода 'add-name'
        const addName = addNameInput.value;
        
        // Создаем новый элемент 'div' для карточки и добавляем ему класс 'card'
        const card = document.createElement('div');
        card.classList.add('card');
        
        // Создаем новый элемент 'span' для текста карточки и задаем ему значение из поля ввода
        const text = document.createElement('span');
        text.textContent = addName;
        
        // Добавляем элемент с текстом внутрь карточки
        card.appendChild(text);
        
        // Добавляем карточку в контейнер таблицы
        tableContainer.appendChild(card);
        
// Сохраняем значение поля ввода в localStorage с ключом 'add-name'
        localStorage.setItem('add-name', addName);
    });
}

// Добавляем слушатель события 'DOMContentLoaded' к объекту window и задаем ему функцию handleDOMContentLoaded
window.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
