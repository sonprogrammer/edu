import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

import Side from './Side';



function App() {
  const handleItemClick = (label: string) => {
    // 메뉴 아이템이 클릭되었을 때 수행할 동작을 정의하세요.
    console.log('Clicked on menu item:', label);
  };

  return (
    <>
      <Side handleItemClick={handleItemClick}/>
    </>
  );
};

export default App;