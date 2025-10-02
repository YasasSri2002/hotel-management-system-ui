import DynamicIcon from "@/components/utill/DynamicIcons";

export default function ContactForm(){
    return(
        <>
        <div className="mb-5 w-dvw  sm:w-full ">
            <h1 className="text-black/70 text-xl">Send us message</h1>
            <div className="w-dvw sm:w-full sm:h-full mt-10">
                <div className="flex  justify-evenly space-x-2 sm:space-x-5 ">
                    <div className="grid ">
                        <label htmlFor="firstName" className="myLabelClass ml-1">First name</label>
                        <input type="text" name="firstName" id="firstName" className="myInputClass"
                        placeholder="John"
                        />
                    </div>
                    <div className="grid">
                        <label htmlFor="lastName" className="ml-1 myLabelClass">Last name</label>
                        <input type="text" name="lastName" id="lastName" className="myInputClass"
                        placeholder="wick"
                        />
                    </div>
                </div>
                <div className="mt-2 gap-y-5 grid">
                        <div className="grid">
                            <label htmlFor="email" className="ml-1 myLabelClass">Email Address</label>
                            <input type="text" name="email" id="email" className="myInputClass "
                            placeholder="johnwick@gmail.com"
                            />
                         </div>
                         <div className="grid">
                            <label htmlFor="contactPhone" className="ml-1 myLabelClass">Phone (Optional)</label>
                            <input type="text" name="contactPhone" id="contactPhone" className="myInputClass"
                            placeholder="(+94)74-465-6604"
                            />
                         </div>
                          <div className="grid">
                            <label htmlFor="subject" className="ml-1 myLabelClass">Subject</label>
                            <input type="text" name="subject" id="subject" className="myInputClass"
                            placeholder="Room Booking inquiry"
                            />
                         </div>
                </div>
                <div className="grid mt-5 gap-5">
                    <label htmlFor="description" className="myLabelClass ml-1">Description</label>
                    <textarea cols={50} name="description" id="description" 
                    className="focus:border-b-2 focus:outline-none focus:border-gray-400/80
                     border-b-2 py-1 px-5 bg-gray-400/15 rounded-2xl w-7/8 sm:w-full" style={{resize: "none"}}
                    placeholder="Add your comment here....."
                    >
                    
                    </textarea>
                </div>
                <button className="flex  items-center text-white bg-slate-950 p-2 rounded-xl m-5 ml-0
                hover:scale-101 hover:-translate-y-1
                ">
                    Send
                    <DynamicIcon name="FaPaperPlane" className="ml-2"/>
                </button>
                 <p className="text-center text-sm sm:text-md">We'll get back to you within 24 hours</p>
            </div>
           
        </div>
        </>
    );
}