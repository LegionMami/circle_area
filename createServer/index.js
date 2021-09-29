const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/iletisim") {
    res.writeHead(200, { "Content-Type": "iletisim/html" });
    res.write("<h2>Iletisim sayfasina hosgeldiniz</h2>");
  }
  if (url === "/hakkimizda") {
    res.writeHead(200, { "Content-Type": "hakkimizda/html" });
    res.write("<h2>Hakkimizda sayfasina hosgeldiniz</h2>");
  }
  res.end();
});

const port = 5000;
server.listen(port, () => {
  console.log(`Server is running on ${port} port`);
});
