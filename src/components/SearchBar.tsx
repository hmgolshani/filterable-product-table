const SearchBar = () => {
    return (
        <div className="flex justify-between items-center gap-3">
            <input type = "text"
                   placeholder = "Search product..."
                   className = "border-2 border-gray-300 rounded-md text-gray-500 w-2/3 h-[40px] pl-1"/>

            <label className="w-1/2 bg-gray-100  rounded-md h-[40px] flex items-center gap-1 pl-2">
                <input type="checkbox" className = "border-2 w-5 h-5 mr-2 accent-amber-400" />
                Only show products in stock
            </label>
        </div>

    );
};

export default SearchBar;