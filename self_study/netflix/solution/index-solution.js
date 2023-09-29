// 정의한 ContentSchema 스키마를 바탕으로 Content 모델을 정의하고 exports하세요.
const mongoose = require("mongoose");
const ContentSchema = require("./schemas/content");

exports.Content = mongoose.model("Content", ContentSchema);
