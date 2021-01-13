import React from 'react';
import { shape, string } from 'prop-types';
import PropTypes from 'prop-types';

import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import css from './ListingPage.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const SectionTabInfo = props => {
  const { className, rootClassName, publicData } = props;
  const classes = classNames(rootClassName || css.root, className);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  if (publicData && publicData.editors_note) {
    const { editors_note, size_fit, details_care } = publicData;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="editor's note" {...a11yProps(0)} />
            <Tab label="size and fit" {...a11yProps(1)} />
            <Tab label="details and care" {...a11yProps(2)} />
            <Tab label="delivery and returns" {...a11yProps(3)} />
            <Tab label="reviews" {...a11yProps(4)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          {editors_note}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {size_fit}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {details_care}
        </TabPanel>
        <TabPanel value={value} index={3}></TabPanel>
        <TabPanel value={value} index={4}></TabPanel>
      </div>
    );
  } else {
    return null;
  }
};

SectionTabInfo.defaultProps = { className: null, rootClassName: null };

SectionTabInfo.propTypes = {
  className: string,
  rootClassName: string,
  publicData: shape({
    rules: string,
  }),
};

export default SectionTabInfo;
