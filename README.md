# Keepsake: лендінг на Vite, Pug і SCSS

## 🔧 Вимоги до середовища

Node.js v26.13.0
npm v11.20.0

### 3. Команди

```bash
npm install        # встановити залежності
npm run dev        # сервер розробки з live reload (http://localhost:5173/landing-keepsake-vite/)
npm run build      # збірка в папку dist
npm run preview    # локальний перегляд зібраного сайту
npm run images     # згенерувати AVIF, WebP і JPEG з src/assets/images-src
npm run format     # відформатувати код Prettier
npm run lint       # Stylelint (SCSS) + Prettier --check
```

## 🧩 Структура проєкту

```
src/
 ├─ assets/              # зображення, шрифти, інші ресурси
 ├─ components/          # Pug-компоненти (header, footer, content, ...)
 ├─ data/                # файли з даними
 ├─ includes/            # head, meta, fonts (частини шаблону)
 ├─ layouts/             # основні макети сторінок
 ├─ pages/               # сторінки сайту
 ├─ styles/              # SCSS-структура
 │   ├─ base/            # базові стилі: reset, типографія
 │   ├─ components/      # стилі компонентів
 │   ├─ layout/          # сітка, секції
 │   ├─ utils/           # змінні, міксіни
 │   └─ main.scss        # головний файл стилів
 └─ vite.config.js       # налаштування Vite + Vituum
```

## Використані інструменти

| Інструмент                                 | Навіщо                                                        |
| ------------------------------------------ | ------------------------------------------------------------- |
| Vite                                       | Dev-сервер і збірка                                           |
| vituum + @vituum/vite-plugin-pug           | Компіляція Pug у HTML у середовищі Vite                       |
| Sass                                       | Компіляція SCSS                                               |
| PostCSS + Autoprefixer                     | Вендорні префікси відповідно до Browserslist                  |
| sharp                                      | Генерація AVIF, WebP і JPEG у двох ширинах (`npm run images`) |
| Prettier + @prettier/plugin-pug            | Єдиний стиль коду, включно з `.pug`                           |
| Stylelint + stylelint-config-standard-scss | Перевірка SCSS, правила БЕМ                                   |
| husky + lint-staged                        | Перевірка змінених файлів перед кожним комітом                |
| GitHub Actions + GitHub Pages              | Автоматична збірка і публікація                               |

## Цільові браузери(.browserlist)

last 2 Chrome versions
last 2 Firefox versions
last 2 Edge versions
last 2 Safari versions
last 2 iOS versions

# Результат оптимізації

## css

### Зображення

| Зображення | Оригінал (JPG) | 400w AVIF | 400w WebP | 800w AVIF | 800w WebP | 800w JPEG |
| ---------- | -------------- | --------- | --------- | --------- | --------- | --------- |
| vol-16     | 12,2 KB        | 2,63 KB   | 2,85 KB   | 5,16 KB   | 5,83 KB   | 13,5 KB   |

### Css

| Файл   | Розмір   |
| ------ | -------- |
| lab-07 | 16,5 KB  |
| lab-09 | 13.83 kB |
