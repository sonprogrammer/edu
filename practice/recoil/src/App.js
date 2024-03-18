import { atom } from 'recoil';
import './App.css';
import TextInput from './components/TextInput';
import CharacterCount from './components/CharacterCount';
import { selector } from 'recoil';


export const textState = atom({
  key: 'textState',
  default: ''
})

export const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const test = get(textState)
    return test.length
  }
})

function App() {
  
  
  return (
    <div>
      <TextInput></TextInput>
      <CharacterCount></CharacterCount>
    </div>
  );
}

export default App;
