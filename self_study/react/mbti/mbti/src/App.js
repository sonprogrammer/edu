import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './routes/Main'
import TestPage from './routes/TestPage'
import ResultPage from './routes/ResultPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/testpage" element={<TestPage />}></Route>
        <Route path="/resultpage" element={<ResultPage />}></Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App;
