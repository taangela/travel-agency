import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';
import {formatTime} from '../../../utils/formatTime';

class HappyHourAd extends React.Component {
  constructor() {
    super();

    /* run this.forceUpdate() every second */
    setInterval(() => {this.forceUpdate(); }, 1000);
  }

  getCountdownTime() {
    const CurrentDate = new Date();
    const nextNoon = new Date(Date.UTC(CurrentDate.getUTCFullYear(), CurrentDate.getUTCMonth(), CurrentDate.getUTCDate(), 12, 0, 0, 0));

    if (CurrentDate.getUTCHours() >= 12) {
      nextNoon.setUTCDate(CurrentDate.getUTCDate() + 1);
    }

    return Math.round((nextNoon.getTime() - CurrentDate.getTime()) / 1000);
  }

  render () {
    const countdown = this.getCountdownTime();

    const {title, promoDescription} = this.props;
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>{(countdown > 23 * 60 * 60) ? promoDescription : formatTime(countdown)}</div>
      </div>
    );
  }
}

HappyHourAd.propTypes = {
  title: PropTypes.string,
  promoDescription: PropTypes.string,
};

export default HappyHourAd;