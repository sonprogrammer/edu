function now(){
const currentDate = new Date()

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth() + 1
  const day = currentDate.getDate()
  const hour = currentDate.getHours()
  const minute = currentDate.getMinutes()
  const second = currentDate.getSeconds()

return ` ${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분 ${second}초 입니다.`
}
console.log(now())