import ItemDetails from 'components/ItemDetails';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getItemDetails } from 'redux/items/operetions';
import { selectItemDetails } from 'redux/items/selectors';

const ItemDetailsPage = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const item = useSelector(selectItemDetails);

  useEffect(() => {
    dispatch(getItemDetails(itemId));
  }, [dispatch, itemId]);

  return <>{item && <ItemDetails item={item} />}</>;
};

export default ItemDetailsPage;
