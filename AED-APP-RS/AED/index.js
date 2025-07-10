const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// 提供 public 資料夾中的靜態資源（HTML、CSS、JS）
app.use(express.static(path.join(__dirname, 'public')));

// 處理 POST 請求的 JSON body
app.use(express.json());

// 範例 API：接收前端提交的 JSON 資料
app.post('/submit', (req, res) => {
  const data = req.body;
  console.log('收到前端資料：', data);
  res.json({ status: 'OK', received: data });
});

app.listen(PORT, () => {
  console.log(`伺服器啟動：http://localhost:${PORT}`);
});