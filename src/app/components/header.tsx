import Link from "next/link";

export default function Header(){
    return(
        <>
         <header className='flex shadow-[rgba(0,0,0,0.1)_-4px_9px_25px_-6px] py-2 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide sticky top-0 z-50'>
    <div className='w-full flex flex-wrap items-center lg:gap-y-4 gap-y-6 gap-x-4 relative'>
      <p className="font-bold text-2xl">E-Commerce</p>
      
  
      <div id="collapseMenu"
        className="max-lg:hidden lg:!flex lg:items-center lg:flex-1 max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50">
        <button id="toggleClose"
          className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border'>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"></path>
          </svg>
        </button>
  
        <ul
          className='lg:ml-12 lg:flex lg:gap-x-8 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-8 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
          <li className='mb-6 hidden max-lg:block'>
            <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui-short.svg" alt="logo"
                className='w-9 h-9' />
            </a>
          </li>
          <li
            className='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-green-900 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300'>
            <a href="/collection" className='text-[#333] block text-sm font-semibold'>Collection</a>
          </li>
          <li
            className='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-green-900 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300'>
            <a href="/fashion" className='text-[#333] block text-sm font-semibold'>Fashion</a>
          </li>
          <li
            className='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-green-900 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300'>
            <a href="/signup" className='text-[#333] block text-sm font-semibold'>Sign Up</a>
          </li>
          <li
            className='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-green-900 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300'>
            <a href="/signin" className='text-[#333] block text-sm font-semibold'>Sign In</a>
          </li>
        </ul>
      </div>
  
      <div className='flex items-center ml-auto'>
        <ul className="flex space-x-4">
          
          <li
            className="relative px-1 after:absolute after:bg-green-900 after:w-0 hover:after:w-full hover:after:h-[3px] after:block after:-bottom-2 after:left-0 after:transition-all after:duration-300">
            <div className="flex flex-col justify-center items-center cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
              <a href="/bag" className="text-xs font-semibold mt-1">Wishlist</a>
            </div>
          </li>
          <li
            className="relative px-1 after:absolute after:bg-green-900 after:w-0 hover:after:w-full hover:after:h-[3px] after:block after:-bottom-2 after:left-0 after:transition-all after:duration-300">
            <div className="flex flex-col justify-center items-center cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 489 489">
                <path
                  d="m440.1 422.7-28-315.3c-.6-7-6.5-12.3-13.4-12.3h-57.6C340.3 42.5 297.3 0 244.5 0s-95.8 42.5-96.6 95.1H90.3c-7 0-12.8 5.3-13.4 12.3l-28 315.3c0 .4-.1.8-.1 1.2 0 35.9 32.9 65.1 73.4 65.1h244.6c40.5 0 73.4-29.2 73.4-65.1 0-.4 0-.8-.1-1.2zM244.5 27c37.9 0 68.8 30.4 69.6 68.1H174.9c.8-37.7 31.7-68.1 69.6-68.1zm122.3 435H122.2c-25.4 0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h139.3v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h45.2l26.9 302.3c-.4 20.7-21.1 37.5-46.4 37.5z"
                  data-original="#000000" />
              </svg>
              <Link href={"bag"}><span className="text-xs font-semibold mt-1">Bag</span></Link> 
            </div>
          </li>
        </ul>
  
        <button id="toggleOpen" className='lg:hidden ml-6'>
          <svg className="w-8 h-8" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
    </>
    )
}
    
   