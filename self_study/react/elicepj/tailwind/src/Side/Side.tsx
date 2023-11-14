// // Sidebar.tsx
// import React, { useState } from 'react'
// import {
//   Heart,
//   Chart,
//   Mypage,
//   Fire,
//   User,
//   Home,
//   Recent,
//   // Dropdown,
// } from './styles'

// interface SidebarProps {
//   handleItemClick: (label: string) => void
// }

// const Sidebar = ({ handleItemClick }: SidebarProps) => {
//   const [isDropdown, setIsDropdown] = useState(false)

//   const Dropdownbtn = () => {
//     setIsDropdown(!isDropdown)
//   }
//   const items = [
//     {
//       content: '내 정보',
//       icon: <User />,
//       dropdownItems: ['로그아웃', '회원정보 수정'],
//     },
//     { content: 'Feed', icon: <Home /> },
//     { content: '추천 플레이리스트', icon: <Fire /> },
//     { content: '마이페이지', icon: <Mypage /> },
//     { content: '차트', icon: <Chart /> },
//     { content: '최신음악', icon: <Recent /> },
//     { content: '좋아요한 음악', icon: <Heart /> },
//   ]

//   return (
//     <nav className='bg-[#404040] h-full w-64 text-white p-4 flex flex-col'>
//       <div className='flex items-center justify-center h-20 border-b'>
//         <span className='text-3xl font-semibold'>로고</span>
//         <div className='cursor-pointer' onClick={Dropdownbtn}>

//         </div>
//       </div>
//       <div className='flex flex-col mt-4'>
//         {items.map((item, idx) => (
//           <div key={idx} className='relative'>
//             <button
//               onClick={() => handleItemClick(item.content)}
//               className='flex items-center space-x-2 p-2 hover:bg-gray-700 py-4'>
//               <span>{item.icon}</span>
//               <span>{item.content}</span>
//               {item.dropdownItems && (
//                 <div className='absolute right-0 mt-2 bg-black border rounded'>
//                   {item.dropdownItems.map((dropdownItem, index) => (
//                     <div
//                       key={index}
//                       className='p-2 cursor-pointer hover:bg-gray-200'
//                       onClick={() => console.log(`Clicked on ${dropdownItem}`)}>
//                       {dropdownItem}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </button>
//           </div>
//         ))}
//       </div>
//     </nav>
//   )
// }

// import React, { useState } from 'react';
// import { Heart, Chart, Mypage, Fire, User, Home, Recent } from './styles';
// import tw from 'twin.macro'
// import styled from 'styled-components'

// interface SidebarProps {
//   handleItemClick: (label: string) => void;
// }

// const Nav = styled.nav`
//   ${tw`
//   fixed 
//   left-1/2
//    top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#404040] h-full w-64 text-white p-4 flex flex-col
//   `}
// `

// const Logo = styled.span`
//   ${tw`
//   text-4xl font-semibold
//   `}
// `

// const Sidebar = ({ handleItemClick }: SidebarProps) => {
//   const [isDropdown, setIsDropdown] = useState(false);

//   const Dropdownbtn = () => {
//     setIsDropdown(!isDropdown);
//   };

//   const items = [
//     {
//       content: '내 정보',
//       icon: <User />,
//       dropdownItems: ['로그아웃', '회원정보 수정'],
//     },
//     { content: 'Feed', icon: <Home /> },
//     { content: '추천 플레이리스트', icon: <Fire /> },
//     { content: '마이페이지', icon: <Mypage /> },
//     { content: '차트', icon: <Chart /> },
//     { content: '최신음악', icon: <Recent /> },
//     { content: '좋아요한 음악', icon: <Heart /> },
//   ];

//   return (
//     <Nav>
//       <div className='flex items-center justify-center h-20 border-b'>
//         <Logo>로고</Logo>
//         <div className='cursor-pointer' onClick={Dropdownbtn}></div>
//       </div>
//       <div className='flex flex-col mt-4'>
//         {items.map((item, idx) => (
//           <div key={idx} className='relative'>
//             <button
//               onClick={() => handleItemClick(item.content)}
//               className='flex items-center space-x-2 p-2 hover:bg-gray-700 py-4'>
//               <span>{item.icon}</span>
//               <span>{item.content}</span>
//               {item.dropdownItems && (
//                 <div className='absolute right-0 mt-2 bg-black border rounded'>
//                   {item.dropdownItems.map((dropdownItem, index) => (
//                     <div
//                       key={index}
//                       className='p-2 cursor-pointer hover:bg-gray-200'
//                       onClick={() => console.log(`Clicked on ${dropdownItem}`)}>
//                       {dropdownItem}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </button>
//           </div>
//         ))}
//       </div>
//     </Nav>
//   );
// };

// export default Sidebar;
import React, { useState } from 'react';
import { Heart, Chart, Mypage, Fire, User, Home, Recent } from './styles';
import tw from 'twin.macro';
import styled from 'styled-components'
interface SidebarProps {
  handleItemClick: (label: string) => void;
}

const Nav = styled.nav`
  ${tw`
    fixed 
    left-1/2
    top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#404040] text-white p-4 flex flex-col
  `}
  width: 16rem;
`

const Logo = styled.span`
  ${tw`
    text-4xl font-semibold
  `}
`

const ButtonContainer = styled.div`
  ${tw`
    flex items-center justify-center h-20 border-b
  `}
`

const DropdownButton = styled.div`
  ${tw`
    cursor-pointer
  `}
`

const Button = styled.button`
  ${tw`
    flex items-center space-x-2 p-2 hover:bg-gray-700 py-4
  `}
`

const DropdownContent = styled.div`
  ${tw`
    absolute right-0 mt-2 bg-black border rounded
  `}
`

const DropdownItem = styled.div`
  ${tw`
    p-2 cursor-pointer hover:bg-gray-200
  `}
`

const Userlogo = styled(User)`
  ${tw`
    w-2
  `}
`

const Sidebar = ({ handleItemClick }: SidebarProps) => {
  const [isDropdown, setIsDropdown] = useState(false);

  const Dropdownbtn = () => {
    setIsDropdown(!isDropdown);
  };

  const items = [
    {
      content: '내 정보',
      icon: <Userlogo />,
      dropdownItems: ['로그아웃', '회원정보 수정'],
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
      <ButtonContainer>
        <Userlogo />
        
        <Logo>로고</Logo>
        <DropdownButton onClick={Dropdownbtn}></DropdownButton>
      </ButtonContainer>
      <div className='flex flex-col mt-4'>
        {items.map((item, idx) => (
          <div key={idx} className='relative'>
            <Button
              onClick={() => handleItemClick(item.content)}
            >
              <span>{item.icon}</span>
              <span>{item.content}</span>
              {item.dropdownItems && (
                <DropdownContent>
                  {item.dropdownItems.map((dropdownItem, index) => (
                    <DropdownItem
                      key={index}
                      onClick={() => console.log(`Clicked on ${dropdownItem}`)}
                    >
                      {dropdownItem}
                    </DropdownItem>
                  ))}
                </DropdownContent>
              )}
            </Button>
          </div>
        ))}
      </div>
    </Nav>
  );
};

export default Sidebar;
