import OrderItem from './OrderItem';

const OdersList = ({orders}) => {

  return <>{orders.length > 0 && <ul className='flex flex-col gap-[15px]'>
  {orders.length > 0 && orders?.map(item => {
    return <>{item && <OrderItem key={item?._id} item={item}/>}</>
  })}
</ul>}</>
}

export default OdersList
