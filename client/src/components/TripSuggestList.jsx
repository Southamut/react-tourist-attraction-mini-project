function TripSuggestList() {
    return (
        <div className="flex flex-col items-center justify-center mt-10 border border-blue-700">
            {/* trip-suggest-list */}
            <div className="w-11/12 border border-green-500 flex flex-col sm:flex-row">
                {/* left-box */}
                <div className="w-full sm:w-1/3 border border-red-500">
                    <img src="https://img.wongnai.com/p/1600x0/2019/07/02/3c758646aa6c426ba3c6a81f57b20bd6.jpg"
                        alt="trip-image"
                        className="w-full h-full object-cover rounded-xl md:rounded-3xl"
                    />
                </div>

                {/* right-box */}
                <div className="w-full sm:w-2/3 border border-red-500 flex flex-col">
                    {/* half-top */}
                    <div className="border border-blue-500 h-1/2">
                        <h1 className="text-2xl font-sans font-bold text-gray-800">Trip Suggest List</h1>
                        <p className="text-sm font-sans font-medium text-gray-500">lets go to travel!!!</p>
                        <a href="https://www.wongnai.com/trips/travel-koh-chang"
                            className="text-sm font-sans font-light text-blue-400 underline"
                        >อ่านต่อ
                        </a>
                    </div>

                    {/* half-bottom */}
                    <div className="border border-blue-500 h-1/2 flex flex-row gap-5 p-3">
                        <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 border border-blue-500">
                            <img
                                src="https://img.wongnai.com/p/1600x0/2019/07/02/6a2733ab91164ac8943b77deb14fdbde.jpg"
                                className="w-full h-full object-cover rounded-lg md:rounded-xl"
                            />
                        </div>
                        <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 border border-blue-500">
                            <img
                                src="https://img.wongnai.com/p/1600x0/2019/07/02/6a2733ab91164ac8943b77deb14fdbde.jpg"
                                className="w-full h-full object-cover rounded-lg md:rounded-xl"
                            />
                        </div>
                        <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 border border-blue-500">
                            <img
                                src="https://img.wongnai.com/p/1600x0/2019/07/02/6a2733ab91164ac8943b77deb14fdbde.jpg"
                                className="w-full h-full object-cover rounded-lg md:rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TripSuggestList;