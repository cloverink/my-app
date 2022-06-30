import React, { MouseEventHandler } from 'react';
import Source, { SourceType } from './Source';
import './ResponsiveImage.scss';

export type ResponsiveImageType = {
  onClick?: MouseEventHandler<HTMLPictureElement>;
  sources?: SourceType[];
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  imgRatio?: number | string;
  className?: string;
};

const ResponsiveImage: React.FC<ResponsiveImageType> = ({
  sources,
  alt,
  src,
  className = '',
  onClick,
  imgRatio = 1
}) => {
  const imageStyle: React.CSSProperties = {
    aspectRatio: imgRatio.toString()
  };

  return (
    <picture
      className={`responsive-image-container ${className}`}
      onClick={onClick}
    >
      {sources &&
        React.Children.toArray(sources.map((source) => <Source {...source} />))}
      <img alt={alt} src={src || sources?.[0].srcSet} style={imageStyle} />
    </picture>
  );
};

export default ResponsiveImage;
