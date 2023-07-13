import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar }  from "./components/Navbar"
import { Footer } from "./components/Footer"
import { ItemListContainer }  from "./components/ItemListContainer"
import { ItemDetailsContainer } from "./components/ItemDetailsContainer"



function App() {
  return (   
  <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos"/>} />
        <Route path="/category/:id" element={<ItemListContainer greeting="Bienvenidos"/>} />
        <Route path="/Item/:id" element={<ItemDetailsContainer />} />
        
      </Routes>
      
    <Footer/>
  </BrowserRouter>   

  );
}

export default App;
