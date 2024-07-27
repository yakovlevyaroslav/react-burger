import {createPortal} from 'react-dom';
import PropTypes from 'prop-types';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';

import IngredientDetails from '../ingredient-details/IngredientDetails';
import OrderDetails from '../order-details/OrderDetails';

import modalStyles from  './modal.module.css';

const modalElement = document.getElementById('modal');

function Modal({onClose, propIngredient, type}) {
  return createPortal ( 
    (
      <div className={`${modalStyles.modal} p-10`}>
        <div className={`${modalStyles['modal-header']}`}>
          {
            type === 'ingredient' ?
              <div className={`pt-3 text text_type_main-large`}>
                Детали заказа
              </div>
            :
            <></>
          }

          <div onClick={onClose} className={modalStyles['modal-header__btn-close']}>
            <CloseIcon />
          </div>
        </div>
        {
          type === 'ingredient' ?
          <>
            <IngredientDetails propIngredient={propIngredient} />
          </>
          :
            <OrderDetails />
        }
      </div>
    ), 
    modalElement
  )
}

Modal.propTypes = {
  propIngredients: PropTypes.array,
  type: PropTypes.string,
  onClose: PropTypes.func
}; 

export default Modal;