function Sidebar(props) {
  return (
    <div class="col-spane-1 relative bg-white dark:bg-gray-800 mr-6">
      <div class="flex  flex-col sm:flex-row sm:justify-around">
        <div class="w-72 h-screen">
          <div class="flex flex-col items-center justify-start mx-6 mt-10">
            <img class="h-34" src="src/assets/cuberium.png" />
            <span class="text-gray-600 dark:text-gray-300 ml-4 text-xl font-bold">
              Cuberium & RedpunchStudios NFT Collection
            </span>
          </div>
          <nav class="mt-10 px-6 ">
            <div className="flex flex-col">
              <a
                class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                href="#"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="m-auto"
                  viewBox="0 0 2048 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z"></path>
                </svg>
                <span class="mx-4 text-md font-normal">Home</span>
                <span class="flex-grow text-right"></span>
              </a>
              <a
                class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                href="#"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="m-auto"
                  viewBox="0 0 2048 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z"></path>
                </svg>
                <span class="mx-4 text-md font-normal">Profile</span>
                <span class="flex-grow text-right"></span>
              </a>
              <a
                class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                href="#"
              >
                <svg
                  width="20"
                  height="20"
                  class="m-auto"
                  fill="currentColor"
                  viewBox="0 0 2048 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                </svg>
                <span class="mx-4 text-md font-normal">Cuberium Website</span>
                <span class="flex-grow text-right"></span>
              </a>
              <a
                class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                href="#"
              >
                {props.balance != undefined && (
                  <span class="mx-4 text-md font-normal">
                    Your wallet balance is {props.balance} ETH
                  </span>
                )}
                <span class="flex-grow text-right"></span>
              </a>
            </div>
            <div className="place-self-end">
              <a
                class="hovplace-content-betweener:text-gray-800 hover:bg-gray-100 flex self-end p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                href="#"
              >
                <span class="mx-4 text-md font-bold">Made by Tayfun Açıcı</span>
                <span class="flex-grow text-right"></span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
