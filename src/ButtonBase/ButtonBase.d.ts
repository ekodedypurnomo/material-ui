import * as React from 'react';
import { StyledComponent } from '..';

export type ButtonBaseProps = {
  centerRipple?: boolean;
  component?: React.ReactType;
  disableRipple?: boolean;
  focusRipple?: boolean;
  keyboardFocusedClassName?: string;
  onKeyboardFocus?: React.FocusEventHandler<any>;
  rootRef?: React.Ref<any>;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

declare const ButtonBase: StyledComponent<ButtonBaseProps>;

export default ButtonBase;
