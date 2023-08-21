const close = './img/close_icon.svg';
const media = './img/media_icon.svg';
const arrow = './img/arrow_back_icon.svg';

// function modalTemplate(){
//   return `
//                   <div class="modal__close">
//                     <img
//                     width="22px"
//                     height="22px"
//                     src="${close}"
//                     alt="close_icon_logo"
//                     />
//                   </div>
//                   <div class="modal__card">
//                     <div class="modal__header">
//                       <div class="modal__back">
//                         <img width="32px" height="24px" src="${arrow}" alt="arrow_back_icon" />
//                       </div>
//                       <h2>새 게시물 만들기</h2>
//                       <p>공유하기</p>
//                     </div>
//                     <div class="modal__main">
//                       <img src="${media}" alt="media_icon" />
//                       <h3>사진과 동영상을 업로드 해보세요.</h3>
//                       <label for="file">
//                         <p>컴퓨터에서 선택</p>
//                       </label>
//                       <input type="file" name="file" id="file" />
//                     </div>
//                   </div>
//                 `;
// }

// //이미지 올리는거
// function postTemplate(img) {
//     return `
//                         <div class="modal__post">
//                           <img width="478px" height="478px" src=${img} alt="image" />
//                           <div class="modal__write">
//                             <textarea placeholder="문구 입력..." autofocus></textarea>
//                           </div>
//                         </div>
//                       `;
// }

// function readFile(file, cb){
//   let reader = new FileReader()

//   reader.readAsDataURL(file)

//   reader.onload = function(){
//     cb(reader.result)

//   }

//   reader.onerror = function(error){
//     cb(error)
//   }
// }

// // 포스트 추가하는 버튼 클릭하면 모달창이 나오도록하기 const addPostBtn =
// // document.querySelector('#add-post')
// // document.querySelector('#add-post').addEventListener('click', createModal)
// // addPostBtn.addEventListener('click', function createModal() {     const
// // modalEl = document.createElement('div')     modalEl.setAttribute('class',
// // 'modal__layout') class를 설정하고 modal__layout라고 이름을 만들어준다     modalEl.innerHTML
// // = modal;     document         .body         .prepend(modalEl) 위쪽 부분이라고 적어논곳
// // 위에 나타남(body바로 밑에)     document         .querySelector('.modal__close > img')
// // .addEventListener('click', function () {             document .body
// // .removeChild(modalEl)         }) })
// document
//     .querySelector('#add-post')
//     .addEventListener('click', createModal);

// function createModal() { //+버튼을 누르면 나오는 창과 관련된 모든 기능
//     const modalEl = document.createElement('div');
//     modalEl.setAttribute('class', 'modal__layout');
//     modalEl.innerHTML = modal;

//     document
//         .querySelector('body')
//         .prepend(modalEl);

//     document
//         .querySelector('.modal__close')
//         .addEventListener('click', function () {
//             document
//                 .querySelector('body')
//                 .removeChild(modalEl);
//         });

//     //이미지 파일 업로드하기!
//     const fileEl = document.querySelector('#file')
//     fileEl.addEventListener('input', function () {
//         readFile(fileEl.files[0], function(resposn){
//           //여기부터 임
//           if (response instanceof Error) {
//         alert('Error:', response);
//         document.querySelector('body').removeChild(modalEl);
//       }

//       const imageBase64 = response;
//       document
//         .querySelector('.modal__card')
//         .setAttribute('class', 'modal__card write--post');
//       document
//         .querySelector('.modal__main')
//         .setAttribute('class', 'modal__main write--post');

//       const backBtn = document.querySelector('.modal__back > img');
//       const shareBtn = document.querySelector('.modal__header > p ');

//       backBtn.style.visibility = 'visible';
//       shareBtn.style.visibility = 'visible';

//       document.querySelector('.modal__main').innerHTML =
//         postTemplate(imageBase64);

//       backBtn.addEventListener('click', function () {
//         document.querySelector('body').removeChild(modalEl);
//         createModal();
//       });

//       shareBtn.addEventListener('click', function () {
//         const databaseName = 'instagram';
//         const version = 1;
//         const data = {
//           content: document.querySelector('.modal__write > textarea').value,
//           image: imageBase64,
//         };
//         if (window.indexedDB) {
//           const request = indexedDB.open(databaseName, version);

//           request.onsuccess = function () {
//             const store = request.result
//               .transaction('posts', 'readwrite')
//               .objectStore('posts');
//             store.add(data).onsuccess = function () {
//               store.getAll().onsuccess = function (e) {
//                 const response = e.target.result;
//                 const mainPostsEl = document.querySelector('.main__posts');
//                 mainPostsEl.setAttribute('class', 'main__posts');
//                 document.querySelector('body').removeChild(modalEl);
//                 mainPostsEl.innerHTML = '';
//                 for (let i = 0; i < response.length; i++) {
//                   const postListEl = document.createElement('img');
//                   postListEl.setAttribute('src', response[i].image);

//                   document
//                     .querySelector('.main__posts')
//                     .appendChild(postListEl);
//                 }
//               };
//             };
//           };
//         }
//       });
//       //위까지
//         })

//         reader.onload = function () { //base64로 인코딩된 이미지 파일이 load가 되었을 때 함수를 실행
//             const imageBase64 = reader
//                 .result

//                 document
//                 .querySelector('.modal__card')
//                 .setAttribute('class', 'modal__card write--post')
//             //위는 modal__card요소에 클래스를 modal__card write--post로 변경한다
//             document
//                 .querySelector('.modal__main')
//                 .setAttribute('class', 'modal__main write--post')
//             //위는 modal__main요소에 클래스를 modal__main write--post로 변경한다

//             const backBtn = document.querySelector('.modal__back img')
//             const shareBtn = document.querySelector('.modal__header p')

//             backBtn.style.visibility = 'visible'
//             shareBtn.style.visibility = 'visible'

//             document
//                 .querySelector('.modal__main')
//                 .innerHTML = createPost(imageBase64)

//             backBtn.addEventListener('click', function () {
//                 document
//                     .body
//                     .removeChild(modalEl) // modalEl창을 닫늗다(modalEl은 +이미지를 눌렀을 때 공유하기 나타나는 창화면을 말한다)
//                 createModal()
//             })
//             shareBtn.addEventListener('click', function () {
//                 if (window.indexedDB) { //window라는 객체안에 indexDB가 있을 경우에만 코드를 실행
//                     const databaseName = 'instagram'
//                     const version = 1
//                     const request = indexedDB.open(databaseName, version)

//                     console.log(request)
//                     const data = {
//                         content: document
//                             .querySelector('.modal__write textarea')
//                             .nodeValue,
//                         image: imageBase64
//                     }

//                     request.onsuccess = function () {
//                         const store = request
//                             .result
//                             .transaction('posts', 'readwrite')
//                             .objectStore('posts')
//                         store
//                             .add(data)
//                             .onsuccess = function () {
//                                 store
//                                     .getAll()
//                                     .onsuccess = function (e) {
//                                         const response = e.target.result;
//                                         document
//                                             .querySelector('body')
//                                             .removeChild(modalEl)
//                                         const mainPostEl = document.querySelector('.main__posts')
//                                         mainPostEl.setAttribute('class', 'main__posts')
//                                         mainPostEl.innerHTML = ""
//                                         for (let i = 0; i < response.length; i++) {
//                                             const postListEl = document.createElement('img')
//                                             postListEl.setAttribute('src', response[i].imgage) //i번째의 이미지

//                                             mainPostEl.appendChild(postListEl) //postListEl가 main__posts클래스의 아래쪽에 생김

//                                         }
//                                     }
//                             }

//                     }
//                 }
//             })
//         }
//         reader.error = function () {
//             alert('Error', error)
//             document
//                 .body
//                 .removeChild(modalEl)
//         }
//     })

// }

// //등록된 포스트 보여주기
// function main() { //등록된 포스트 보여주기
//     document
//         .querySelector('#add-post')
//         .addEventListener('click', createModal)

//     const databaseName = 'instagram'
//     const version = 1;

//     if (window.indexedDB) {
//         const request = indexedDB.open(databaseName, version)

//         request.onupgradeneeded = function () {
//             request
//                 .result
//                 .creatObjectStore('posts', {autoIncrement: true})
//         }

//         request.onsuccess = function () {
//             const store = request
//                 .result
//                 .transaction('posts', 'readwrite')
//                 .objectStore('posts')
//             store
//                 .getAll()
//                 .onsuccess = function (e) {
//                     const response = e.target.result //여기에는 배열로 객체가 담겨있다 ex)[{content, image}, {}, .....]
//                     document.querySelector('.main__posts')

//                     if (response.length !== 0) { //데이터가 있다면 Img태그 만들어서 클래스가 main__posts인 요소의 자식 요소에 넣는다
//                         document
//                             .querySelector(".main__posts")
//                             .innerHTML = "" //이미지를 넣을 때 기존의 데이터들이 들어가면 안되니까 innerHTML을 비워준다 --> 데이터가 비었습니다를 없앰
//                         for (let i = 0; i < response.length; i++) {
//                             const postListEl = document.createElement('img')
//                             postListEl.setAttribute('src', response[i].imgage) //i번째의 이미지

//                             document
//                                 .querySelector(".main__posts")
//                                 .appendChild(postListEl) //postListEl가 main__posts클래스의 아래쪽에 생김

//                         }
//                     } else {
//                         document
//                             .querySelector('.main__posts')
//                             .setAttribute('class', 'main__posts not-posts')
//                     }
//                 }
//         }
//     }
// }
// main()

function modalTemplate(){
  return `<div class="modal__close">
              <img
              width="22px"
              height="22px"
              src=${close}
              alt="close_icon_logo"
              />
          </div>
          <div class="modal__card">
              <div class="modal__header">
              <div class="modal__back">
                  <img width="32px" height="24px" src=${arrow} alt="arrow_back_icon" />
              </div>
              <h2>새 게시물 만들기</h2>
              <p>공유하기</p>
              </div>
              <div class="modal__main">
              <img src=${media} alt="media_icon" />
              <h3>사진과 동영상을 업로드 해보세요.</h3>
              <label for="file">
                  <p>컴퓨터에서 선택</p>
              </label>
              <input type="file" name="file" id="file" />
              </div>
          </div>`;
}

function postTemplate(img) {
return `
        <div class="modal__post">
          <img width="478px" height="478px" src=${img} alt="image" />
          <div class="modal__write">
            <textarea placeholder="문구 입력..." autofocus></textarea>
          </div>
        </div>
      `;
}
function readFile(file, cb){
let reader = new FileReader()

reader.readAsDataURL(file)

reader.onload = function(){
  cb(reader.result)

}

reader.onerror = function(error){
  cb(error)
}
}

function createModal() {
const modalEl = document.createElement('div');
modalEl.setAttribute('class', 'modal__layout');
modalEl.innerHTML = modalTemplate();
document.querySelector('body').prepend(modalEl);

const modalCloseEl = document.querySelector('.modal__close');

modalCloseEl.addEventListener('click', function () {
  document.querySelector('body').removeChild(modalEl);
});

const fileEl = document.querySelector('#file');
fileEl.addEventListener('input', function () {
  readFile(fileEl.files[0], function (response) {




    if (response instanceof Error) {
      alert('Error:', response);
      document.querySelector('body').removeChild(modalEl);
    }

    const imageBase64 = response;
    document
      .querySelector('.modal__card')
      .setAttribute('class', 'modal__card write--post');
    document
      .querySelector('.modal__main')
      .setAttribute('class', 'modal__main write--post');

    const backBtn = document.querySelector('.modal__back > img');
    const shareBtn = document.querySelector('.modal__header > p ');

    backBtn.style.visibility = 'visible';
    shareBtn.style.visibility = 'visible';

    document.querySelector('.modal__main').innerHTML =
      postTemplate(imageBase64);

    backBtn.addEventListener('click', function () {
      document.querySelector('body').removeChild(modalEl);
      createModal();
    });

    shareBtn.addEventListener('click', function () {
      const databaseName = 'instagram';
      const version = 1;
      const data = {
        content: document.querySelector('.modal__write > textarea').value,
        image: imageBase64,
      };
      if (window.indexedDB) {
        const request = indexedDB.open(databaseName, version);

        request.onsuccess = function () {
          const store = request.result
            .transaction('posts', 'readwrite')
            .objectStore('posts');


          store.add(data).onsuccess = function () {
            store.getAll().onsuccess = function (e) {
              const response = e.target.result;
              const mainPostsEl = document.querySelector('.main__posts');
              mainPostsEl.setAttribute('class', 'main__posts');
              document.querySelector('body').removeChild(modalEl);
              mainPostsEl.innerHTML = '';
              for (let i = 0; i < response.length; i++) {
                const postListEl = document.createElement('img');
                postListEl.setAttribute('src', response[i].image);

                document
                  .querySelector('.main__posts')
                  .appendChild(postListEl);
              }
            };
          };
          request.onerror = function (event) {
            console.error('Database error:', event.target.error);
          };
          
        };
      }
    });




  });
});
}

function main() {
document.querySelector('#add-post').addEventListener('click', createModal);

const databaseName = 'instagram';
const version = 1;

if (window.indexedDB) {
  const request = indexedDB.open(databaseName, version);


  // gpt도움 받은곳
  request.onupgradeneeded = function (event) {
    const db = event.target.result;
    if(!db.objectStoreName.contains('posts')){
      db.createObjectStore('posts', {autoIncrement:true})
    }
    // request.result.createObjectStore('posts', { autoIncrement: true });
  };

  request.onsuccess = function () {
    const store = request.result
      .transaction('posts', 'readwrite')
      .objectStore('posts');
    store.getAll().onsuccess = function (e) {
      const response = e.target.result;
      const mainPostsEl = document.querySelector('.main__posts');
      if (response.length !== 0) {
        mainPostsEl.innerHTML = '';
        for (let i = 0; i < response.length; i++) {
          const postListEl = document.createElement('img');
          postListEl.setAttribute('src', response[i].image);

          document.querySelector('.main__posts').appendChild(postListEl);
        }
      } else {
        mainPostsEl.setAttribute('class', 'main__posts not-posts');
      }
    };
  };
}
}

main();
