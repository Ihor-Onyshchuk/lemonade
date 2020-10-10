import React from 'react';
import {createPortal} from 'react-dom';
import T from 'prop-types';

import './Modal.scss';

const Modal = ({isModalOpen, children, onClick}) => {
  const handleModalClose = () => onClick(!isModalOpen);
  return createPortal(
    <div className="modal">
        <div className="modal-backdrop" onClick={handleModalClose} />
        <div className="modal-content">
          {children}
        </div>
      </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  isModalOpen: T.bool.isRequired,
  onClick: T.func.isRequired,
  children: T.element,
}

export default Modal;
