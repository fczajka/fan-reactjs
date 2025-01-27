import type { ButtonTypes } from '@enums';
import type { ButtonChildren } from '@types';
import type { ButtonHTMLAttributes, JSX } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ButtonChildren;
  callback: () => void;
  aria: string;
  type: ButtonTypes;
  myStyle: string;
  tabIndex: number;
}

export interface NotificationProps {
  isVisible: boolean;
  text: string;
}

export interface JSXChildren {
  children: JSX.Element[];
}
