import { Router } from "express";
import { products } from "../data/products.js";

const router = Router();

// Пути указаны относительно точки подключения роутера:
// "/"    -> /api/products
// "/:id" -> /api/products/:id

// GET /api/products?search=мед — список товаров с необязательным поиском
router.get("/", (req, res) => {
  const search = String(req.query.search || "").toLowerCase();
  const found = products.filter((item) => item.name.toLowerCase().includes(search));
  res.json(found);
});

// GET /api/products/:id — один товар
router.get("/:id", (req, res) => {
  const product = products.find((item) => String(item.id) === req.params.id);

  if (!product) {
    return res.status(404).json({ error: "Товар не найден" });
  }

  res.json(product);
});

export default router;
