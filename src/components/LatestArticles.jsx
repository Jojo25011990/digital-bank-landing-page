import HeadingSecondary from './HeadingSecondary';
import LatestArticlesCard from './LatestArticlesCard';

const LatestArticles = () => {
  return (
    //   *** Latest Articles ***
    <section className="latest-articles">
      <div className="latest-articles__container">
        <HeadingSecondary title={`Latest Articles`} />

        <div className="latest-articles__cards">
          <LatestArticlesCard
            image={'./images/image-currency.jpg'}
            imageAlt={'Currency'}
            author={'By Claire Robinson'}
            heading={'Receive money in my currency with no fees'}
            description={` The world is getting smaller and we’re becoming more mobile.So why should you be forced to only receive money in a single …`}
          />

          <LatestArticlesCard
            image={'./images/image-restaurant.jpg'}
            imageAlt={'Restaurant'}
            author={'By Wilson Hutton'}
            heading={'Treat yourself without worrying about money'}
            description={`Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ... `}
          />

          <LatestArticlesCard
            image={'./images/image-plane.jpg'}
            imageAlt={'Plane'}
            author={'By Wilson Hutton'}
            heading={'Take your Easybank card wherever you go'}
            description={`We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ... `}
          />

          <LatestArticlesCard
            image={'./images/image-confetti.jpg'}
            imageAlt={'Confetti'}
            author={'By Claire Robinson'}
            heading={'Our invite-only Beta accounts are now live!'}
            description={`After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site  ... `}
          />
        </div>
      </div>
    </section>
    //   *** End of Latest Articles ***
  );
};

export default LatestArticles;
