import React from 'react'
import cx from 'classnames';
import {numberWithDelimiter} from '../../utils';

import './PriseList.scss';

const PriseList = ({priseList, step}) => {
  return (
    <div className="prise__list">
      {priseList.map((prise, i) => (
        <div
          key={prise} 
          className={cx("prise__button", {
            prise__button_earned: i < step,
            prise__button_active: i === step
          })}
        >
          &#36;{numberWithDelimiter(prise)}
        </div>
      ))}
    </div>
  )
}

export default PriseList;