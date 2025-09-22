export default function AboutSection(){
    return(
        <div className="
        bg-gradient-to-b 
            from-transparent from-0% 
            via-gray-300/40 via-95% 
            to-transparent to-100%
        ">
            <div className="grid gap-5 justify-items-center content-center p-10 ">
                <h1 className="text-4xl text-black/90">Excellence in Hospitality</h1>
                <p className="text-xl text-center text-gray-500">
                    For over 50 years, Grand Hotel has been synonymous with luxury, comfort, and exceptional service. Located in the heart of the city, we offer an unparalleled experience for both business and leisure travelers.
                </p>
            </div>
           <div className="grid sm:grid-cols-2">
            <div className="col-1 gap-5">
                 <div className="grid gap-5 justify-items-start content-center p-5 mt-5 mb-10">
                    <h1 className="text-4xl text-black/90">Our Story</h1>
                    <p className="text-lg  text-gray-500">
                        Founded in 1973, Grand Hotel has been a beacon of hospitality excellence. What started as a family-owned boutique hotel has grown into a world-class destination while maintaining our commitment to personalized service and attention to detail.
                    </p>
                </div>
                <div className="grid gap-5 justify-items-start content-center p-5">
                    <h1 className="text-4xl text-black/90">Our Mission</h1>
                    <p className="text-lg  text-gray-500">
                        We strive to create memorable experiences that exceed our guests' expectations. Through our dedicated team, luxurious amenities, and commitment to sustainability, we aim to be more than just a place to stay – we're your home away from home.
                    </p>
                </div>
            </div>
            <div className="col-2">
                
            </div>
           </div>
        </div>
    );
}