import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import '@testing-library/jest-dom';

const wait = ms => new Promise(r => setTimeout(r, ms));

describe('Test', () => {
  const cssStyle = {
    '.main__section': {
      width: '935px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    '.main__profile': {
      display: 'flex',
    },
    '.main__profile > .main__avata': {
      width: '292px',
      display: 'flex',
      justifyContent: 'center',
      cursor: 'pointer',
    },
    '.main__profile > .main__avata > img': {
      borderRadius: '100px',
    },
    '.main__header > .top': {
      height: '40px',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    '.main__header > .top > h2': {
      display: 'flex',
      alignItems: 'center',
      fontSize: '28px',
      lineHeight: '30px',
      cursor: 'pointer',
    },
    '.main__header > .top > button': {
      width: '84px',
      height: '30px',
      backgroundColor: 'rgb(255, 255, 255)',
      borderRadius: '4px',
      fontWeight: '700',
      color: 'rgb(38, 38, 38)',
      cursor: 'pointer',
    },
    '.main__header > .top > img': {
      cursor: 'pointer',
    },
    '.main__header > .middle > ul': {
      display: 'flex',
    },
    '.main__header > .middle > ul > li > b': {
      fontWeight: '700',
    },
    '.main__header > h3': {
      fontWeight: '700',
    },
    '.main__nav': {
      height: '53px',
      display: 'flex',
      justifyContent: 'center',
    },
    '.main__nav > ul': {
      display: 'flex',
      alignItems: 'center',
      fontSize: '12px',
    },
    '.main__nav > ul > li': {
      height: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '.main__nav > ul > li > a': {
      color: 'rgb(142, 142, 142)',
    },
    '.main__posts': {
      width: '100%',
      height: '293px',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'nowrap',
      fontSize: '28px',
    },
    '.main__posts > .main__layout': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '.main__posts > .main__layout > .main__circle': {
      width: '62px',
      height: '62px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '100px',
    },
  };

  beforeAll(async () => {
    const htmlPath = path.resolve('index.html');
    const html = fs.readFileSync(htmlPath);
    const { window } = new JSDOM(html, {
      url: `file://${htmlPath}`,
      resources: 'usable',
    });

    // Loading...
    await wait(200);

    for (const [key, value] of Object.entries(cssStyle)) {
      const el = window.document.querySelector(key);
      const computedStyle = window.getComputedStyle(el);
      for (const [property, style] of Object.entries(value)) {
        if (style !== computedStyle[property]) {
          cssStyle[key] = false;
          break;
        }
        cssStyle[key] = true;
      }
    }
  });

  const length = Object.entries(cssStyle).length;
  for (let i = 0; i < length; i++) {
    const name = Object.entries(cssStyle)[i][0];
    test(`"${name}" 요소에 대한 스타일이 정확한가?`, async () => {
      const value = Object.entries(cssStyle)[i][1];
      expect(value).toBeTruthy();
    });
  }
});
