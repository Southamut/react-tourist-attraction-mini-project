function TripSuggestList(props) {
    return (
        <div className="flex flex-col items-center justify-center mt-10">

            {/* trip-suggest-list */}
            {props.toDisplay.map((item) => (
                <div key={item.eid} className="w-11/12 mb-8 flex flex-col sm:flex-row">
                    {/* left-box */}
                    <div className="w-full aspect-[4/3] sm:w-1/3">
                        <img src={item.photos[0]}
                            alt="trip-image"
                            className="w-full h-full object-cover rounded-xl md:rounded-3xl"
                        />
                    </div>

                    {/* right-box */}
                    <div className="w-full sm:pl-4 sm:w-2/3 flex flex-col gap-1">
                        {/* half-top */}
                        <div>
                            <a
                                href={item.url}
                                className="text-md md:text-lg lg:text-2xl font-bold text-gray-800 hover:text-orange-400">{item.title}</a>
                            <p className="text-xs md:text-sm lg:text-md font-medium text-gray-500">
                                {item.description.length > 100 ? item.description.slice(0, 100) + "..." : item.description}
                            </p>
                            <a href={item.url}
                                className="text-xs md:text-sm lg:text-md font-light hover:text-orange-400 text-blue-400 underline"
                            >อ่านต่อ
                            </a>
                            <div className="flex flex-row gap-2 flex-wrap">
                                <p className="text-xs md:text-sm font-medium text-gray-500">หมวด</p>
                                {item.tags.map((tag, index) => {
                                    if (index === item.tags.length - 1 && index > 0) {
                                        return [
                                            <p
                                                key={`and-${index}`}
                                                className="text-xs md:text-sm lg:text-md font-medium text-gray-500"
                                            >และ</p>,
                                            <Tag key={`tag-${index}`} tag={tag} onTagClick={props.onTagClick} />
                                        ];
                                    }
                                    return <Tag key={`tag-${index}`} tag={tag} onTagClick={props.onTagClick} />;
                                })}
                            </div>
                        </div>

                        {/* half-bottom */}
                        <div className="flex flex-row gap-5 p-3">
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
        <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
            <img
                src={props.photo}
                className="w-full h-full object-cover rounded-lg md:rounded-xl"
            />
        </div>
    )
}

function Tag(props) {
    return (
        <button
            key={props.index}
            onClick={() => props.onTagClick(props.tag)}//to run tag function that input is (props.tag)
            className="text-xs md:text-sm lg:text-md font-light hover:text-orange-400 text-blue-400 underline">
            {props.tag}
        </button>
    )
}

export default TripSuggestList;