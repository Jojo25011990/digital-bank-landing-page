import Button from './Button';
import Description from './Description';

const DigitalBanking = () => {
  return (
    // *** Digital Banking ***
    <section className="digital-banking">
      <div className="digital-banking__container">
        <h1 className="digital-banking__heading">
          Next generation digital banking
        </h1>

        <Description
          description={`Take your financial life online. Your Easybank account will be a
          one-stop shop for spending, saving, budgeting, investing, and much
          more.`}
        />

        <Button />
      </div>
      <img
        src="./images/image-mockups.png"
        alt="Background Mockups, Desktop Version"
        className="mobil-image"
      />
    </section>
    // *** End of Digital Banking ***
  );
};

export default DigitalBanking;
