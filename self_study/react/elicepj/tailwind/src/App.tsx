import Side from './Side/Side'
import './App.css'

// function App() {
//   const handleItemClick = (label: string) => {
//     console.log('메뉴 아이템 클릭:', label);
//   };
//   return (
//     <>
//   <Side handleItemClick={handleItemClick} />
//     </>
//   )
// }

// export default App

import './App.css'
import tw from 'twin.macro'
import styled from 'styled-components'

const Button = styled.button`
  ${tw`
    bg-transparent
    rounded-sm
    border
    border-blue-500
    text-blue-500
    border-solid
    m-1
    px-4
    py-4
  `}
`

const H1 = styled.h1`
  ${tw`
    text-2xl
    font-bold
    underline
  `}
`



function App() {

    const handleItemClick = (label: string) => {
    console.log('메뉴 아이템 클릭:', label);
  };
  return (
    <div className="App">
      <H1>
        Hello world!
      </H1>
      <Side handleItemClick={handleItemClick}/>
      <Button>Button</Button>
      <button>hi</button>
    </div>
  )
}


export default App