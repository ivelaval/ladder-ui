import { ButtonHTMLAttributes, ReactNode, CSSProperties } from 'react';
import './Button.scss';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Children to apply to element
   */
  children?: ReactNode;
  /**
   * Custom class names or classes from css frameworks
   */
  className?: string;
  /**
   * Label of button and this can alive with their children
   */
  label?: string;
  /**
   * Active default class fof buttons in @ladder/ui
   */
  activateLibraryClasses?: boolean;
  /**
   * Apply custom styles to the styles property
   */
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

export default function Button({
  children,
  className,
  style,
  label,
  activateLibraryClasses = true,
  id,
  ...rest
}: IButton) {
  return (
    <button
      id={id}
      className={concatClassNames([
        activateLibraryClasses ? 'mfui-button' : '',
        className as string,
      ])}
      style={style}
      {...rest}
    >
      {children} {label}
    </button>
  );
}
