
import {Route} from "react-router-dom";
  import { ToastContainer } from 'react-toastify';
  import { Camera } from 'lucide-react';
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Header } from "./layout/Header";
import PageContent from "./layout/PageContent";
import { Footer } from "./layout/Footer";

function App() {


  return (
    <BrowserRouter>
    <div className="flex min-h-screen flex-col">
      <Header/>
      <PageContent/>
      <Footer/>
    </div>
     
      
    </BrowserRouter>
  )
}

export default App
