import './App.css';
import './components/Allbtn.css'
import { Join } from './components/Join';
import { Contact } from './components/Contact'
import { Setting } from './components/Setting'
import { Login } from './components/Login'
import { Search } from './components/Search'
import { Help } from './components/Help'
import { Home } from './components/Home'
import { Download } from './components/Download'



function App() {
 return (
   <div id="container">
      <Join/>
      <Setting/>
      <Login/>
      <Contact/>
      <Search/>
      <Help/>
      <Home/>
      <Download/>
  </div> 
)}

export default App;
