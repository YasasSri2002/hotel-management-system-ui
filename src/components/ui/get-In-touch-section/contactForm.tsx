export default function ContactForm(){
    return(
        <>
        <div>
            <h1 className="text-black/70 text-xl">Send us message</h1>
            <div className="w-full h-full mt-10">
                <div className="flex justify-evenly space-x-5">
                    <div className="grid">
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
                            <input type="text" name="email" id="email" className="myInputClass"
                            placeholder="johnwick@gamail.com"
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
                     border-b-2 py-1 px-5 bg-gray-400/15 rounded-2xl" style={{resize: "none"}}
                    placeholder="Add your comment here....."
                    >
                    
                    </textarea>
                </div>
            </div>
        </div>
        </>
    );
}