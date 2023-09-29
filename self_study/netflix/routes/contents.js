const { Router } = require("express");
const { Content } = require("../models");

const router = Router();

// "/" 경로에서 작품 목록 조회을 조회하는 라우터를 작성하세요.
router.get("/", async (req, res) => {
  const contents = await Content.find({});

  res.json(contents);
  //*몽구스 모델에 등록한 Content를 가져와서 데이터를 모두 가져와서 클라이언트에서 JSON으로 전달합니다.



});


//*특정 작품을 조회하는 api구현하기
router.get('/:show_id', async (req, res) =>{
    const search_id = req.params.show_id;
    //*search_id변수에 URL에서 추출한 사용자 ID값을 할당한다
    //*예를 들어 users/123에 대한 요청을 받으면 req.params.id는 123과 같은 사용자 id를 포함한다 
    //*이를 통해 요청의 경로에 따라 동적으로 데이터를 가져올 수 있다  
    const content = await Content.find({ show_id: search_id})
    res.json(content)
})
//*! url이먼저 요청되고 서버에서 url에 있는 정보와 일치하는 것을 찾아와서 사용자에게 보여줌
//*!정확한 순서
//*!1. 클라이언트가 서버로 h




// 작성한 라우터를 exports하세요.
module.exports = router;