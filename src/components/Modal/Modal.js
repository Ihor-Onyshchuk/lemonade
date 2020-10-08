import React from 'react';
import {createPortal} from 'react-dom';

import './Modal.scss';

const Modal = ({isModalOpen, children, onClick}) => {
  const handleModalClose = () => onClick(!isModalOpen);
  return createPortal(
    <div className="modal">
        <div className="modal__backdrop" onClick={handleModalClose} />
        <div className="modal__content">
          {children}
        </div>
      </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
