// 라우터 모듈과 정의한 Content 모델을 불러오세요.
const { Router } = require("express");
const { Content } = require("../models");

const router = Router();

// "/" 경로에서 작품 목록 조회을 조회하는 라우터를 작성하세요.
router.get("/", async (req, res) => {
  const contents = await Content.find({});

  res.json(contents);
});

// 작성한 라우터를 exports하세요.
module.exports = router;

