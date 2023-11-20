// Sidebar.tsx
import React, { useState } from 'react'
import {
  Heart,
  Chart,
  Mypage,
  Fire,
  User,
  Home,
  Recent,
  Dropdown,
} from './icons/icon'

interface SidebarProps {
  handleItemClick: (label: string) => void
}

const Sidebar = ({ handleItemClick }: SidebarProps) => {
  const [isDropdown, setIsDropdown] = useState(false)

  const Dropdownbtn = () => {
    setIsDropdown(!isDropdown)
  }
  const items = [
    {
      content: '내 정보',
      icon: <User />,
      dropdownItems: ['로그아웃', '회원정보 수정'],
    },
    { content: 'Feed', icon: <Home /> },
    { content: '추천 플레이리스트', icon: <Fire /> },
    { content: '마이페이지', icon: <Mypage /> },
    { content: '차트', icon: <Chart /> },
    { content: '최신음악', icon: <Recent /> },
    { content: '좋아요한 음악', icon: <Heart /> },
  ]

  return (
    <nav className='bg-[#404040] h-full w-64 text-white p-4 flex flex-col'>
      <div className='flex items-center justify-center h-20 border-b'>
        <span className='text-3xl font-semibold'>로고</span>
        <div className='cursor-pointer' onClick={Dropdownbtn}>
          {/* {Dropdown} */}
        </div>
      </div>
      <div className='flex flex-col mt-4'>
        {items.map((item, idx) => (
          <div key={idx} className='relative'>
            <button
              onClick={() => handleItemClick(item.content)}
              className='flex items-center space-x-2 p-2 hover:bg-gray-700 py-4'>
              <span>{item.icon}</span>
              <span>{item.content}</span>
              {item.dropdownItems && (
                <div className='absolute right-0 mt-2 bg-black border rounded'>
                  {item.dropdownItems.map((dropdownItem, index) => (
                    <div
                      key={index}
                      className='p-2 cursor-pointer hover:bg-gray-200'
                      onClick={() => console.log(`Clicked on ${dropdownItem}`)}>
                      {dropdownItem}
                    </div>
                  ))}
                </div>
              )}
            </button>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Sidebar
