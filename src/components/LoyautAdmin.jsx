import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoyautAdmin = () => {
  return (
    <div className="flex gap-[40px]">
      <Sidebar />

<div className='ml-[320px] w-full h-screen'>
      <Suspense fallback={'Loading...'}>
        <Outlet />
        <ToastContainer position="bottom-right" autoClose={5000} />
      </Suspense>
      </div>
    </div>
  );
};

export default LoyautAdmin;
