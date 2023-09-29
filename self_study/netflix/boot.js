const mongoose = require("mongoose");
const { Content } = require("./models");

mongoose.connect("mongodb://localhost:27017/netflix");

// 샘플 데이터를 데이터베이스에 등록합니다.
async function boot() {
  let contents = [
    {
      show_id: 1,
      type: "Movie",
      title: "Okja",
      director: "Bong Joon Ho",
    },
    {
      show_id: 2,
      type: "TV Show",
      title: "Reply 1994",
      director: "Shin Won-ho",
    },
    { 
      show_id: 3,
      type: "Movie",
      title: "Pandora",
      director: "Jung-woo Park",
    },
    {
      show_id: 4,
      type: "Movie",
      title: "Snowpiercer",
      director: "Bong Joon Ho",
    },
    { 
      show_id: 5,
      type: "TV Show",
      title: "Last"
    },
    {
      show_id: 6,
      type: "TV Show",
      title: "D.P."
    },
    {
      show_id: 7,
      type: "Movie",
      title: "Space Sweepers",
      director: "Jo Sung-hee",
    },
    {
      show_id: 8,
      type: "TV Show",
      title: "Voice"
    },
    {
      show_id: 9,
      type: "TV Show",
      title: "Reply 1997",
      director: "Shin Won-ho",
    },
  ];

  await Content.create(contents);
}

boot().then(() => process.exit());
