import { Route, Routes } from "react-router-dom";
import Loyaut from "./Loyaut";
import { lazy, useEffect } from "react";
import HomePage from "pages/HomePage";
import PrivateRoute from "./PrivateRoute";
import { useDispatch } from "react-redux";
import { currentUser } from "redux/auth/operetions";

const UserAccountPage = lazy(() => import('../pages/UserAccountPage'));

export const App = () => {
const dispatch = useDispatch();

useEffect(() => {
dispatch(currentUser())
}, [dispatch])

  return <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/" element={<Loyaut/>}>
      <Route path='acount' element={<PrivateRoute component={<UserAccountPage/>} redirectTo='/'/>}/>
    </Route>
  </Routes>
};
