import order_1x from './img/orders/order-item@1x.png';
import order_2x from './img/orders/order-item@2x.png';

const ReviewsAuthore = () => {
  return <div className='pt-[15px] border-t border-solid border-[#484848]'>
    <h3 className='mb-[17px]'>Христина</h3>
    <p className='mb-[15px]'>Опубліковано: 22.06.2022</p>
    <img
            srcSet={`${order_1x} 80w, ${order_2x} 160w`}
            src={order_1x}
            alt="Order img"
            width="80"
            height="80"
          />
  </div>
}

export default ReviewsAuthore
