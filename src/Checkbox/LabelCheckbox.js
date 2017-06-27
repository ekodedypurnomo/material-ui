// @flow

import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import withSwitchLabel from '../internal/withSwitchLabel';

const LabelCheckbox = withSwitchLabel(Checkbox);

export const LabelCheckboxDocs = () => <span />;

LabelCheckboxDocs.propTypes = {
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object.isRequired,
  /**
   * If `true`, the control will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The text to be used in an enclosing label element.
   */
  label: PropTypes.node,
  /**
   * The className to be used in an enclosing label element.
   */
  labelClassName: PropTypes.string,
};

export default LabelCheckbox;
