import { ResponsiveImage } from '../components';

const PageResponsiveImage = (props) => {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '600px'
      }}
    >
      <ResponsiveImage {...props} />
    </div>
  );
};

export default PageResponsiveImage;
