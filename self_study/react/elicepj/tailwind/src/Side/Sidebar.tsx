import React,{ useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faFire,
  faChartSimple,
  faHeadphones,
  faHeart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';


// export function Sidebar(){

//     return(
        
//     )
// }

function SidebarContents(){
    const [isOpen, setIsOpen] = useState(false)

    const OpenSub = () => {
        setIsOpen(!isOpen)
    }


interface Item {
    content: string;
    icon: React.ReactNode;
    subcontent?: string[];
  }

    const Menus: Item[] = [
        {
          content: '프로필',
          icon: <FontAwesomeIcon icon={faUser} />,
          subcontent: ['메인페이지','회원정보 수정', '로그아웃']
        },
        { content: '피드', icon: <FontAwesomeIcon icon={faHouse} /> },
        { content: '추천 플레이리스트', icon: <FontAwesomeIcon icon={faFire} /> },
        { content: '차트', icon: <FontAwesomeIcon icon={faChartSimple} /> },
        { content: '최신음악', icon: <FontAwesomeIcon icon={faHeadphones} /> },
        { content: '좋아요한 음악', icon: <FontAwesomeIcon icon={faHeart} /> },
      ];

    return(
        <div>
            {Menus.map((menu, i) =>{
                <div onClick={() =>
                    console.log('메뉴 : ', menu)
                    if(menu.content === '프로필'){
                        OpenSub()
                    }}
                >
                    {isOpen && menu.content === '프로필' && (
                        <div>
                            <span>{menu.subcontent[0]}</span>
                            <span>{menu.subcontent[1]}</span>
                            <span>{menu.subcontent[2]}</span>
                        </div>
                    )}
                    <span>{menu.icon}</span>
                    <span>{menu.content}</span>
                    {}
                </div>
            })}
        </div>
    )
}



