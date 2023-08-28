const Counter = {
    count: 0,
  
    getCount: function () {
      return this.count;
    },
  
    resetCount: function () {
      this.count = 0;
    },
  
    incrementSync: function () {
      const currentTime = Date.now();
      while(true){
          const now = Date.now()
          if(now - currentTime > 3000) break;
      }
      //위는 3초동안 while루프를 돌고 그다음에 count가 증가한다. 여기서 point는 while루프를 도는 동안에는 다른 동작을하지 못한다 그래서 다른 동작은 멈추고 while루프를 다 돈 후에 다른 동작이 시행된다    
      this.count++
    },
  
    incrementAsync: function (callback) {
      // 비동기적으로 3초 뒤에 this.count를 증가하며 callback을 호출하도록 구현하세요.
      // setTimeout을 활용하세요.
      setTimeout(()=>{
          this.count++
          callback()
      },3000)
      //위는 setTimeout함수로 3초뒤에 count가 증가한다. 그와중에 다른 기능도 동시에 작동이 가능하다
    },
  };
  const run = () => {
    window.addEventListener("DOMContentLoaded", () => {
      App();
    });
  };
  
  run();
  

  