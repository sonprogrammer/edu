// mongoose 모듈을 불러오세요.
const { Schema } = require("mongoose");

// 지시사항을 참고하여 ContentSchema 스키마를 정의하고 exports하세요.
const ContentSchema = new Schema({
  show_id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
  },
});

module.exports = ContentSchema;
