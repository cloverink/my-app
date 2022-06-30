import { ResponsiveImage } from '../components';

const style = {
  width: '100%',
  maxWidth: '600px'
};

const PageResponsiveImage = (props) => {
  return (
    <div style={style}>
      <ResponsiveImage {...props} />
    </div>
  );
};

export default PageResponsiveImage;
