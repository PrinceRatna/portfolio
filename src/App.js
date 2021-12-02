
import './App.css';
import Home from './component/Home/Home';
import Features from './component/Features/Features';
import PersistentDrawerRight from './component/Navbar/PersistentDrawerRight';
import MyProjects from './component/MyProjects/MyProjects';
import Contact from './component/Contact/Contact';
import About from './component/About/About';
import Address from './component/Address/Address';

function App() {
  return (
    <div className="App">
      <PersistentDrawerRight></PersistentDrawerRight>
      <Home></Home>
      <Features></Features>
      <MyProjects></MyProjects>
     <About></About>
     <Address></Address>
     <Contact></Contact>
     

    </div>
  );
}

export default App;
