export type SourceType = Pick<
  React.SourceHTMLAttributes<HTMLSourceElement>,
  'type' | 'srcSet' | 'media'
>;

const Source: React.FC<SourceType> = ({ srcSet, media, type }) => {
  return <source srcSet={srcSet} media={media} type={type} />;
};

export default Source;
