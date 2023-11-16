import React, { useState } from 'react';
import {
  Nav,
  Logo,
  DivideLine,
  ButtonsContainer,
  ButtonWrapper,
  Button,
  UserInfo,
  Dropeddown,
  DropeddownContents,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFire, faChartSimple, faHeadphones, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

export default function SideBarComponent() {
  const [isDropdown, setIsDropdown] = useState(false);

  const Dropdownbtn = () => {
    setIsDropdown(!isDropdown);
    console.log('isDropdown', isDropdown)
  };

  interface Item {
    content: string;
    icon: React.ReactNode;
    dropdownItems?: string[];
  }

  const data = ['마이페이지', '회원정보 수정', '로그아웃'];

  const items: Item[] = [
    {
      content: '프로필',
      icon: <FontAwesomeIcon icon={faUser} />,
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
        <Logo>로고</Logo>
      </DivideLine>

      <ButtonsContainer>
        {items.map((item, index) => (
          <Button key={index} onClick={Dropdownbtn}>
            <span>{item.icon}</span>
            <span>{item.content}</span>
            <Dropeddown isVisible={isDropdown}>
              {data.map((item, i) => (
                <DropeddownContents key={i}>
                  <h4>{item}</h4>
                </DropeddownContents>
              ))}
            </Dropeddown>
          </Button>
        ))}
      </ButtonsContainer>
    </Nav>
  );
}
