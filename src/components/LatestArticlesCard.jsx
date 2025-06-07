const LatestArticlesCard = ({
  image,
  imageAlt,
  author,
  heading,
  description,
}) => {
  return (
    <div className="latest-articles__card">
      <img src={image} alt={imageAlt} className="latest-articles__card-img" />

      <div className="latest-articles__card-content">
        <p className="latest-articles__card-author">{author}</p>

        <h3 className="latest-articles__card-heading">{heading}</h3>

        <p className="latest-articles__card-description">{description}</p>
      </div>
    </div>
  );
};

export default LatestArticlesCard;
