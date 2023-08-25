const AlphabetCounter = {
    sentence: "",
    alphabetMap: {},
  
    setSentence: function (sentence) {
      this.sentence = sentence;
      return this;
    },
  
    buildAlphabetMap: function () {
      // this.sentence 로부터 알파벳 맵을 만들어
      // this.alphabetMap에 저장하세요.
      this.alphabetMap = 
      this.sentence.trim()
          .toLowerCase()
          .split("")
          .filter(c => c >= "a" && c <= "z")
          .reduce((map,char) => {
          if(!map[char]) map[char] = 0
          map[char]++
          return map
      }, {})
      return this;
    },
  
    buildResult: function () {
      // Object.entries()를 활용하여 [a: 1] [b: 2] 형태의 문자열을 만들어보세요.
  
      const resultString = 
          Object.entries(this.alphabetMap)
              .reduce((acc, [alphabet, freq]) => `${acc} [${alphabet}: ${freq}]`, '').trim()
      return `결과는 : ${resultString} 입니다.`;
    },
  };

  AlphabetCounter()