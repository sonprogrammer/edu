import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './routes/Main'
import TestPage from './routes/TestPage'
import ResultPage from './routes/ResultPage'
import { useState } from "react";

function App() {

  const [EI, setEI] = useState(0)
  const [SN, setSN] = useState(0)
  const [TF, setTF] = useState(0)
  const [JP, setJP] = useState(0)

const [MBTI, setMBTI] = useState()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main setEI={setEI} setSN={setSN} setTF={setTF} setJP={setJP}/>}></Route>
        <Route path="/testpage" element={<TestPage setEI={setEI} setSN={setSN} setTF={setTF} setJP={setJP} MBTI={MBTI} />}></Route>
        <Route path="/resultpage" element={<ResultPage />}></Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App;
