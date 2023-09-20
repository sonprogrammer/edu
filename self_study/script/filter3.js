//확진자가 100명 이상인곳만 배열로 출력
function getSeriousCity(data){
    return data.filter(city => city.coronaCount >= 100) 
    //*!여기서 city는 data배열 내의 각 요소를 나타낸다 즉, CoronaData배열에서 한 도시의 데이터를 나타낸 객체이다  
    
}

const coronaData = [
  { name: 'seoul', coronaCount: 240 },
  { name: 'gyeonggi', coronaCount: 200 },
  { name: 'busan', coronaCount: 98 },
  { name: 'chungnam', coronaCount: 115 },
  { name: 'gyeongnam', coronaCount: 78 },
  { name: 'ulsan', coronaCount: 27 },
  { name: 'gangwon', coronaCount: 28 },
  { name: 'jeju', coronaCount: 4 },
  { name: 'daejeon', coronaCount: 22 },
  { name: 'incheon', coronaCount: 28 },
  { name: 'gwangju', coronaCount: 13 }
]

console.log(getSeriousCity(coronaData))