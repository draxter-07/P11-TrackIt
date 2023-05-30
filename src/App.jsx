import { BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from "./pages/LoginPage.jsx"
import SignupPage from "./pages/SignupPage.jsx"
import HabsPage from './pages/HabsPage.jsx'
import HojePage from './pages/HojePage.jsx'
import HistPage from './pages/HistPage.jsx'
import ResetStyle from './styles/ResetStyle.js'
import GlobalStyle from './styles/GlobalStyle.js'

export default function App() {
  return (
    <>
      <ResetStyle/>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/cadastro" element={<SignupPage/>}/>
          <Route path="/habitos" element={<HabsPage/>}/>
          <Route path="/hoje" element={<HojePage/>}/>
          <Route path="/historico" element={<HistPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
