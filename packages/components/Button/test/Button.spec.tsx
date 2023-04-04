import { render } from '@testing-library/react';
import Button from '../src/Button';

describe('Button', () => {
  it('Should be render Button component', () => {
    const sut = render(<Button>Hello world</Button>);
    const label = sut.getByText('Hello world');

    expect(label).toBeInTheDocument();
  });
});
