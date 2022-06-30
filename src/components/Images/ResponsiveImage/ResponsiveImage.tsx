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
  onClick?: MouseEventHandler<HTMLPictureElement>;
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  imgRatio?: number;
  className?: string;
};

const ResponsiveImage: React.FC<ResponsiveImageType> = ({
  alt,
  src,
  className = '',
  onClick,
  imgRatio = 1
}) => {
  const ref = useRef<HTMLPictureElement>();
  const [isError, setIsError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [placeHolderRatio, setPlaceHolderRatio] = useState(1);
  const [containerMaxHeight, setContainerMaxHeight] = useState(0);

  useEffect(() => {
    const width = ref.current?.clientWidth;
    const height = width / imgRatio;
    setContainerMaxHeight(height);
    setPlaceHolderRatio(height / width);
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
      style={{ maxHeight: containerMaxHeight }}
      onClick={onClick}
    >
      {!isLoaded && (
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
