

// export default Sidebar;
import React, { useState } from 'react';
import { Heart, Chart, Mypage, Fire, User, Home, Recent, Dropdown } from './styles';
import tw from 'twin.macro';
import styled from 'styled-components'



const Nav = styled.nav`
const Nav = styled.nav`
  ${tw`
    fixed
    left-0
      top-0
    bg-[#404040]
    box-border
    text-white
    // top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#404040] text-white p-4 flex flex-col
    h-full
  `}
  width: 16rem;
`

const Logo = styled.span`
  ${tw`
    text-4xl font-semibold
  `}
`

const DivideLine = styled.div`
  ${tw`
    flex items-center justify-center h-20 border-b
  `}
`

const ButtonsContainer = styled.div`
  ${tw`
    flex 
    flex-col 
    mt-4
    pl-4
  `}
`
const ButtonWrapper = styled.div`
  ${tw`
    flex items-center px-3
    place-content-between
  `}
`


const Button = styled.div`
  ${tw`
    flex items-center space-x-3 p-2 hover:bg-black py-4

  `}
`


const DropdownButton = styled.div`
  ${tw`
    
    cursor-pointer ml-auto 
    

  `}
`

const ButtonIcon = styled(Dropdown)`
  ${tw`
    w-6 h-6 text-gray-800 dark:text-white
  `}
`

const Dropeddown = styled.div`
  ${tw`
  bg-gray-400 relative top-20 flex flex-col items-start rounded-lg p-2 w-32 text-center
  `}
`
const DropeddownContents = styled.div`
  ${tw`
    flex w-full hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent
  `}
`

const Userlogo = styled(User)`
  ${tw`
  `}
  
`

const Sidebar = () => {
  const [isDropdown, setIsDropdown] = useState(false);


  const Dropdownbtn = () => {
    setIsDropdown(!isDropdown);
  };

  interface Item {
    content: string;
    icon: React.ReactNode;
    dropdownItems?: string[]
  }

  const data = ['로그아웃', '회원정보 수정']


  const items: Item[] = [
    {
      content: '내 정보',
      icon: <Userlogo />, //logo는 아직  안넣어놈
      stop: 'son'
    },
    { content: 'Feed', icon: <Home /> },
    { content: '추천 플레이리스트', icon: <Fire /> },
    { content: '마이페이지', icon: <Mypage /> },
    { content: '차트', icon: <Chart /> },
    { content: '최신음악', icon: <Recent /> },
    { content: '좋아요한 음악', icon: <Heart /> },
  ];

  return (

    <Nav>

      <DivideLine>
        <Logo>로고</Logo>
        </DivideLine>
        {/* <DropdownButton onClick={Dropdownbtn}></DropdownButton>
      </ButtonContainer> */}
      <ButtonsContainer>
       
        {items.map((item, idx) => (
          <div key={idx} className=''>
            <ButtonWrapper>
            <Button
              onClick={() => console.log('메뉴 아이템 : ',item.content)}
            >
              <span>{item.icon}</span>
              <span>{item.content}</span>
              {item.stop && <DropdownButton onClick={()=>setIsDropdown((prev)=>!prev)}><Dropdown/></DropdownButton> }
              {isDropdown && item.stop && (
                <Dropeddown>{data.map((item, i)=> (
                    <DropeddownContents key={i}>
                      <h4>{item}</h4>
                    </DropeddownContents>
                ))}</Dropeddown>
              )}
            </Button>
            </ButtonWrapper>
          </div>
        ))}
      </ButtonsContainer>
    </Nav>
  );
};

export default Sidebar;
