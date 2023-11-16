import React, { useState } from 'react'
// import { Heart, Chart, Mypage, Fire, User, Home, Recent, Dropdown } from './styles';
import {
  Nav,
  Logo,
  DivideLine,
  ButtonsContainer,
  ButtonWrapper,
  Button,
  DropdownButton,
//   ButtonIcon,
  Dropeddown,
  DropeddownContents,
  DropdownMenu,
 

//   Userlogo,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFire, faDatabase, faChartSimple, faHeadphones, faHeart, faEllipsis, faUser } from '@fortawesome/free-solid-svg-icons'





export default function SideBarComponent() {
  const [isDropdown, setIsDropdown] = useState(false)

  const Dropdownbtn = () => {
    setIsDropdown(!isDropdown)
  }

  interface Item {
    content: string
    icon: React.ReactNode
    dropdownItems?: string[]
  }

  const data = ['마이페이지','로그아웃', '회원정보 수정']

  const items: Item[] = [
    {
      content: '프로필',
      icon: <FontAwesomeIcon icon={faUser} />, //logo는 아직  안넣어놈
    },
    { content: '피드', icon: <FontAwesomeIcon icon={faHouse} /> },
    // { content: '마이페이지', icon: <FontAwesomeIcon icon={faDatabase} /> },
    { content: '추천 플레이리스트', icon: <FontAwesomeIcon icon={faFire} /> },
    { content: '차트', icon: <FontAwesomeIcon icon={faChartSimple} /> },
    { content: '최신음악', icon: <FontAwesomeIcon icon={faHeadphones} />},
    { content: '좋아요한 음악', icon: <FontAwesomeIcon icon={faHeart} /> },

  ]

  return (
    <Nav>
      <DivideLine>
        <Logo>로고</Logo>
      </DivideLine>

      <ButtonsContainer>
        
        {items.map((item) => (
          <ButtonWrapper key={item.content}>
              <Button
                onClick={() => {
                  console.log('메뉴 아이템 : ', item.content);
                  // 프로필 클릭 시 Dropdown 열기
                  if (item.content === '프로필') {
                    Dropdownbtn();
                  }
                }}
              >
                <span>{item.icon}</span>
                <span>{item.content}</span>
                {isDropdown && item.content === '프로필' && (
                  <DropdownMenu>
                      <Dropeddown>
                        {data.map((item, i) => (
                          <DropeddownContents key={i}>
                            <h4>{item}</h4>
                          </DropeddownContents>
                        ))}
                      </Dropeddown>
                      </DropdownMenu>
                    )}
                
              </Button>
              </ButtonWrapper>
          // </div>
        ))}
        
      </ButtonsContainer>
    </Nav>
  )
}


