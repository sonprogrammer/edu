


import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHouse, faFire, faChartSimple, faHeadphones, faHeart } from '@fortawesome/free-solid-svg-icons';
import {Nav, Logo, DivideLine, Button, SubcontentBox, Subcontent   }from './styles'


function SidebarContents() {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  interface Item {
  content: string;
    icon: React.ReactNode;
    subcontent?: string[];
  }

  const Menus: Item[] = [
    {
      content: '프로필',
      icon: <FontAwesomeIcon icon={faUser} />,
      subcontent: ['메인페이지', '회원정보 수정', '로그아웃'],
    },
    { content: '피드', icon: <FontAwesomeIcon icon={faHouse} /> },
    { content: '추천 플레이리스트', icon: <FontAwesomeIcon icon={faFire} /> },
    { content: '차트', icon: <FontAwesomeIcon icon={faChartSimple} /> },
    { content: '최신음악', icon: <FontAwesomeIcon icon={faHeadphones} /> },
    { content: '좋아요한 음악', icon: <FontAwesomeIcon icon={faHeart} /> },
  ];

  return (
    <Nav>
      <DivideLine>
        <Logo src='https://cdn.discordapp.com/attachments/1171419054314106982/1174894519234351135/324234.png?ex=656940c9&is=6556cbc9&hm=65c303d50798e68596681d05e1390d8e14256c75270a3789b3a195c90614c576&' alt='logo' />
      </DivideLine>
      {Menus.map((menu, index) => (
        <Button isFlex={true} key={index} onClick={() => {
          toggleSubMenu(index); 
          console.log(`선택메뉴 : ${menu.content}`)}
          }>
          <p>{menu.icon}</p>
          <p>{menu.content}</p>
          {openSubMenu === index && menu.subcontent && (
            <SubcontentBox>
              {menu.subcontent.map((subItem, subIndex) => (
                <Subcontent key={subIndex}>{subItem}</Subcontent>
              ))}
            </SubcontentBox>
          )}
        </Button>
      ))}
    </Nav>
  );
}

export default SidebarContents;
