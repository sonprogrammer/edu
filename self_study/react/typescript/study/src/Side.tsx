// Sidebar.tsx
import React from 'react';
import {
  Container,
  Sidebar as StyledSideBar,
  MenuItem,
  StyledUserOutlined,
  StyledBarChartOutlined,
  StyledFireOutlined,
  StyledDatabaseOutlined,
  StyledThunderboltOutlined,
  StyledHeartOutlined,
} from './styles';

interface SidebarProps {
  handleItemClick: (label: string) => void;
}

function Side({ handleItemClick }: SidebarProps) {
  const items = [
    { content: '내 정보', icon: <StyledUserOutlined /> },
    { content: 'Feed', icon: <StyledBarChartOutlined /> },
    { content: '추천 플레이리스트', icon: <StyledFireOutlined /> },
    { content: '마이페이지', icon: <StyledDatabaseOutlined /> },
    { content: '차트', icon: <StyledBarChartOutlined /> },
    { content: '최신음악', icon: <StyledThunderboltOutlined /> },
    { content: '좋아요한 음악', icon: <StyledHeartOutlined /> },
  ];

  return (
    <Container>
      <StyledSideBar>
        {items.map((item, idx) => (
          <MenuItem key={idx} onClick={() => handleItemClick(item.content)}>
            {item.icon} {item.content} 
          </MenuItem>
        ))}
      </StyledSideBar>

    </Container>
  );
}

export default Side;
