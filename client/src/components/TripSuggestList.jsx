function TripSuggestList(props) {
    return (
        <div className="flex flex-col items-center justify-center mt-10 border border-blue-700">

            {/* trip-suggest-list */}
            {props.toDisplay.map((item) => (
                <div key={item.eid} className="w-11/12 h-60 mb-8 border border-green-500 flex flex-col sm:flex-row">
                    {/* left-box */}
                    <div className="w-full sm:w-1/3 border border-red-500">
                        <img src={item.photos[0]}
                            alt="trip-image"
                            className="w-full h-full object-cover rounded-xl md:rounded-3xl"
                        />
                    </div>

                    {/* right-box */}
                    <div className="w-full pl-4 sm:w-2/3 border border-red-500 flex flex-col gap-1">
                        {/* half-top */}
                        <div className="border border-green-500 h-1/2">
                            <a
                                href={item.url}
                                className="text-2xl font-sans font-bold text-gray-800 hover:text-orange-400">{item.title}</a>
                            <p className="text-sm font-sans font-medium text-gray-500">
                                {item.description.length > 100 ? item.description.slice(0, 100) + "..." : item.description}
                            </p>
                            {/* <a href=""
                                className="text-sm font-sans font-light text-blue-400 underline"
                            >อ่านต่อ
                            </a> */}
                            <div className="flex flex-row gap-2 border border-blue-500">
                                <div className="border border-blue-500 flex justify-center items-center">
                                    <p className="text-sm font-medium text-gray-500">หมวด</p>
                                </div>
                                {item.tags.map((tag, index) => (
                                    <div key={index} className="text-sm font-light text-blue-400 underline">
                                        #{tag}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* half-bottom */}
                        <div className="border border-green-200 h-1/2 flex flex-row gap-5 p-3">
                            <DetailPhoto photo={item.photos[1]} />
                            <DetailPhoto photo={item.photos[2]} />
                            <DetailPhoto photo={item.photos[3]} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

function DetailPhoto(props) {
    return (
        <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 border border-blue-500">
            <img
                src={props.photo}
                className="w-full h-full object-cover rounded-lg md:rounded-xl"
            />
        </div>
    )
}

export default TripSuggestList;