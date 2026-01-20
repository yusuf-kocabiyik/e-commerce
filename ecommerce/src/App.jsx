
import {Route} from "react-router-dom";
  import { ToastContainer } from 'react-toastify';
  import { Camera } from 'lucide-react';

function App() {


  return (
    <>
    <ToastContainer />
  
     
       <h1 class="text-3xl text-center font-bold underline">
    Hello world!
  </h1>
  <Camera size={78}   className="mx-auto" color="red"  />
      
    </>
  )
}

export default App
