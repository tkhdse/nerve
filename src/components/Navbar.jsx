import { NavLink } from "react-router-dom";
import Logo from './Logo';

const Navbar = () => {

    return (
        <nav class="flex justify-between items-center">
            <div class="text-center">
                <Logo color={"cream"} showText={true} textColor={false}/>
            </div>

            <div class="mr-[10%] flex space-x-16">
                <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-400 border-b-2" : "text-gray-700 hover:text-blue-400 transition duration-300"}>
                    Home
                </NavLink>

                <NavLink to="/blog" className={({ isActive }) => isActive ? "text-blue-400 border-b-2" : "text-gray-700 hover:text-blue-400 transition duration-300 "}>
                    Blog
                </NavLink>

            </div>

        </nav>
    )
};

export default Navbar;