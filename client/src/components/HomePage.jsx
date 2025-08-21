import TripSuggestList from "./TripSuggestList";
import axios from "axios";
import { useState, useEffect } from "react";


function HomePage() {

    //For Searching
    const [keywords, setKeywords] = useState("");

    const handleChange = (e) => {
        setKeywords(e.target.value);
    }

    //For Displaying
    const [toDisplay, setToDisplay] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get(`http://localhost:4001/trips?keywords=${keywords}`)
            // console.log(response.data.data);
            setToDisplay(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [keywords]);


    //Displaying
    return (
        // window box
        <div className="bg-white w-full border border-red-500">
            {/* title */}
            <div className="flex flex-col items-center justify-center mt-15">
                <h1 className="text-5xl font-sans font-bold text-blue-400">เที่ยวไหนดี</h1>
            </div>

            {/* search box */}
            <div className="flex flex-col items-center justify-center mt-10 border border-red-700">
                <label htmlFor="search" className="text-sm font-sans font-bold border border-red-500 text-gray-500 w-9/12 text-left">หาที่เที่ยวแล้วไปกัน</label>
                <input type="text"
                    placeholder="ค้นหา"
                    className="w-9/12 p-2 rounded-md border border-green-500"
                    onChange={handleChange}
                />
            </div>

            {/* list of trips */}
            <TripSuggestList toDisplay={toDisplay} />
        </div>
    )
}

export default HomePage;