import React,{ReactNode} from 'react'
import {
  BarChartOutlined,
  CloudOutlined,
  HomeOutlined,
  HeartOutlined,
  UploadOutlined,
  FireOutlined,
  UserOutlined,
  ThunderboltOutlined,
  DatabaseOutlined,
  EllipsisOutlined,
} from '@ant-design/icons'
import type { MenuProps, MenuItemProps } from 'antd'
import { Layout, Menu, theme, Dropdown, Space } from 'antd'

const { Header, Content, Footer, Sider } = Layout

// const menuContent: ReactNode = (
//     <Menu>
//       <Menu.Item key='1'>Option 1</Menu.Item>
//       <Menu.Item key='2'>Option 2</Menu.Item>
//       <Menu.Item key='3'>Option 3</Menu.Item>
//     </Menu>
//   );

  type smallItems= {
      key: number,
      label: string
    }

  const small : smallItems[] =[
    {
        key: 1,
        label: '로그아웃'
    },
    {
        key: 2,
        label: '회원정보 수정'
    },
  ];


const items: MenuProps['items'] = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: (
      <Dropdown menu={
        <Menu>
          {small.map(item => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>}
       trigger={['click']}>
        <span>
          내 정보 <EllipsisOutlined style={{ marginLeft: '60px' }} />
        </span>
      </Dropdown>
    ),
    style: { marginTop: '20px' },
  },
  {
    key: '2',
    icon: <HomeOutlined />,
    label: 'Feed',
    style: { marginTop: '60px' },
  },
  {
    key: '3',
    icon: <FireOutlined />,
    label: '추천 플레이리스트',
    style: { marginTop: '60px' },
  },
  {
    key: '4',
    icon: <DatabaseOutlined />,
    label: '마이페이지',
    style: { marginTop: '10px' },
  },
  {
    key: '5',
    icon: <CloudOutlined />,
    label: '차트',
    style: { marginTop: '60px' },
  },
  {
    key: '6',
    icon: <ThunderboltOutlined />,
    label: '최신음악',
    style: { marginTop: '10px' },
  },
  {
    key: '7',
    icon: <HeartOutlined />,
    label: '좋아요한 음악',
    style: { marginTop: '10px' },
  },
  //   { key: '8', icon: <UploadOutlined />, label: '쇼핑' , style:{marginTop: '10px'}},
]

const App: React.FC = () => {
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken()

  const handleMenuClick = (e: MenuItemProps) => {
    // 여기서 클릭 이벤트를 처리할 수 있습니다.
    console.log('Clicked on menu item:', e)
  }

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          backgroundColor: `#404040`,
        }}>
        <div className='demo-logo-vertical' />
        <Menu
          theme='dark'
          mode='inline'
          items={items}
          style={{
            backgroundColor: '#404040',
            color: 'white',
          }}>
        </Menu>
        {/* <Dropdown menu={{ items }} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <EllipsisOutlined />
      </Space>
    </a>
  </Dropdown> */}


      </Sider>
      <Layout className='site-layout' style={{ marginLeft: 200 }}></Layout>
      {/* <Header style={{ padding: 0,  }} /> */}
      {/* <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}></Content> */}
      {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer> */}
    </Layout>
  )
}

export default App
