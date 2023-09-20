import { Route, Routes } from 'react-router-dom';
import Loyaut from './Loyaut';
import { lazy, useEffect } from 'react';
import HomePage from 'pages/HomePage';
import PrivateRoute from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { currentUser } from 'redux/auth/operetions';
import AdminLoginPage from 'pages/AdminLoginPage';
import LoyautAdmin from './LoyautAdmin';

const UserAccountPage = lazy(() => import('../pages/UserAccountPage'));
const CategoryItemsPage = lazy(() => import('../pages/CategoryItemsPage'));
const ItemDetailsPage = lazy(() => import('../pages/ItemDetailsPage'));
const AdminDashboardPage = lazy(() => import('../pages/AdminDashboardPage'));
const AdminItemsPage = lazy(() => import('../pages/AdminItemsPage'));
const AdminFilterPage = lazy(() => import('../pages/AdminFilterPage'));
const AdminOptionsPage = lazy(() => import('../pages/AdminOptionsPage'));
const AdminAddOptionPage = lazy(() => import('../pages/AdminAddOptionPage'));
const AdminCategoryPage = lazy(() => import('../pages/AdminCategoryPage'));
const AdminOrdersPage = lazy(() => import('../pages/AdminOrdersPage'));
const AdminOptionUpdatePage = lazy(() =>
  import('../pages/AdminOptionUpdatePage')
);
const AdminAddFilterPage = lazy(() => import('../pages/AdminAddFilterPage'));

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
        <Route path=":category" element={<CategoryItemsPage />} />
        <Route path=":category/:itemId" element={<ItemDetailsPage />} />
      </Route>

      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="/admin" element={<LoyautAdmin />}>
        <Route path="dashboard" element={<AdminDashboardPage />} />
        <Route path="items" element={<AdminItemsPage />} />
        <Route path="filter" element={<AdminFilterPage />} />
        <Route path="options" element={<AdminOptionsPage />} />
        <Route path="add-option" element={<AdminAddOptionPage />} />
        <Route path="category" element={<AdminCategoryPage />} />
        <Route path="orders" element={<AdminOrdersPage />} />
        <Route path="options/:optionId" element={<AdminOptionUpdatePage />} />
        <Route path="add-filter" element={<AdminAddFilterPage />} />
      </Route>
    </Routes>
  );
};
