const randomWords = [
    '안녕하세요', '반갑습니다', '오히려 좋아', 'express', '재밌다',
    'Node.js', '즐겁다', '좋아요', '날씨가', 'MongoDB', '너무 쉽다.',
    'elice.io', 'javascript', '배고파요', '심심해요', '치킨을 좋아해요', 
  ];
  
  const pickRandomWord = () => {
    randomWords
  }
  
  exports.pickRandomWord = () => {
    const index = Math.floor(Math.random() * randomWords.length);
    return randomWords[index];
  }