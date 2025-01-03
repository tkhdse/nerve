import Logo from "./Logo";

const Footer = () => {
    return (
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
                    <a href="/" class="cursor-pointer hover:text-white transition-colors duration-300">Home</a>
                  </li>
                  <li>
                    <a href="/blog" class="cursor-pointer hover:text-white transition-colors duration-300">Blog</a>
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
    )
}

export default Footer;