import Banner from "../../component/Banner";
import Footer from "../../component/Footer";
import Freebook from "../../component/Freebook";
import Navbar from "../../component/Navbar";

function Home() {
  return (
    <>
      <div >
        <Navbar />
        <Banner />
        <Freebook/>
        <Footer/>
      </div>
    </>
  );
}

export default Home;
