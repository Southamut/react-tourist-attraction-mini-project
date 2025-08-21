import TripSuggestList from "./TripSuggestList";
import axios from "axios";
import { useState } from "react";


function HomePage() {
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
                <input type="text" placeholder="ค้นหา" className="w-9/12 p-2 rounded-md border border-green-500" />
            </div>

            {/* list of trips */}
            <TripSuggestList />
        </div>
    )
}

export default HomePage;