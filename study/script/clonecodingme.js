const close = './img/close_icon.svg';
const media = './img/media_icon.svg';
const arrow = './img/arrow_back_icon.svg';

const modal = `
                <div class="modal__close">
                  <img
                  width="22px"
                  height="22px"
                  src="${close}"
                  alt="close_icon_logo"
                  />
                </div>
                <div class="modal__card">
                  <div class="modal__header">
                    <div class="modal__back">
                      <img width="32px" height="24px" src="${arrow}" alt="arrow_back_icon" />
                    </div>
                    <h2>새 게시물 만들기</h2>
                    <p>공유하기</p>
                  </div>
                  <div class="modal__main">
                    <img src="${media}" alt="media_icon" />
                    <h3>사진과 동영상을 업로드 해보세요.</h3>
                    <label for="file">
                      <p>컴퓨터에서 선택</p>
                    </label>
                    <input type="file" name="file" id="file" />
                  </div>
                </div>
              `;

// 포스트 추가하는 버튼 클릭하면 모달창이 나오도록하기 

const addPostBtn = document.querySelector('#add-post')
addPostBtn.addEventListener('click', function(){
    const modalEl = document.createElement('div')
    modalEl.setAttribute('class','modal__layout') //class를 설정하고 modal__layout라고 이름을 만들어준다
    modalEl.innerHTML= modal;
    document.body.prepend(modalEl) //위쪽 부분이라고 적어논곳 위에 나타남(body바로 밑에)

    document.querySelector('.modal__close > img').addEventListener('click', function(){
        document.body.removeChild(modalEl)
    })
})

//이미지 파일 업로드하기!
// const fileEl = document.querySelector(#file)
// fileEl.addEventListener('input', )