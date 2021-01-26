import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import selfie from './selfie.png';
import mailbox from './mailbox.png';
import shopping from './shopping.png';


import css from './SectionHowItWorks.css';

const SectionHowItWorks = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={css.sectionMainContainer}>
 
      <div className={css.title}>
        <FormattedMessage id="SectionHowItWorks.titleLineOne" />
        <br />
        <FormattedMessage id="SectionHowItWorks.titleLineTwo" />
      </div>


      <div className={css.steps}>
        <div className={css.step}>
          <div className={css.substep}>
          <img className={css.graphic} src={selfie} alt="selfie" />
          <h3 style={{fontWeight: 500, color: 'black'}}>
            <FormattedMessage id="SectionHowItWorks.part1Text"  />
          </h3>
          </div>
          <div className={css.substep}>
          <h3 className={css.arithmetic}>
            <FormattedMessage id="SectionHowItWorks.part2Text" />
          </h3>
          </div>
          <div className={css.substep}>
          <img className={css.graphic} src={mailbox} alt="mailbox" />
          <h3 style={{fontWeight: 500, color: 'black'}}>
            <FormattedMessage id="SectionHowItWorks.part3Text" />
          </h3>
          </div>
          <div className={css.substep}>
          <h3 className={css.arithmetic}>
            <FormattedMessage id="SectionHowItWorks.part4Text" />
          </h3>
          </div>
          <div className={css.substep}>
          <img className={css.graphic} src={shopping} alt="shopping" />
          <h3 style={{fontWeight: 500, color: 'black'}}>
            <FormattedMessage id="SectionHowItWorks.part5Text" />
          </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionHowItWorks.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionHowItWorks.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHowItWorks;
