import DropdownMenu from "../../dropdown";

export default function GuestDetailsForm(){
    return(
        <div className="p-5 md:p-10">
            <h1 className="text-md sm:text-lg md:text-xl">Guest Details</h1>
            <h2 className="text-gray-400 text-sm sm:text-md md:text-lg">Please provide your information</h2>
            <div className="mt-5 grid gap-y-5">
                <div className="grid grid-cols-2 gap-x-10">
                    <div className="grid col-1 gap-2">
                        <h1 className="ml-1">First Name</h1>
                        <input type="text" className="myInputClass" />
                    </div>
                    <div className="grid col-2 gap-2">
                        <h1 className="ml-1">Last Name</h1>
                        <input type="text" className="myInputClass" />
                    </div>
                </div>
                <div className="grid gap-2">
                    <h1 className="ml-1">Email</h1>
                    <input type="text" className="myInputClass" />
                </div>
                <div className="grid gap-2">
                    <h1 className="ml-1">Phone Number</h1>
                    <input type="text" className="myInputClass" />
                </div>
                <div className="grid gap-2">
                    <h1 className="ml-1">Country</h1>
                    <DropdownMenu name="country" smallSize={false} items={["Sri Lanka","Japan"]}/>
                </div>
                <div className="grid gap-x-10 gap-y-5 grid-cols-2 grid-rows-2">
                    <div className="grid gap-2 col-span-2">
                        <h1 className="ml-1">Address</h1>
                        <input type="text" className="myInputClass" />
                    </div>
                    <div className="col-1 row-2 grid gap-2">
                        <h1 className="ml-1">City</h1>
                        <input type="text" className="myInputClass" />
                    </div>
                    <div className="col-2 row-2 grid gap-2">
                        <h1 className="ml-1">Postal Code</h1>
                        <input type="text" className="myInputClass" />
                    </div>
                </div>
            </div>

        </div>

    )
}