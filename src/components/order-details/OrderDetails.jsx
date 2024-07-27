import orderDetailsStyles from  './orderDetails.module.css';

function OrderDetails() {
  return (
    <div className={`${orderDetailsStyles['order-details']} pb-20`}>
      <p className={`text text_type_digits-large mb-8`}>
        034536
      </p>
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