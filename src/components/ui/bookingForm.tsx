export default function BookingForm(){
    return(
        <div className="grid">
            <div className="flex space-x-5">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" />
            </div>
        </div>
    );
}