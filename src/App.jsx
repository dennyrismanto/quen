import "./App.css";
import { Home } from "./components/home";
import { Link, Route } from "wouter";
import { useState } from "react";
import { WeddingLocation } from "./components/weddinglocation";
import { Chat } from "./components/chat";

function App() {
  const [Modal, setModal] = useState("");

  return (
    <div className={`w-full h-full bg-lala-home pb-2 md:pb-6`}>
      <Route path="/name/:name">
        {(params) => (
          <div
            class={`fixed z-10 inset-0 overflow-y-auto ${Modal}`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            {console.log(params)}
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                aria-hidden="true"
              ></div>

              <span
                class="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              ></span>

              <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        class="h-6 w-6 text-red-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        class="text-lg leading-6 font-medium text-gray-900"
                        id="modal-title"
                      >
                        {`Selamat datang`}
                      </h3>

                      <div class="mt-2">
                        <p class="text-sm text-gray-500">
                          {`Undangan untuk ` + decodeURIComponent(params.name)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <Link href="/">
                    <button
                      onClick={() => {
                        setModal("hidden");
                      }}
                      type="button"
                      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Masuk
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </Route>

      <Route path="/" component={Home} />
      <Route path="/location" component={WeddingLocation} />
      <Route path="/chat" component={Chat} />
    </div>
  );
}

export default App;
