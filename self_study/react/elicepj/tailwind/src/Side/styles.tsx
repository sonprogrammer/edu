import tw from 'twin.macro';
import styled from 'styled-components';



export const Nav = styled.nav`
  ${tw`
    fixed
    left-0
      top-0
    bg-[#404040]
    box-border
    text-white
    h-full
    border-r-indigo-500
    w-64
  `}
`

export const Logo = styled.img`
  ${tw`

  `}
`

export const DivideLine = styled.div`
  ${tw`
    // flex items-center justify-center h-20 border-b
    flex items-center justify-center h-[87px] border-b
  `}
`

// export const Button = styled.div.attrs(({ isFlex }) => ({
//   isFlex: isFlex ? tw`flex items-start` : tw``,
// }))`
//   ${tw`
//     flex items-center space-x-3 p-2
//     hover:bg-zinc-900
//     hover:border-slate-400
//     pl-4
//     py-4
//     w-full
//     transition duration-300
//     ease-in-out
//     transform hover:scale-105
//   `}
  
//   &:hover {
//     background-color: black;
//   }
//   ${props => props.isFlex}
//   display: flex; /* 추가 */
//   flex-direction: column; /* 수정 */
//   // align-items: flex-start; /* 추가 */
//   span{
//     margin-right: 1rem;
//   }
// `;
export const Button = styled.div`
  ${tw`
  p-4
  flex
  items-center
  `}
  &:hover{
    background-color: black;
  }
  SubcontentBox{
    flex-none
  }
`

export const SubcontentBox = styled.div`
  ${tw`
    flex
    flex-col

    items-start
  `}
  // ${({ isFlex }) => isFlex && tw`flex flex-col items-start`}
`;

export const Subcontent = styled.div`
${tw`
flex flex-col items-start p-2 text-center
w-full
transition duration-300
ease-in-out
transform hover:scale-105
`}

&:hover {
background-color: zinc;
}
`;