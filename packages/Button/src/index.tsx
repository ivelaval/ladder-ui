import './Button.scss';
import { IButton } from './Button.interface';

export default function Button({ children }: IButton) {
  const admin = 'Hello';

  return (
    <button className='mlui-button'>
      {admin} This is a Button {children}
    </button>
  );
}
