import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import avajamesnycImage from './images/avajamesnyc.jpg';
import marcobagaImage from './images/marcobaga.jpg';
import metalandstoneImage from './images/metalandstone.jpg';
import formerlyyanImage from './images/formerlyyan.jpg';
import ouisaImage from './images/ouisa.jpg';
import arteagaImage from './images/arteaga.jpg';
import rhondacoleImage from './images/rhondacole.jpg';
import spinozaImage from './images/spinoza.jpg';
import lafemmeaperoImage from './images/lafemmeapero.jpg';
import sylthviragoImage from './images/sylthvirago.png';
import harperImage from './images/harper.jpg';
import primoluxeImage from './images/primoluxe.jpg';
import noyetteImage from './images/noyette.png';
import alchemydetroitImage from './images/alchemydetroit.jpg';
import yeonImage from './images/yeon.jpg';
import hmeteImage from './images/hmete.png';
import allyImage from './images/ally.png';
import almostthereImage from './images/almostthere.jpg';
import sophieblakeImage from './images/sophieblake.jpg';
import zaimeImage from './images/zaime.png';



class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, url_name) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="ProfileBrandPage" params={{ name: url_name }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>

      <div className={css.locations}>
        <div className={css.designers}>
          {locationLink('harper the label', harperImage, 'harper-the-label')}
          <div className={css.subtext}>
            <FormattedMessage id="SectionLocations.harperthelabel" />
          </div>
        </div>

        <div className={css.designers}>
          {locationLink('ava james nyc', avajamesnycImage, 'ava-james-nyc')}
          <div className={css.subtext}>
            <FormattedMessage id="SectionLocations.avajamesnyc" />
          </div>
        </div>

        <div className={css.designers}>
          {locationLink('la femme apero', lafemmeaperoImage, 'la-femme-apero')}
          <div className={css.subtext}>
            <FormattedMessage id="SectionLocations.lafemmeapero" />
          </div>
        </div>

        <div className={css.designers}>
          {locationLink('marco baga', marcobagaImage, 'marco-baga')}
          <div className={css.subtext}>
            <FormattedMessage id="SectionLocations.marcobaga" />
          </div>
        </div>

        <div className={css.designers}>
          {locationLink('ouisa', ouisaImage, 'ouisa')}
          <div className={css.subtext}>
            <FormattedMessage id="SectionLocations.ouisa" />
          </div>
        </div>

        <div className={css.designers}>
          {locationLink('primo luxe', primoluxeImage, 'primo-luxe')}
          <div className={css.subtext}>
            <FormattedMessage id="SectionLocations.primoluxe" />
          </div>
        </div>

        <div className={css.designers}>
          {locationLink('formerly yan', formerlyyanImage, 'formerly-yan')}
          <div className={css.subtext}>
            <FormattedMessage id="SectionLocations.formerlyyan" />
          </div>
        </div>

        <div className={css.designers}>
          {locationLink('arteaga', arteagaImage, 'arteaga')}
          <div className={css.subtext}>
            <FormattedMessage id="SectionLocations.arteaga" />
          </div>
        </div>

        <div className={css.designers}>
          {locationLink('spinoza', spinozaImage, 'spinoza')}
          <div className={css.subtext}>
            <FormattedMessage id="SectionLocations.spinoza" />
          </div>
        </div>

        <div className={css.designers}>
          {locationLink('rhonda cole', rhondacoleImage, 'rhonda-cole')}
          <div className={css.subtext}>
            <FormattedMessage id="SectionLocations.rhondacole" />
          </div>
        </div>

        <div className={css.designers}>
          {locationLink('sylth virago', sylthviragoImage, 'sylth-virago')}
          <div className={css.subtext}>
            <FormattedMessage id="SectionLocations.sylthvirago" />
          </div>
        </div>

        <div className={css.designers}>
          {locationLink('metal & stone', metalandstoneImage, 'metal-stone')}
          <div className={css.subtext}>
            <FormattedMessage id="SectionLocations.metalandstone" />
          </div>
        </div>

        <div className={css.designers}>
          {locationLink('noyette', noyetteImage, 'noyette')}
          <div className={css.subtext}>
            <FormattedMessage id="SectionLocations.noyette" />
          </div>
        </div>

        <div className={css.designers}>
          {locationLink('alchemy detroit', alchemydetroitImage, 'alchemy-detroit')}
          <div className={css.subtext}>
            <FormattedMessage id="SectionLocations.alchemydetroit" />
          </div>
        </div>

        <div className={css.designers}>
          {locationLink('yeon', yeonImage, 'yeon')}
          <div className={css.subtext}>
            <FormattedMessage id="SectionLocations.yeon" />
          </div>
        </div>

        <div className={css.designers}>
          {locationLink('hmete', hmeteImage, 'hmete')}
          <div className={css.subtext}>
            <FormattedMessage id="SectionLocations.hmete" />
          </div>
        </div>

        <div className={css.designers}>
          {locationLink('ally', allyImage, 'ally')}
          <div className={css.subtext}>
            <FormattedMessage id="SectionLocations.ally" />
          </div>
        </div>

        <div className={css.designers}>
          {locationLink('almost there', almostthereImage, 'almost there')}
          <div className={css.subtext}>
            <FormattedMessage id="SectionLocations.almostthere" />
          </div>
        </div>

        <div className={css.designers}>
          {locationLink('sophie blake', sophieblakeImage, 'sophie blake')}
          <div className={css.subtext}>
            <FormattedMessage id="SectionLocations.sophieblake" />
          </div>
        </div>

        <div className={css.designers}>
          {locationLink('zaime', zaimeImage, 'zaime')}
          <div className={css.subtext}>
            <FormattedMessage id="SectionLocations.zaime" />
          </div>
        </div>


      </div>
    </div>



  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
