import React, {useState, useEffect} from "react";
import cloud from "../assets/cloud-translate.png"; 
import useWindowDimensions from "../utils/windowDims";


const Cloud = ({x, y, size, z}) => {
    const [pos, setPos] = useState(x);
    const [speed, setSpeed] = useState(Math.random() * (2 - 0.5) + 0.5);
    const dims = useWindowDimensions();

    useEffect(() => {
        if (pos > -200){
            const interval = setInterval(() => {
                setPos((prv) => {
                    if (prv <= -100) {
                        setSpeed(Math.random() * (1) + 0.25);
                        return dims.width;
                    }
                    return prv-speed;

                })
            }, 20);
            return () => clearInterval(interval);
        }
    }, [pos, dims, speed]);


    return (
        <img src={cloud} alt="cloud" width={size} height={size} style={{position: "absolute", opacity: 0.3, top: y, left: pos}}/>
    )
}

const GenerateClouds = ({width, height}) => {
    const numClouds = 7;

    const clouds = [];
    const numSection = width/numClouds;
    for (let i = 0; i < numClouds; i++) {
        const size = Math.random() * 100 + 50
        const x = Math.random() * (numSection-50) + i*numSection+50;
        const y1 = Math.random() * (height/2 - 400) + 100;
        const y2 = Math.random() * (height * 0.4) + height/2;
        
        clouds.push({size: size, x:x, y1:y1, y2:y2});
    }

    return (
        <div className="absolute w-[100%] h-[80%]">
            { clouds.map((cloud, i) => (
                <Cloud key={i} x={cloud.x} y={i % 2 === 1 ? cloud.y1 : cloud.y2} size={cloud.size}/>
            ))}
        </div>
    )
}

export default GenerateClouds;