import { ComponentPropsWithoutRef, MouseEvent } from 'react';
import concatClassNames from '@ladder-ui/utils/lib/concatClassNames';

export type TButtonVariants = 'natural' | 'no-border' | 'as-link' | 'outline';

export interface IButton extends ComponentPropsWithoutRef<'button'> {
  activateLibraryClasses?: boolean;
  look?: TButtonVariants;
  fluid?: boolean;
}

export default function Button({
  children,
  className,
  style,
  activateLibraryClasses = true,
  fluid = false,
  id,
  look = 'natural',
  onClick,
  ...props
}: IButton) {
  const componentBaseClass = 'lui-button';
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  return (
    <button
      id={id}
      onClick={handleClick}
      className={concatClassNames([
        activateLibraryClasses ? componentBaseClass : '',
        className as string,
        `${componentBaseClass}--${look}`,
      ])}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
}
