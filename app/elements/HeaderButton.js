import React, { PropTypes } from 'react';
import { Button as ElementsButton } from 'react-native-elements';

import colors from '../constants/colors';

const HeaderButton = ({ title, color, backgroundColor, onPress }) => (
  <ElementsButton
    onPress={onPress}
    color={color}
    backgroundColor={backgroundColor}
    title={title}
  />
);

HeaderButton.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func
};

HeaderButton.defaultProps = {
  color: colors.DARK_BLUE,
  backgroundColor: 'white',
};

export default HeaderButton;