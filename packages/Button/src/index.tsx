import { ButtonHTMLAttributes, ReactNode, CSSProperties } from 'react';
import './Button.scss';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const concatClassNames = (classes: string | string[] | undefined) => {
  if (!classes) {
    return '';
  }

  if (Array.isArray(classes)) {
    return classes
      .filter((item: string) => !!item)
      .join(' ')
      .trim();
  } else {
    return classes;
  }
};

export default function Button({ children, className, style, ...rest }: IButton) {
  return (
    <button
      id="Hello"
      className={concatClassNames(['mfui-button', className as string])}
      style={style}
      {...rest}
    >
      {children}
    </button>
  );
}
