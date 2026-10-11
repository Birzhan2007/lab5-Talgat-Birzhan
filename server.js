import express from "express";
import cors from "cors";
import productsRouter from "./routes/products.js";
import ordersRouter from "./routes/orders.js";
import { logger } from "./middleware/logger.js";

const app = express();
const PORT = 3000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json()); // разбирает JSON в теле запроса (нужно для POST)
app.use(logger);

app.use("/api/products", productsRouter);
app.use("/api/orders", ordersRouter);

// Маршрут: метод GET + путь "/"
app.get("/", (req, res) => {
  res.send("АгроМаркет API работает");
});

// «Жив ли сервер?» — такой маршрут есть почти в каждом API
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

app.get("/api/about", (req, res) => {
  res.json({ name: "АгроМаркет", version: "1.0", author: "Біржан Талғат" });
});

// Любой неизвестный маршрут — 404 в формате JSON
app.use((req, res) => {
  res.status(404).json({ error: `Маршрут ${req.method} ${req.originalUrl} не найден` });
});

app.listen(PORT, () => {
  console.log(`API запущен: http://localhost:${PORT}`);
});
