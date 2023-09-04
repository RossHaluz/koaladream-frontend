import { Suspense } from "react";
import AppBar from "./AppBar";
import { Outlet } from "react-router-dom";

const Loyaut = () => {
  return <>
  <AppBar/>
  <div className="container">
    <Suspense fallback={<h2>Loading...</h2>}>
      <main>
        <Outlet/>
        </main>
   </Suspense>
  </div>
  </>

}

export default Loyaut
