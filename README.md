<p align="center">
  <a href="#english">English</a> · <a href="#русский">Русский</a>
</p>

---

## English

# Corporate Website for Gekkodio

Corporate website for Gekkodio, a digital studio focused on websites, web apps, automation, AI integrations, and startup MVP launches.

Live demo: https://gekkodio-showcase.vercel.app

## Goal

Turn an unfinished AI-generated website draft into a polished production-ready showcase:

- improve visual consistency;
- fix responsive layouts for desktop, tablet, and mobile;
- redesign repeated sections that looked too generic;
- build portfolio and case-study pages;
- connect and later stub the contact form flow;
- deploy the final static site to Vercel.

## What Was Done

- Reworked the header dropdown menus and mobile navigation.
- Polished the homepage sections, project cards, testimonials, FAQ, and CTA blocks.
- Built responsive portfolio cards and detailed case pages.
- Added fullscreen image preview for case-study screenshots.
- Redesigned service pages with clearer editorial sections.
- Updated pricing cards, picker states, and FAQ placement.
- Improved tablet and mobile layouts across the site.
- Added a backend endpoint for form submission, currently running as a safe stub.
- Deployed the project to Vercel.

## Stack

- HTML
- CSS
- JavaScript
- Node.js
- Vercel

## Pages

- Home
- Services
- Portfolio
- Case studies
- About
- Startups
- Pricing

## Screenshots

Project images are stored in `assets/img/`.

![Gekkodio case preview](assets/img/school%20lab%20photo.png)

## Run Locally

```bash
npm install
npm start
```

Then open:

```text
http://localhost:3000
```

## Deploy

This project is ready for Vercel deployment.

```bash
vercel deploy --prod
```

## Notes

- `.env` files are intentionally excluded.
- Form submission is currently stubbed in `api/telegram.js`.
- No client secrets or production credentials are included in this repository.

---

## Русский

# Corporate Website for Gekkodio

Корпоративный сайт для Gekkodio — цифровой студии, которая занимается сайтами, веб-приложениями, автоматизацией, AI-интеграциями и MVP для стартапов.

Live demo: https://gekkodio-showcase.vercel.app

## Задача

Превратить незавершенный AI-generated макет сайта в аккуратный production-ready showcase:

- привести визуальный стиль к единой системе;
- исправить адаптив для desktop, tablet и mobile;
- переработать повторяющиеся блоки, которые выглядели слишком шаблонно;
- собрать портфолио и детальные страницы кейсов;
- подготовить форму заявки;
- задеплоить сайт на Vercel.

## Что сделано

- Переделана логика выпадающего меню в хедере и mobile-навигация.
- Доработаны блоки главной страницы, карточки проектов, отзывы, FAQ и CTA.
- Собраны адаптивные карточки портфолио и страницы кейсов.
- Добавлен fullscreen-просмотр изображений в кейсах.
- Переработаны страницы услуг в более редакционном стиле.
- Обновлены карточки цен, состояния пикера и расположение FAQ.
- Исправлены tablet и mobile состояния на ключевых страницах.
- Добавлен backend endpoint для формы заявки, сейчас он работает как безопасная заглушка.
- Проект задеплоен на Vercel.

## Стек

- HTML
- CSS
- JavaScript
- Node.js
- Vercel

## Страницы

- Главная
- Услуги
- Портфолио
- Кейсы
- О нас
- Для стартапов
- Расценки

## Скриншоты

Изображения проекта лежат в `assets/img/`.

![Gekkodio case preview](assets/img/school%20lab%20photo.png)

## Локальный запуск

```bash
npm install
npm start
```

После запуска открыть:

```text
http://localhost:3000
```

## Деплой

Проект готов к деплою на Vercel.

```bash
vercel deploy --prod
```

## Заметки

- `.env` файлы намеренно исключены.
- Отправка формы сейчас заглушена в `api/telegram.js`.
- Секреты, токены и клиентские доступы не добавлены в репозиторий.
