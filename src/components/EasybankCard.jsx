const EasybankCard = ({ icon, heading, description }) => {
  return (
    <div className="why-easybank__card">
      <img src={icon} alt={heading} className="why-easybank__card-icon" />

      <div className="why-easybank__card-content">
        <h3 className="why-easybank__card-heading">{heading}</h3>

        <p className="why-easybank__card-description">{description}</p>
      </div>
    </div>
  );
};

export default EasybankCard;
