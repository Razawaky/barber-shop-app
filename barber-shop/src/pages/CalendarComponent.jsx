import { useEffect } from "react";

export default function Calendar() {
useEffect(() => {
  console.log("Fazer o componente usando useEffect");
}, []);

return (
  <>
    <div className="flex items-center justify-center py-8 px-4">
      <div className="w-auto shadow-lg">
        <div className="md:p-16 md:pb-12 p-5 dark:bg-[#181a25] rounded-t">
          <div className="px-4 flex items-center justify-around">
            <div className="flex items-center text-white p-2 cursor-pointer font-bold"> 
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={34} height={34} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">Outubro</h1>
            <div className="flex justify-center text-white cursor-pointer p-2"> 
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={34} height={34} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-center pt-12 w-full max-w-screen-md"> {/*começo da tabela*/}
            <table className="w-full">
              <thead>
                <tr>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">Seg</p>
                    </div>
                  </th>

                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">Ter</p>
                    </div>
                  </th>

                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">Qua</p>
                    </div>
                  </th>

                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">Qui</p>
                    </div>
                  </th>

                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">Sex</p>
                    </div>
                  </th>

                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">Sab</p>
                    </div>
                  </th>

                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">Dom</p>
                    </div>

                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pt-6">
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-gray-500">28</p>
                    </div>
                  </td>

                  <td className="pt-6">
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-gray-500">29</p>
                    </div>
                  </td>

                  <td className="pt-6">
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-gray-500">30</p>
                    </div>
                  </td>

                  <td className="pt-6">
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl text-white font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">1</p>
                  </div>

                  </td>
                    <td className="pt-6">
                      <div className="px-4 py-4 flex w-full justify-center">
                        <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">2</p>
                      </div>
                  </td>

                  <td className="pt-6">
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">3</p>
                    </div>
                  </td>

                  <td className="pt-6">
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">4</p>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">5</p>
                    </div>
                  </td>

                  <td>
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">6</p>
                    </div>
                  </td>

                  <td>
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">7</p>
                    </div>
                  </td>

                  <td>
                      <div className="px-4 py-4 flex w-full justify-center">
                        <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">8</p>
                      </div>
                  </td>

                  <td>
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">9</p>
                    </div>
                  </td>

                  <td>
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">10</p>
                    </div>
                  </td>

                  <td>
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">11</p>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">12</p>
                    </div>
                  </td>

                  <td>
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">13</p>
                    </div>
                  </td>

                  <td>
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">14</p>
                    </div>
                  </td>

                  <td>
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">15</p>
                    </div>
                  </td>

                  <td>
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">16</p>
                    </div>
                  </td>

                  <td>
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">17</p>
                    </div>
                  </td>

                  <td>
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">18</p>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">19</p>
                    </div>
                  </td>

                  <td>
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">20</p>
                    </div>
                  </td>

                  <td>
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">21</p>
                    </div>
                  </td>

                  <td>
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">22</p>
                    </div>
                  </td>

                  <td>
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">23</p>
                    </div>
                  </td>

                  <td>
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">24</p>
                    </div>
                  </td>

                  <td>
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">25</p>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">26</p>
                    </div>
                  </td>

                  <td>
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">27</p>
                    </div>
                  </td>

                  <td>
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">28</p>
                    </div>
                  </td>

                  <td>
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">29</p>
                    </div>
                  </td>

                  <td>
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">30</p>
                    </div>
                  </td>

                  <td>
                    <div className="px-4 py-4 flex w-full justify-center">
                      <p className="cursor-pointer text-2xl font-medium bg-gray-600 w-full flex justify-center rounded-[0.5vh] px-7 py-4">31</p>
                    </div>
                  </td>

                  <td>
                    <div className="cursor-pointer px-1 py-3 flex w-full justify-center pt-6">
                      <p className="text-gray-500">1</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

          <div className="md:py-8 py-5 md:px-16 px-5 dark:bg-[#10121c] rounded-b"> {/* Horários*/}
            <div className="px-6 flex gap-6 flex justify-center">
              <div className="bg-black rounded-lg w-[12vh] py-1 flex justify-center">
                <p>
                  8:00
                </p>
              </div> 

              <div className="bg-black rounded-lg w-[12vh] py-1 flex justify-center">
                <p>
                  9:00
                </p>
              </div> 

              <div className="bg-black rounded-lg w-[12vh] py-1 flex justify-center">
                <p>
                  10:00
                </p>
              </div> 
              <div className="bg-black rounded-lg w-[12vh] py-1 flex justify-center">
                <p>
                11:00
                </p>
              </div> 
              <div className="bg-black rounded-lg w-[12vh] py-1 flex justify-center">
                <p>
                  12:00
                </p>
              </div> 
            </div>

            <div className="px-6 flex gap-6 mt-4 flex justify-center">
              <div className="bg-black rounded-lg w-[12vh] py-1 flex justify-center">
                <p>
                  13:40
                </p>
              </div> 

              <div className="bg-black rounded-lg w-[12vh] py-1 flex justify-center">
                <p>
                  14:40
                </p>
              </div> 

              <div className="bg-black rounded-lg w-[12vh] py-1 flex justify-center">
                <p>
                  15:40
                </p>
              </div> 
              <div className="bg-black rounded-lg w-[12vh] py-1 flex justify-center">
                <p>
                  17:00
                </p>
              </div> 
              <div className="bg-black rounded-lg w-[12vh] py-1 flex justify-center">
                <p>
                  18:00
                </p>
              </div> 
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
