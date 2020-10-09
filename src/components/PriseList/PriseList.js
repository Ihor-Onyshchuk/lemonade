import React from 'react'
import cx from 'classnames';
import T from 'prop-types';

import {numberWithDelimiter} from '../../utils';

import './PriseList.scss';

const PriseList = ({priseList, step}) => {
  return (
    <div className="prise-list">
      {priseList.map((prise, i) => (
        <div
          key={prise} 
          className={cx("prise-button", {
            'prise-button-earned': i < step,
            'prise-button-active': i === step
          })}
        >
          &#36;{numberWithDelimiter(prise)}
        </div>
      ))}
    </div>
  )
}

PriseList.propTypes = {
  priseList: T.array.isRequired,
  step: T.number.isRequired,
}

export default PriseList;
