import tw from 'twin.macro'
import styled from 'styled-components'

export const Nav =styled.div`
  ${tw`
    fixed
    left-0
      top-0
    bg-[#404040]
    box-border
    text-white
    // top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#404040] text-white p-4 flex flex-col
    h-full
    border-r-indigo-500
  `}
  width: 16rem;
`

export const Logo = styled.span`
  ${tw`
    text-4xl font-semibold
  `}
`

export const DivideLine = styled.div`
  ${tw`
    flex items-center justify-center h-20 border-b
  `}
`

export const ButtonsContainer = styled.div`
  ${tw`
    flex 
    flex-col 
    mt-4
    cursor-pointer
    hover:border-slate-400 
    justify-between
  `}
`

export const ButtonWrapper = styled.div`
  ${tw`
    flex
    items-center space-x-3
  `}
  width: 16rem;
`

export const Button = styled.div`
  ${tw`
    flex items-center space-x-3 p-2 
    hover:bg-zinc-900 
    hover:border-slate-400 
    pl-4
    py-4
  `}
  width: 16rem;
`

export const Dropeddown = styled.div`
  ${tw`
    flex-1
    flex
    flex-col
    gap-1
    p-2
  `}
  
  // 
`

export const DropeddownContents = styled.div`
  ${tw`
    p-2

  `}
  
`

export const DropdownItem = styled.div`
  ${tw`
    p-2 cursor-pointer hover:bg-gray-200
  `}
`

export const DropdownMenu = styled.div`
  absolute 
  flex
  flex-col
  top-full
  right-20
  right-0
  bg-color-black
  z-10
`

export const DropdownList = styled.ul`
  flex
  flex-col 
  gap-4
`
