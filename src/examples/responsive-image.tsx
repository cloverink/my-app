import { ResponsiveImage } from '../components';

const PageResponsiveImage = (props) => {
  return (
    <div className="max-w-screen-xl">
      <ResponsiveImage {...props} />
    </div>
  );
};

export default PageResponsiveImage;
