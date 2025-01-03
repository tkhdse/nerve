import './App.css';
import { useState, useEffect } from 'react'
import Logo from './components/Logo';
import GenerateClouds from './components/Clouds';


const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); 
  }, []);

  return windowDimensions;
};

function App() {
  const { width, height } = useWindowDimensions();

  return (
    <div class="bg-[#FFFFF2] font-instrument  ">
      <div class="text-center">
        <Logo color={"cream"} showText={true} textColor={false}/>
      </div>

      <GenerateClouds width={width} height={height*0.8} />

      <div class="text-6xl w-[60%] h-[60vh] text-center ml-[20%] mt-[10%] z-10">
        The Future of Energy-Efficient Computing
      </div>

      <div class="bg-black w-[100%] h-[250px]">
        <div class="ml-[10%] w-[80%] absolute mt-10 flex justify-between select-none">
          <div class="">
            <Logo color={"white"} showText={true} textColor={true}/>
            <span class="ml-[10px] text-gray-400 ">Champaign, IL</span>
          </div>
          
          <div class="text-white m-2 w-25 mr-[5%] mt-[20px] flex gap-[125px]">
            <div>
            <span class="font-bold pb-2">Quick links</span>
              <ul class="list-disc ml-5 text-gray-400">
                <li>
                  <a href="/" target="_blank" class="cursor-pointer hover:text-white transition-colors duration-300">Home</a>
                </li>
              </ul>              
            </div>

            <div>
              <span class="font-bold pb-2">Contact us</span>
              <ul class="list-disc ml-5 text-gray-400">
                <li>
                  <a href="/" target="_blank" class="cursor-pointer hover:text-white transition-colors duration-300">Email</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/nervetel/about/?viewAsMember=true" target="_blank" rel="noreferrer" class="cursor-pointer hover:text-white transition-colors duration-300">
                    Linkedin
                  </a>
                </li>
              </ul>

            </div>

          </div>
        </div>

      </div>    


    </div>
  );
}

export default App;
