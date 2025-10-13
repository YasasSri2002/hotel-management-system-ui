import Link from "next/link";
import DynamicIcon from "../utill/DynamicIcons";

export default function FooterSection(){
    return(
        <div className="bg-slate-950">
        <div className=" text-white w-full h-full pt-5 px-5 grid  sm:grid-cols-4 gap-5">
            
            <div className="sm:col-1 gap-5 grid" id="about">
                <h1 className="text-md sm:text-lg">Urbanite Hotel</h1>
                <p className="text-wrap text-sm sm:text- text-gray-400">Experience luxury and comfort in the heart of the city. Your premier destination for exceptional hospitality since 1973.</p>
                <div className="flex justify-center space-x-5">
                    <button className="w-10 h-10">
                        <Link href="">
                            <DynamicIcon name="IoLogoFacebook"></DynamicIcon>
                        </Link>
                    </button>
                    <button className="w-10 h-10">
                        <Link href="">
                            <DynamicIcon name="BsTwitterX"></DynamicIcon>
                        </Link>
                    </button>
                    <button className="w-10 h-10">
                        <Link href="">
                            <DynamicIcon name="FiInstagram"></DynamicIcon>
                        </Link>
                    </button>
                    <button className="w-10 h-10">
                        <Link href="">
                            <DynamicIcon name="IoLogoLinkedin"></DynamicIcon>
                        </Link>
                    </button>
                </div>
            </div>

            <div id="quick-links " className="sm:col-2 grid gap-5">
                <h2>Quick Links</h2>
                <ul className="grid gap-2 text-gray-400">
                        <li><Link href="/home">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/rooms">Rooms</Link></li>
                        <li><Link href="/amenities">Amenities</Link></li>
                        <li><Link href="#contactUs">Contact us</Link></li>
                    </ul>
            </div>
            <div id="services" className="sm:col-3 grid gap-5">
                <h2>Services</h2>
                <ul className="grid gap-2 text-gray-400">
                        <li><Link href="/home">Room Service</Link></li>
                        <li><Link href="/about">Concierge</Link></li>
                        <li><Link href="/rooms">Valet Parking</Link></li>
                        <li><Link href="/amenities">Airport Transfer</Link></li>
                        <li><Link href="#contactUs">Event Planning</Link></li> 
                    </ul>
            </div>
            <div className="sm:col-4 grid ">
                <h1>Contact Info</h1>
                <ul className="grid gap-2 text-gray-400">
                        <li>123 Luxury Avenue Downtown District New York, NY 10001</li>
                        <li>Phone: (+94) 70 - 550 - 500</li>
                        <li>Email: info@urbanite.com</li>
                </ul>
            </div>
        </div>
        <div className="w-full grid justify-items-center p-5 gap-5">
            <div className="w-[99%] h-0.5 bg-white/60"></div>
            <div className="grid sm:flex sm:justify-between text-white w-full">
                    <p>&copy; 2024 Grand Hotel. All rights reserved.</p>
                <div className="flex space-x-5">
                    <h2>Privacy Policy </h2>
                    <h2>Terms of Service</h2>
                    <h2>Cookie Policy</h2>
                </div>
            </div>
        </div>
        
        </div>
    );
}