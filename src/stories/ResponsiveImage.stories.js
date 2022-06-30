import PageResponsiveImage from '../examples/responsive-image';

const story = {
  title: 'Components/Images/ResponsiveImage',
  component: PageResponsiveImage,
  argTypes: {
    imgRatio: {
      options: [1 / 1, 3 / 2, 4 / 3, 16 / 9],
      control: { type: 'radio' }
    }
  }
};
export default story;

const Template = (args) => <PageResponsiveImage {...args} />;

export const ResponsiveImage = Template.bind({});
ResponsiveImage.args = {
  src: 'https://picsum.photos/1600/900',
  imgRatio: 16 / 9,
  alt: 'lorem ipsum'
};
