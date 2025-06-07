import Description from './Description';
import EasybankCard from './EasybankCard';
import HeadingSecondary from './HeadingSecondary';

const WhyEasybank = () => {
  return (
    // *** Why Easybank ***
    <section className="why-easybank">
      <div className="why-easybank__container">
        <div className="why-easybank__content">
          <HeadingSecondary title={`Why choose Easybank`} />

          <Description
            description={`We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.`}
          />
        </div>

        <div className="why-easybank__cards">
          <EasybankCard
            icon={'./images/icon-online.svg'}
            heading={'Online Banking'}
            description={`Our modern web and mobile applications allow you to keep track of your
          finances wherever you are in the world.`}
          />

          <EasybankCard
            icon={'./images/icon-budgeting.svg'}
            heading={'Simple Budgeting'}
            description={`See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.`}
          />

          <EasybankCard
            icon={'./images/icon-onboarding.svg'}
            heading={'Fast Onboarding'}
            description={`We don’t do branches. Open your account in minutes online and start taking control of your finances right away.`}
          />

          <EasybankCard
            icon={'./images/icon-api.svg'}
            heading={'Open Api'}
            description={`Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.`}
          />
        </div>
      </div>
    </section>
    // *** End of Why Easybank ***
  );
};

export default WhyEasybank;
