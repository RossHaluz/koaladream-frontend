import { Suspense } from "react";
import AppBar from "./AppBar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Footer";

const Loyaut = () => {
  return <>
  <AppBar/>
  <div className="container">
    <Suspense fallback={<h2>Loading...</h2>}>
      <main>
        <Outlet/>
        <ToastContainer position="bottom-left" autoClose={5000}/>
        </main>
   </Suspense>
  </div>
  <Footer/>
  </>

}

export default Loyaut
