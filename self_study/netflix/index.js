const express = require("express");
const mongoose = require("mongoose");

const contentsRouter = require("./routes/contents");

const app = express();

// netflix 데이터베이스에 연결합니다.
mongoose.connect("mongodb://localhost:27017/netflix");

// body를 파싱하기 위한 코드입니다.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 루트 페이지입니다.
app.get("/", (req, res) => {
  res.send("root page");
});

// ./routes/contents.js에서 작성한 라우터를 "/contents" 경로에 등록합니다.
app.use("/contents", contentsRouter);

app.listen(8080);
