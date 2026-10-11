# АгроМаркет API — Лабораторная 5

Выполнил: Біржан Талғат

REST API на Node.js и Express для магазина АгроМаркет.

## Запуск

```
npm install
npm start          # http://localhost:3000
npm run dev        # то же, с автоперезапуском
```

## Маршруты

| Метод | Путь                     | Описание                                   |
|-------|--------------------------|--------------------------------------------|
| GET   | /                        | Проверка, что сервер работает              |
| GET   | /api/health              | Состояние сервера                          |
| GET   | /api/about               | Информация о проекте                       |
| GET   | /api/products            | Список товаров, `?search=` — поиск по имени |
| GET   | /api/products/:id        | Один товар (404, если не найден)           |
| GET   | /api/orders              | Список заявок                              |
| POST  | /api/orders              | Новая заявка (name, email, quantity ≥ 10)  |

Пример заявки:

```
curl -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{"name":"ИП Фермер","email":"farmer@mail.kz","quantity":50}'
```

## Структура

- `server.js` — точка входа, подключение роутеров и middleware
- `routes/` — маршруты товаров и заявок
- `middleware/logger.js` — логирование запросов
- `data/` — данные о товарах (`db.json`)
