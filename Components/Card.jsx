export function Card({ data ,handleclick,index}) {
  const { image, title, singer, isFavourite } = data;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-64">
      <div className="flex items-center gap-4">
   
        <div className="w-16 h-16 overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={image}
            alt={title}
            style={{ borderRadius: "0px" }} 
          />
        </div>

        <div>
          <h3 className="font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{singer}</p>
        </div>
      </div>

      
      <button onClick={()=>{handleclick(index)}} className= {`mt-4 ${ isFavourite? "bg-amber-950":"bg-orange-600"} text-white px-4 py-2 rounded-full text-sm hover:bg-orange-700 transition`} >
        {!isFavourite?"Add to Favourites":"Added"}
      </button>
    </div>
  );
}
