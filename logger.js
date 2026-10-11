// Логирует каждый запрос: метод, адрес, код ответа и время выполнения
export function logger(req, res, next) {
  const start = Date.now();

  // 'finish' наступает, когда ответ уже отправлен клиенту
  res.on("finish", () => {
    const ms = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} -> ${res.statusCode} (${ms} мс)`);
  });

  next(); // передаём запрос следующему звену
}
