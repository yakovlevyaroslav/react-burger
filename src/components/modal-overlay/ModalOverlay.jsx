import PropTypes from 'prop-types';

import modalStyles from  './modalOverlay.module.css';

function ModalOverlay({onClose}) {
  return  ( 
    <div onClick={onClose} className={modalStyles['modal-overlay']}></div>
  )
}

ModalOverlay.propTypes = {
  onClose: PropTypes.func
}; 

export default ModalOverlay;