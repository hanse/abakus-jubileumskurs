import React, { PropTypes } from 'react';

import { Icon as ElementsIcon } from 'react-native-elements';

import icons from '../constants/icons';

const Icon = ({icon}) => (
  <Icon name={icon.name}
        type={icon.type} />
);

Icon.propTypes = {
  icon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string
  })
};

Icon.defaultProps = {
  icon: icons.BEER
};

export default Icon;
