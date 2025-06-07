import DigitalBanking from './DigitalBanking';
import LatestArticles from './LatestArticles';
import WhyEasybank from './WhyEasybank';

const Main = () => {
  return (
    // *** Main ***
    <main className="main">
      <DigitalBanking />
      <WhyEasybank />
      <LatestArticles />
    </main>
    // *** End of Main ***
  );
};

export default Main;
