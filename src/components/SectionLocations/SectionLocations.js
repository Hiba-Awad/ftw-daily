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


class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, id) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="ProfilePage" params={{ id }} className={css.location}>
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
        {locationLink(
          'harper the label',
          harperImage,
          '601ca574-ef5b-4414-838b-e647bed770b8'
        )}
        <div className={css.subtext}>
        <FormattedMessage id="SectionLocations.harperthelabel" />
        </div>
        </div>

        <div className={css.designers}>
        {locationLink(
          'ava james nyc',
          avajamesnycImage,
          '5fff3aba-cdb2-4208-8213-aba6df523dd6'
        )}
        <div className={css.subtext}>
        <FormattedMessage id="SectionLocations.avajamesnyc" />
        </div>
        </div>

        <div className={css.designers}>
        {locationLink(
          'la femme apero',
          lafemmeaperoImage,
          '601c33dd-9f09-4605-a781-72bab94f7581'
        )}
        <div className={css.subtext}>
        <FormattedMessage id="SectionLocations.lafemmeapero" />
        </div>
        </div>

        <div className={css.designers}>
        {locationLink(
          'marco baga',
          marcobagaImage,
          '601171c1-ec55-401c-bd36-e2e7f00f2ec0'
          )}
        <div className={css.subtext}>
        <FormattedMessage id="SectionLocations.marcobaga" />
        </div>
        </div>

        <div className={css.designers}>
        {locationLink(
          'ouisa',
          ouisaImage,
          '6011c643-7a8d-47de-8982-83119fe8b410'
        )}
        <div className={css.subtext}>
        <FormattedMessage id="SectionLocations.ouisa" />
        </div>
        </div>

        <div className={css.designers}>
        {locationLink(
          'primo luxe',
          primoluxeImage,
          '601d915c-b066-4513-b41f-2e3abe66888a'
        )}
        <div className={css.subtext}>
        <FormattedMessage id="SectionLocations.primoluxe" />
        </div>
        </div>

        <div className={css.designers}>
        {locationLink(
          'formerly yan',
          formerlyyanImage,
          '601187f0-45d8-4671-b5cf-5550e2b437ad'
)}
        <div className={css.subtext}>
        <FormattedMessage id="SectionLocations.formerlyyan" />
        </div>
        </div>




        <div className={css.designers}>
        {locationLink(
          'arteaga',
          arteagaImage,
          '601190c7-6359-4f9e-9af7-8af74dab50ee'
        )}
        <div className={css.subtext}>
        <FormattedMessage id="SectionLocations.arteaga" />
        </div>
        </div>

        <div className={css.designers}>
        {locationLink(
          'spinoza',
          spinozaImage,
          '6011af1f-2236-43ef-a77a-b94f771a3999'
        )}
        <div className={css.subtext}>
        <FormattedMessage id="SectionLocations.spinoza" />
        </div>
        </div>

        <div className={css.designers}>
        {locationLink(
          'rhonda cole',
          rhondacoleImage,
          '6011badf-0453-4c2a-95da-c65191b99371'
        )}
        <div className={css.subtext}>
        <FormattedMessage id="SectionLocations.rhondacole" />
        </div>
        </div>


 

        <div className={css.designers}>
        {locationLink(
          'sylth virago',
          sylthviragoImage,
          '601c4afa-f72b-4f42-96eb-cd0f3f6ddfa6'
        )}
        <div className={css.subtext}>
        <FormattedMessage id="SectionLocations.sylthvirago" />
        </div>
        </div>

        <div className={css.designers}>
        {locationLink(
          'metal & stone',
          metalandstoneImage,
          '600716f5-356d-433d-a9f2-2e0950504ad6'
)}
        <div className={css.subtext}>
        <FormattedMessage id="SectionLocations.metalandstone" />
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
