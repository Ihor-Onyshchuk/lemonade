import React from 'react';
import {createPortal} from 'react-dom';
import T from 'prop-types';

import './Modal.scss';

const Modal = ({isOpen, content, onClick}) => (
  createPortal(
    <div className="modal">
        <div className="modal-backdrop" onClick={() => onClick(!isOpen)} />
        <div className="modal-content">
          {content}
        </div>
      </div>,
    document.getElementById('modal-root')
  )
);

Modal.propTypes = {
  isOpen: T.bool.isRequired,
  onClick: T.func.isRequired,
  content: T.element,
};

export default Modal;
