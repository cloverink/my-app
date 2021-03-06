import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import PlaceholderImage from '../PlaceholderImage';

import classNames from 'classnames';

import './ResponsiveImage.scss';

export type ResponsiveImageType = {
  alt?: string;
  className?: string;
  imgRatio?: number;
  onClick?: MouseEventHandler<HTMLPictureElement>;
  src: string;
};

const ResponsiveImage: React.FC<ResponsiveImageType> = ({
  alt,
  className,
  imgRatio = 1,
  onClick,
  src
}) => {
  const ref = useRef<HTMLPictureElement>(null);
  const [isError, setIsError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [placeHolderRatio, setPlaceHolderRatio] = useState(1);
  const [containerMaxHeight, setContainerMaxHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = ref.current?.clientWidth;
      const height = width / imgRatio;
      setContainerMaxHeight(height);
      setPlaceHolderRatio(height / width);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
  }, [ref, imgRatio]);

  const onLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);
  const onError = useCallback(() => {
    setIsError(true);
  }, []);

  return (
    <picture
      ref={ref}
      className={classNames('picture', className)}
      style={isLoaded ? {} : { maxHeight: containerMaxHeight }}
      onClick={onClick}
    >
      {(!isLoaded || isError) && (
        <PlaceholderImage isStatic={isError} imgRatio={placeHolderRatio} />
      )}
      {!isError && (
        <img
          alt={alt}
          src={src}
          style={{ aspectRatio: imgRatio.toString() }}
          loading="lazy"
          onError={onError}
          onLoad={onLoad}
        />
      )}
    </picture>
  );
};

export default ResponsiveImage;
