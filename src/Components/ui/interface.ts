import type { ButtonHTMLAttributes } from 'react';
import type { ButtonTypes } from '../../data/Enums';
import type { ButtonChildren } from '../../data/Types';

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
