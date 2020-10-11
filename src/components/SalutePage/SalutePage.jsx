import React from 'react';
import T from 'prop-types';
import cx from 'classnames';

import Button from '../common/Button';
import { numberWithDelimiter } from '../../utils';

import lucas from '../../assets/images/lucas.svg';
import './SalutePage.scss';

const SalutePage = ({ mode, score, onStart }) => {
  const isEnd = mode === 'end';
  const buttonName = isEnd ? 'Try again' : 'Start';

  return (
    <div className={cx('salute', { 'salute-end': isEnd })}>
      {!isEnd && <div className="salute-triangle-bg" />}

      <div className="salute-content">
        <div className="salute-content-image">
          <img className="thumb-up" src={lucas} alt="lucas" />
        </div>

        <div className="salute-content-text">
          {isEnd ? (
            <>
              <div className="content-suptitle">Total score:</div>
              <h1 className="content-title">
                &#36;
                {numberWithDelimiter(score)}
                earned
              </h1>
            </>
          ) : (
            <h1 className="content-title">Who wants to be a millionaire?</h1>
          )}

          <Button
            name={buttonName}
            onClick={onStart}
          />
        </div>
      </div>
    </div>
  );
};

SalutePage.propTypes = {
  mode: T.string.isRequired,
  score: T.string.isRequired,
  onStart: T.func.isRequired,
};

export default SalutePage;
