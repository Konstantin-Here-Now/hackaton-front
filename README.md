# Проект на хакатон Sovcombank 2023

[//]: # (## Демо:)

[//]: # ([![Watch the video]&#40;./materials/prototype_preview.jpg&#41;]&#40;https://youtu.be/AK5WozSrqHY;&#41;)

## Оглавление
0. [Разработчик](#Команда)
1. [Описание](#Описание)
2. [Архитектура](#Архитектура)
4. [Описание Frontend](#Описание-Frontend)
5. [Развёртывание решения](#Развёртывание-решения)
6. [Описание структуры папок проекта](#Описание-структуры-папок-проекта)
7. [Запуск](#Запуск)

## Команда
1. [Дмитрий Борисов](https://t.me/DmitriiBorisov) - frontend
2. [Denis Deonis](https://t.me/DenisDeonis) - backend
3. [Константин](https://t.me/Tealdris) - analyst
4. [Andrew Erema](https://t.me/Eremaan) - analyst
5. [Настя](https://t.me/NisLastya) - analyst

[:arrow_up:Оглавление](#Оглавление)

## Описание
Визуальный интерфейс для аналога Headhanter.

[:arrow_up:Оглавление](#Оглавление)

## Архитектура
    forntend - react

[:arrow_up:Оглавление](#Оглавление)

## Описание Frontend

Был использован `framefork` `react` для создания приложения.
Для роутинга на стороне пользователя были использована библиотека "react-router-dom".

[:arrow_up:Оглавление](#Оглавление)

## Развёртывание решения

### Запуск через Docker-compose

https://webdevblog.ru/kak-ispolzovat-django-postgresql-i-docker/

    # склонировать
    git clone https://github.com/Konstantin-Here-Now/hackaton-front
    # пеерйти в папку с приложением
    cd hackaton-front
    # запустить докер 
    docker-compose up --build -d 

[:arrow_up:Оглавление](#Оглавление)

## Описание структуры папок проекта

Размеченные шаблоны страниц для нашего приложения находятся в папке `src/pages`.
В задании был использован `bootstrap` framework

- **frontend** - Файлы для фронтенда (react)
    - public - общедоступные файлы
    - src - исходники
        - components - отдельные компоненты
        - pages - макеты странцы и логика
        - utils - дополнительные функции
    **material** - превью для видео, заготовки для сервера и заполнения БД

[:arrow_up:Оглавление](#Оглавление)

## Запуск
Протестировать уже запущенный сайт можно по ссылке:</br>

    http://84.201.175.72:3000/ (доступен на момент предоставления решения)
    # или
    http://localhost:3000/ (доступен при создании локального проекта)

[:arrow_up:Оглавление](#Оглавление)

## Заметки
```
Оформление гитхаба
https://github.com/GnuriaN/format-README#Оглавление
Фронтент писал Борисов Дмитрий
```
