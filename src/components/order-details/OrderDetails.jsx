import { useSelector } from 'react-redux';
import orderDetailsStyles from  './orderDetails.module.css';

function OrderDetails() {
  const orderResponce = useSelector(state => state.order.orderData)
  const isLoadingPost = useSelector((state) => state.order.isLoadingPost);

  const number = orderResponce?.order?.number;

  return (
    <div className={`${orderDetailsStyles['order-details']} pb-20`}>
      {
        isLoadingPost ?
        <p className={`text text_type_main-large mb-8`}>
          Идет загрузка...
        </p> :
        <p className={`text text_type_digits-large mb-8`}>
          {number}
        </p>
      }
      <p className={`text text_type_main-medium mb-15`}>
        идентификатор заказа
      </p>
      <div className={`${orderDetailsStyles['order-details__image']} mb-15`}></div>
      <p className={`text text_type_main-default mb-2`}>
        Ваш заказ начали готовить
      </p>
      <p className={`text text_type_main-default text_color_inactive`}>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  )
}

export default OrderDetails;