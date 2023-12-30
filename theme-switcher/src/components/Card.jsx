

export default function Card() {

  
  return (
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="/">
              <img className="p-8 rounded-t-lg mx-auto " src="data:image/jpeg;base64,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" alt="product_image1" />
          </a>
          <div className="px-5 pb-5">
              <a href="/">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                  </h5>
              </a>
              <div className="flex items-center mt-2.5 mb-5">
                  <svg
                      className="w-4 h-4 text-yellow-300 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                  >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                      className="w-4 h-4 text-yellow-300 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                  >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                      className="w-4 h-4 text-yellow-300 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                  >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                      className="w-4 h-4 text-yellow-300 mr-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                  >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                      className="w-4 h-4 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                  >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      4.0
                  </span>
              </div>
              <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                  <a
                      href="/"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                      Add to cart
                  </a>
              </div>
          </div>
      </div>
  );
}
