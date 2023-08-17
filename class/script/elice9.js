
const link = document.querySelector('a')
const idlink = document.getElementById('naver')
console.log(link.getAttribute('href'))
console.log(idlink.getAttribute('href'))

link.setAttribute('href', 'https://www.google.com')
link.innerHTML = "역시 검색은 구글"


// const coupang = document.querySelector('p');
// coupang.setAttribute('style', 'color : green')

const tagP = document.querySelector('p')
tagP.classList.remove('error');
//classList를 가져와서 error라는 클래스를 제거해라라는뜻

tagP.classList.add('success')
//error라는 클래스를 집어넣는것
