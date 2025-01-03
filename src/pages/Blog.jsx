import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Blog = () => {
    return (
        <div>
            <Navbar />
            <div class=" w-[60%] h-[55vh] mt-[10%] mb-[5%] ml-[20%]">
                <div class="text-6xl text-center mb-[50px]">
                    What's new with Nerve?
                </div>
                {/* <div class="bg-white rounded-md border-gray-600 border-[2px] ml-[20%] w-[60%]">
                    yo
                </div> */}
            </div>
            <Footer />
        </div>
    )
}

export default Blog