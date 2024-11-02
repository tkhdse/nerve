// import logo from '../assets/Nerve.png'
import logo_cream from '../assets/Nerve_cream.png'
import logo_white from '../assets/Nerve_white.png'
import logo_invert from "../assets/Nerve_invert.png"

const Logo = ({color, showText, textColor}) => {

    const pickColor = (color) => {
        if (color === 'white') {
            return logo_white
        } else if (color === 'cream') {
            return logo_cream
        } else if (color === 'black') {
            return logo_invert
        }
    }

    return (
        <div class="flex gap-1 p-2 select-none items-center">
            <img src={pickColor(color)} alt="logo" width="50px" height="50px"/>
            {showText && (
                <span class={`font-instrument ${textColor ? "text-white" : "text-black"} text-2xl pb-[5px]`}>nerve</span>
            )}
        </div>
    )
}

export default Logo;