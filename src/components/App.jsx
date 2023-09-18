import { Route, Routes } from 'react-router-dom';
import Loyaut from './Loyaut';
import { lazy, useEffect } from 'react';
import HomePage from 'pages/HomePage';
import PrivateRoute from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { currentUser } from 'redux/auth/operetions';
import AdminLoginPage from 'pages/AdminLoginPage';

const UserAccountPage = lazy(() => import('../pages/UserAccountPage'));
const CategoryItemsPage = lazy(() => import('../pages/CategoryItemsPage'));
const ItemDetailsPage = lazy(() => import('../pages/ItemDetailsPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/" element={<Loyaut />}>
        <Route
          path="acount"
          element={
            <PrivateRoute component={<UserAccountPage />} redirectTo="/" />
          }
        />
        <Route path='/:category' element={<CategoryItemsPage/>}/>
        <Route path='/:itemId' element={<ItemDetailsPage/>}/>
      </Route>
     <Route path='/admin/login' element={<AdminLoginPage/>}/>
    </Routes>
  );
};
