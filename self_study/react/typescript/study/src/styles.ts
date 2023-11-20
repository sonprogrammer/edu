// import styled from 'styled-components'
// import {
//   BarChartOutlined,
//   CloudOutlined,
//   HomeOutlined,
//   HeartOutlined,
//   UploadOutlined,
//   FireOutlined,
//   UserOutlined,
//   ThunderboltOutlined,
//   DatabaseOutlined,
//   EllipsisOutlined,
// } from '@ant-design/icons'

// export const Container = styled.div`
//   overflow: 'auto',
//   height: '100vh',
//   position: 'fixed',
//   left: 0,
//   top: 0,
//   bottom: 0,
//   backgroundColor: '#404040'
// `

// export const Sidebar = styled.div`
//   width: 200px;
//   height: 100vh;
//   background-color: #404040;
//   color: white;
// `;

// export const StyledUserOutlined = styled(UserOutlined)`

// `
// export const StyledHeartOutlined = styled(HeartOutlined)`

// `

// export const StyledCloudOutlined = styled(CloudOutlined)`

// `
// export const StyledFireOutlined = styled(FireOutlined)`

// `
// export const StyledDatabaseOutlined = styled(DatabaseOutlined)`

// `
// export const StyledBarChartOutlined = styled(BarChartOutlined)`

// `
// export const StyledThunderboltOutlined = styled(ThunderboltOutlined)`

// `

// export const StyledEllipsisOutlined = styled(EllipsisOutlined)`

// `


// export const MenuItem = styled.div`
//   padding: 10px;
//   cursor: pointer;

//   &:hover {
//     background-color: #555;
//   }
// `;
import styled from "styled-components"
import tw from "twin.macro"

// attrs에 클래스명을 사용한다!
const StyledForm = styled.main.attrs({
  className: "flex flex-col h-screen justify-center items-center bg-gray-100",
})`
  & {
    form {
      ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`}
    }
    input {
      ${tw`border-gray-300 mb-4 w-full border-solid border rounded py-2 px-4`}
    }
    button {
      ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
    }
  }
`
export default StyledForm
