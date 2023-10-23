import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideNav from './components/SideNav';
import SubNav from './components/SideNav/SubNav';
import Content from './components/content';

function App() {
  return (
    <div className="app-container">
     
       <Header></Header>
       <div style={{display:"flex",position:"relative"}}>
       <SideNav/>
       <Content/>
       </div>
       
    
    </div>
  );
}

export default App;
