// styles.ts
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
  `}
  width: 16rem;
`;

export const Logo = styled.span`
  ${tw`
    text-4xl font-semibold
  `}
`;

export const DivideLine = styled.div`
  ${tw`
    flex items-center justify-center h-20 border-b
  `}
`;

export const ButtonsContainer = styled.div`
  ${tw`
    flex 
    flex-col 
    mt-4
    cursor-pointer
    hover:border-slate-400 
    justify-between
  `}
`;

export const ButtonWrapper = styled.div`
  ${tw`
    flex
    items-center space-x-3
  `}
  width: 16rem;
`;

export const Button = styled.div`
  ${tw`
    flex items-center space-x-3 p-2 
    hover:bg-zinc-900 
    hover:border-slate-400 
    pl-4
    py-4
    relative
  `}
  width: 16rem;
`;

export const Dropeddown = styled.div<{ isVisible: boolean }>`
  ${tw`
    absolute
    top-full
    left-0
    bg-gray-800
    text-white
    p-2
    border-t
    transition-all duration-300
  `}
  transform: translateY(${(props) => (props.isVisible ? '0' : '-100%')});
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  display: block;

  z-index: 1; // Dropdown이 위에 올라오도록 설정
`;

export const DropeddownContents = styled.div`
  ${tw`
    p-2 cursor-pointer hover:bg-gray-600
  `}
`;
