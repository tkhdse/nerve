import GenerateClouds from '../components/Clouds';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useWindowDimensions from '../utils/windowDims';


const Home = () => {
    const { width, height } = useWindowDimensions();
    return (
        <div>
        <Navbar />

        <GenerateClouds width={width} height={height*0.8} />
        <div class="text-6xl w-[60%] h-[60vh] text-center ml-[20%] mt-[10%] z-10">
          The Future of Energy-Efficient Computing
        </div>
  
        <Footer />
      </div>
    )
}


export default Home;