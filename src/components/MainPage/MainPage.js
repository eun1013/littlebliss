import Banner from '../Banner/Banner';
import New from '../New/New';
import Best from '../Best/Best';
import Video from '../Video/Video';
import Sale from '../Sale/Sale';
import Footer from '../Footer/Footer';


const MainPage = ({handleAddToCart}) => {
  return (
    <div>
      <Banner/>
      <New  handleAddToCart={handleAddToCart}/>
      <Best/>
      <Video/>
      <Sale  handleAddToCart={handleAddToCart}/>
      <Footer/>
    </div>
  );
};

export default MainPage;