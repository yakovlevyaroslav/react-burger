import {useEffect} from 'react';
import {createPortal} from 'react-dom';
import modalStyles from  './modalOverlay.module.css';

const modalOverlay = document.getElementById('modal-overlay');

function ModalOverlay({onClose}) {
  const handleEscKey = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return createPortal ( 
    (
      <div onClick={onClose} className={modalStyles['modal-overlay']}></div>
    ), 
    modalOverlay
  )
}

export default ModalOverlay;