import { render } from '@testing-library/react';
import { ResponsiveImage } from 'components';

describe('ResponsiveImage', () => {
  it('should renders ResponsiveImage', async () => {
    const { findByAltText } = render(
      <ResponsiveImage src="https://dummyimage.com/10x10" alt="example-image" />
    );
    const img = await findByAltText('example-image');
    expect(img).toHaveAttribute('src', 'https://dummyimage.com/10x10');
  });

  it('should renders Source of ResponsiveImage', () => {
    const sourceSet = [
      {
        srcSet: 'https://dummyimage.com/20x20',
        media: '(max-width: 600px)'
      }
    ];

    render(
      <ResponsiveImage
        className="example-classname"
        sources={sourceSet}
        alt="example-image"
      />
    );

    const picture = document.querySelector('picture');
    const img = document.querySelector('img');
    const source = document.querySelector('source');

    expect(picture).toHaveClass('responsive-image-container example-classname');
    expect(img).toHaveAttribute('src', 'https://dummyimage.com/20x20');
    expect(source).toHaveAttribute('srcset', 'https://dummyimage.com/20x20');
    expect(source).toHaveAttribute('media', '(max-width: 600px)');
  });
});
