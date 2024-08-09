import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ModalOverlay from '../modal-overlay/ModalOverlay';

import modalStyles from  './modal.module.css';

const modalElement = document.getElementById('modal');

function Modal({onClose, title, children}) {

  const handleEscKey = useCallback((event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);


  useEffect(() => {
    document.addEventListener('keydown', handleEscKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [handleEscKey]);


  return createPortal ( 
    (
      <>
        <div className={`${modalStyles.modal} p-10`}>
          <div className={`${modalStyles['modal-header']}`}>
            {
              title &&
              <div className={`pt-3 text text_type_main-large`}>
                {title}
              </div>
            }
            <div onClick={onClose} className={modalStyles['modal-header__btn-close']}>
              <CloseIcon />
            </div>
          </div>
          {children}
        </div>
        <ModalOverlay onClose={onClose} />
      </>
    ), 
    modalElement
  )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.any.isRequired
}; 

export default Modal;