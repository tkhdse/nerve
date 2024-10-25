import logo from '../assets/Nerve.png'

const Logo = () => {

    return (
        <div class="flex gap-1 p-2 select-none">
            <img src={logo} alt="logo" width="50px" height="50px"/>
            <span class="font-instrument">nerve</span>
        </div>
    )
}

export default Logo;