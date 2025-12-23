# Alatoo Logo Web Component

Кастомный веб-компонент для логотипа Alatoo с настраиваемым размером и показом текста.

## Использование

### Базовое использование

```html
<!-- Подключите компонент -->
<script src="logo-component.js"></script>

<!-- Используйте компонент -->
<alatoo-logo size="medium" show-text></alatoo-logo>
```

## Атрибуты

### `size`

Размер логотипа. Может принимать следующие значения:

- **Предустановленные размеры:**
  - `small` - 8rem
  - `medium` - 12rem (по умолчанию)
  - `large` - 16rem
  - `xlarge` - 20rem

- **Пользовательский размер:**
  - Любое значение в CSS единицах: `10rem`, `150px`, `15em`, `20vw`

```html
<!-- Предустановленный размер -->
<alatoo-logo size="large"></alatoo-logo>

<!-- Пользовательский размер -->
<alatoo-logo size="15rem"></alatoo-logo>
<alatoo-logo size="200px"></alatoo-logo>
```

### `show-text`

Булевый атрибут для показа/скрытия текста логотипа.

```html
<!-- С текстом -->
<alatoo-logo show-text></alatoo-logo>

<!-- Без текста (только иконка) -->
<alatoo-logo></alatoo-logo>
```

## JavaScript API

### Свойства

```javascript
const logo = document.querySelector('alatoo-logo');

// Изменить размер
logo.size = 'large';
logo.size = '15rem';

// Показать/скрыть текст
logo.showText = true;  // показать
logo.showText = false; // скрыть

// Получить текущие значения
console.log(logo.size);     // 'large'
console.log(logo.showText); // true
```

### Пример: Динамическое управление

```javascript
// Переключение текста по клику
const toggleButton = document.getElementById('toggleText');
const logo = document.querySelector('alatoo-logo');

toggleButton.addEventListener('click', () => {
  logo.showText = !logo.showText;
});

// Изменение размера через select
const sizeSelect = document.getElementById('sizeSelect');
sizeSelect.addEventListener('change', (e) => {
  logo.size = e.target.value;
});
```

## Настройка через CSS (CSS Custom Properties)

### Настройка цветов

Компонент поддерживает настройку цветов через CSS переменные:

```css
alatoo-logo {
  --logo-icon-color: #CB9483;      /* Цвет иконки */
  --logo-text-1-color: #1F3B3E;    /* Цвет основного текста */
  --logo-text-2-color: #CB9483;    /* Цвет дополнительного текста */
}

/* Пример: темная тема */
.theme-dark alatoo-logo {
  --logo-icon-color: #CB9483;
  --logo-text-1-color: #ffffff;
  --logo-text-2-color: #CB9483;
}
```

### Глобальная настройка размеров

Размеры предустановок можно изменить глобально через CSS переменные:

```css
:root {
  --logo-size-small: 4rem;   /* По умолчанию */
  --logo-size-medium: 8rem;  /* По умолчанию */
  --logo-size-large: 12rem;  /* По умолчанию */
  --logo-size-xlarge: 16rem; /* По умолчанию */
}

/* Пример: увеличить все размеры на 50% */
:root {
  --logo-size-small: 6rem;
  --logo-size-medium: 12rem;
  --logo-size-large: 18rem;
  --logo-size-xlarge: 24rem;
}
```

Это позволяет настроить размеры один раз в CSS, и все логотипы с соответствующими размерами будут использовать новые значения.

## Полный пример

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alatoo Logo Demo</title>
  <style>
    body {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      padding: 2rem;
      font-family: system-ui, sans-serif;
    }

    .controls {
      display: flex;
      gap: 1rem;
    }

    alatoo-logo {
      --logo-icon-color: #CB9483;
      --logo-text-1-color: #1F3B3E;
      --logo-text-2-color: #CB9483;
    }
  </style>
</head>
<body>
  <div class="controls">
    <button id="toggleText">Toggle Text</button>
    <select id="sizeSelect">
      <option value="small">Small</option>
      <option value="medium" selected>Medium</option>
      <option value="large">Large</option>
      <option value="xlarge">XLarge</option>
    </select>
  </div>

  <alatoo-logo id="logo" size="medium" show-text></alatoo-logo>

  <script src="logo-component.js"></script>
  <script>
    const logo = document.getElementById('logo');
    const toggleText = document.getElementById('toggleText');
    const sizeSelect = document.getElementById('sizeSelect');

    toggleText.addEventListener('click', () => {
      logo.showText = !logo.showText;
    });

    sizeSelect.addEventListener('change', (e) => {
      logo.size = e.target.value;
    });
  </script>
</body>
</html>
```

## Структура проекта

```
alatoo/
├── index.html           # Основной HTML файл с примером
├── logo-component.js    # Веб-компонент
├── app.js              # Логика управления
├── logo.css            # Стили для страницы
└── README.md           # Эта документация
```

## Особенности

- ✅ Нативный веб-компонент (без зависимостей)
- ✅ Shadow DOM для инкапсуляции стилей
- ✅ Настраиваемый размер (предустановленные и кастомные)
- ✅ Возможность показа/скрытия текста
- ✅ Поддержка CSS переменных для настройки цветов
- ✅ Плавные анимации переходов
- ✅ Доступность (ARIA labels)
- ✅ Чистый JavaScript API

## Браузерная поддержка

Компонент использует современные веб-стандарты и поддерживается в:

- Chrome/Edge 67+
- Firefox 63+
- Safari 10.1+
- Opera 54+

## Лицензия

MIT

