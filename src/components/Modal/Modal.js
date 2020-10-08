import React from 'react';
import {createPortal} from 'react-dom';

import cx from 'classnames';

import './Modal.scss';

const Modal = ({isModal, children, onClick}) => {
  const handleModalClose = () => onClick(!isModal);
  return createPortal(
      <div className="modal">
        <div className="modal__backdrop" onClick={handleModalClose} />
        <div className="modal__content">
          <div className="modal__wrapper">
            {children}
          </div>
        </div>
      </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
