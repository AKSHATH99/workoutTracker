import './App.css';
import Android1 from './components/Android1.js';
import Android2 from './components/Androind2.js';
import Androind4 from './components/Androind4.js';
import Androind5 from './components/Android5.js';
import Android6 from './components/Android6.js';
import Android9 from './components/Android9.js';
import Android8 from './components/Android8.js';
import Navbar from './components/Navbar.js';
import { Outlet } from 'react-router-dom';
function App() {
 return(
  <div className='flex flex-col min-h-screen'>
      <div className='flex-grow'>
        <Outlet/>
      </div>
      <Navbar/>
   
  {/* <Android2/> */}
{/* <Androind4/> */}
{/* <Androind5/> */}
{/* <Android6/> */}
{/* <Android9/> */}
{/* <Android8/> */}
{/* <Navbar/> */}
  </div>
 )
}

export default App;
