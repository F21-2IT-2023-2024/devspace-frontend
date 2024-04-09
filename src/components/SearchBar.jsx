function SearchBar() {
    return ( 
        <form class="max-w-md mx-auto mt-12">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="relative w-6 h-6 text-gray-400 top-10 left-3" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input type="search" placeholder="Search" className="block w-full p-4 ps-12 bg-gray-50 rounded-2xl outline outline-gray-300 focus:outline-none focus:ring ring-gray-300" />    
            </div>   
        </form>
    )
}

export default SearchBar;