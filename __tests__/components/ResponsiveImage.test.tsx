import { render, fireEvent } from '@testing-library/react';
import { ResponsiveImage } from 'components';

describe('ResponsiveImage', () => {
  it('should renders ResponsiveImage', () => {
    render(<ResponsiveImage src="https://dummyimage.com/10x10" />);

    const picture = document.querySelector('picture');
    const imgPlaceholder = document.querySelector('.image-placeholder');
    const svg = document.querySelector('.image-placeholder svg');
    const img = document.querySelector('img');

    expect(picture).toHaveClass('picture');
    expect(imgPlaceholder).toBeInTheDocument();
    expect(svg).toHaveClass('image-placeholder__logo');
    expect(img).toHaveAttribute('src', 'https://dummyimage.com/10x10');

    fireEvent.load(img);

    expect(imgPlaceholder).not.toBeInTheDocument();
  });

  it('should show a placeholder image when an error occurs.', () => {
    render(<ResponsiveImage src="https://dummyimage.com/10x10" />);

    const img = document.querySelector('img');
    const imgPlaceholder = document.querySelector('.image-placeholder');
    const svg = document.querySelector('.image-placeholder svg');

    fireEvent.error(img);

    expect(imgPlaceholder).toBeInTheDocument();
    expect(svg).toHaveClass('image-placeholder__logo is-static');
  });
});
