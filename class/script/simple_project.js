const addForm = document.querySelector('.add')
const list = document.querySelector('.memos')
const alertmsg = document.getElementById('alertmsg')
const search = document.querySelector('.search input')



const saveMemo = memoText =>{

    const html = `<li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <span>${memoText}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`

    list.innerHTML += html;
}

addForm.addEventListener('submit', e=>{ //e는 이벤트가 발생했을때 함수가 발생
    e.preventDefault() //이전에 있는 내용을 손실시키지않고 유지시키는 거임 글을적고 엔터를 하면 사라지는데 사라지지 않게 함
    // console.log('글을 남겼습니다')
    const memo = addForm.add.value;
    if(memo.length){
        saveMemo(memo)
        alertmsg.classList.add('hidden')
    }else{
        // console.log('글 내용을 작성하세요')
        alertmsg.classList.remove('hidden') //클래스를 제거
    }
    

    
})

list.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
})

const filterMemo = memo =>{
    // console.log(Array.from(list.children))

    Array.from(list.children).filter((memotext) =>
        !memotext.textContent.includes(memo))
        .forEach((memotext) => memotext.classList.add('filtered'));
        
    Array.from(list.children).filter((memotext) =>
        memotext.textContent.includes(memo))
        .forEach((memotext) => memotext.classList.remove('filtered'));
}


search.addEventListener('keyup', e =>{
    const searchText = search.value;
    // console.log(searchText)
    filterMemo(searchText)
})