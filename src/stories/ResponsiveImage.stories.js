/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import PageResponsiveImage from '../examples/responsive-image';

const story = {
  title: 'Components/ResponsiveImage',
  component: PageResponsiveImage,
  argTypes: {
    imgRatio: {
      options: ['1/1', '3/2', '4/3', '16/9'],
      control: { type: 'radio' }
    }
  }
};
export default story;

const Template = (args) => <PageResponsiveImage {...args} />;

export const singleImage = Template.bind({});
singleImage.args = {
  src: 'https://dummyimage.com/600x600/DDDDDD/000000',
  imgRatio: '1/1'
};

export const multipleSources = Template.bind({});
multipleSources.args = {
  sources: [
    {
      srcSet: 'https://dummyimage.com/600x400/CCCCCC/000000&text=S',
      media: '(max-width: 600px)'
    },
    {
      srcSet: 'https://dummyimage.com/800x600/CCCCCC/000000&text=M',
      media: '(min-width: 601px)'
    }
  ],
  imgRatio: '3/2'
};
