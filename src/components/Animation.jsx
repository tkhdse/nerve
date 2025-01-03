import React from "react";
import cloud from "../assets/cloud-translate.png"; 


const Cloud = ({x, y, size, z}) => {

    return (
        <img src={cloud} alt="cloud" width={size} height={size} style={{position: "absolute", opacity: 0.3, top: y, left: x}}/>
    )
}

const GenerateClouds = ({width, height}) => {
    const numClouds = 7;

    const clouds = [];
    const numSection = width/numClouds;
    for (let i = 0; i < numClouds; i++) {
        const size = Math.random() * 100 + 50
        const x = Math.random() * (numSection-50) + i*numSection+50;
        const y = Math.random() * height + 100;

        clouds.push({size: size, x:x, y:y});
    }

    return (
        <div className="absolute w-[100%] h-[80%]">
            { clouds.map((cloud, i) => (
                <Cloud key={i} x={cloud.x} y={cloud.y} size={cloud.size}/>
            ))}
        </div>
    )
}

export default GenerateClouds;