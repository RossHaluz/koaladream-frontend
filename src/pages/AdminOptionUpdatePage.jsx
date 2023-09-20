import AdminOptionUpdate from 'components/AdminOptionUpdate';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOption } from 'redux/options/operetions';
import { selectOption } from 'redux/options/selectors';

const AdminOptionUpdatePage = () => {
  const { optionId } = useParams();
  const dispatch = useDispatch();
  const option = useSelector(selectOption);

  useEffect(() => {
    dispatch(getOption(optionId));
  }, [dispatch, optionId]);

  return <>{option && <AdminOptionUpdate option={option} />}</>;
};

export default AdminOptionUpdatePage;
