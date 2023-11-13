import styled from 'styled-components'
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

export const Container = styled.div`
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  backgroundColor: '#404040'
`

export const Sidebar = styled.div`
  width: 200px;
  height: 100vh;
  background-color: #404040;
  color: white;
`;

export const StyledUserOutlined = styled(UserOutlined)`

`
export const StyledHeartOutlined = styled(HeartOutlined)`

`

export const StyledCloudOutlined = styled(CloudOutlined)`

`
export const StyledFireOutlined = styled(FireOutlined)`

`
export const StyledDatabaseOutlined = styled(DatabaseOutlined)`

`
export const StyledBarChartOutlined = styled(BarChartOutlined)`

`
export const StyledThunderboltOutlined = styled(ThunderboltOutlined)`

`

export const StyledEllipsisOutlined = styled(EllipsisOutlined)`

`


export const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;