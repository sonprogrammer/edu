const puppeteer = require('puppeteer');

(async () => {
  // Puppeteer를 사용하여 브라우저를 실행합니다.
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // 크롤링할 웹사이트의 URL을 지정합니다.
  const url = 'https://gwhey.com/';

  // 해당 URL로 이동합니다.
  await page.goto(url);

  // 웹 페이지에서 원하는 내용을 추출하거나 조작합니다.
  // 예를 들어, 페이지의 제목을 가져오는 경우:
  const pageTitle = await page.title();
  console.log('페이지 제목:', pageTitle);

  // 필요한 데이터를 추출하거나 원하는 작업을 수행합니다.
  // ...

  // 브라우저를 종료합니다.
  await browser.close();
})();fdfdfd
