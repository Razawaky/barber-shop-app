import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Calendar() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(9); // Outubro
  const [selectedDay, setSelectedDay] = useState(null); // Dia selecionado

  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
  ];

  const nextMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex + 1) % 12);
    setSelectedDay(null); // Resetar o dia selecionado ao mudar o mês
  };

  const prevMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex - 1 + 12) % 12);
    setSelectedDay(null); // Resetar o dia selecionado ao mudar o mês
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <>
      <div className="flex items-center justify-center py-8 px-4">
        <div className="w-auto shadow-lg">
          <div className="md:p-16 md:pb-12 p-5 dark:bg-[#181a25] rounded-t">
            <div className="px-4 flex items-center justify-around">
              <div
                className="flex items-center text-white p-2 cursor-pointer font-bold"
                onClick={prevMonth}
              >
                &lt; {/* Substitua pelo SVG se preferir */}
              </div>
              <h1 className="text-2xl font-bold text-white">
                {months[currentMonthIndex]}
              </h1>
              <div
                className="flex justify-center text-white cursor-pointer p-2"
                onClick={nextMonth}
              >
                &gt; {/* Substitua pelo SVG se preferir */}
              </div>
            </div>
            <div className="flex items-center justify-center pt-12 w-full max-w-screen-md">
              <table className="w-full">
                <thead>
                  <tr>
                    {["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"].map(
                      (day, index) => (
                        <th key={index}>
                          <div className="w-full flex justify-center">
                            <p className="text-2xl font-medium text-center text-gray-800 dark:text-gray-100">
                              {day}
                            </p>
                          </div>
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, weekIndex) => (
                    <tr key={weekIndex}>
                      {[...Array(7)].map((_, dayIndex) => {
                        const day = weekIndex * 7 + dayIndex + 1;
                        return (
                          <td key={dayIndex} className="pt-6">
                            <div
                              className={`m-2 px-6 py-4 flex max-w-[8vh] rounded align-itens-center justify-center cursor-pointer hover:bg-blue-900 transition ease-in-out delay-400 hover:scale-105 ${
                                selectedDay === day
                                  ? "bg-blue-600 text-white"
                                  : "bg-gray-600 text-gray-200"
                              }`}
                              onClick={() => handleDayClick(day)}
                            >
                              <p className="cursor-pointer text-2xl font-medium rounded-[0.5vh]">
                                {day <= 31 ? day : ""}
                              </p>
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
          </div>

          <div className="md:py-8 py-5 md:px-16 px-5 dark:bg-[#10121c] rounded-b"> {/* Horários*/}
            <div className="px-6 flex gap-6 flex justify-center">
              <div className="cursor-pointer transition focus:bg-blue-900 hover:scale-125 bg-black rounded-lg w-[12vh] py-1 flex justify-center">
                <p>
                  8:00
                </p>
              </div>

              <div className="cursor-pointer transition focus:bg-blue-900 hover:scale-125 bg-black rounded-lg w-[12vh] py-1 flex justify-center">
                <p>
                  9:00
                </p>
              </div>

              <div className="cursor-pointer transition focus:bg-blue-900 hover:scale-125 bg-black rounded-lg w-[12vh] py-1 flex justify-center">
                <p>
                  10:00
                </p>
              </div>
              <div className="cursor-pointer transition focus:bg-blue-900 hover:scale-125 bg-black rounded-lg w-[12vh] py-1 flex justify-center">
                <p>
                  11:00
                </p>
              </div>
              <div className="cursor-pointer transition focus:bg-blue-900 hover:scale-125 bg-black rounded-lg w-[12vh] py-1 flex justify-center">
                <p>
                  12:00
                </p>
              </div>
            </div>

            <div className="px-6 flex gap-6 mt-4 flex justify-center">
              <div className="cursor-pointer transition focus:bg-blue-900 hover:scale-125 bg-black rounded-lg w-[12vh] py-1 flex justify-center">
                <p>
                  13:40
                </p>
              </div>

              <div className="cursor-pointer transition focus:bg-blue-900 hover:scale-125 bg-black rounded-lg w-[12vh] py-1 flex justify-center">
                <p>
                  14:40
                </p>
              </div>

              <div className="cursor-pointer transition focus:bg-blue-900 hover:scale-125 bg-black rounded-lg w-[12vh] py-1 flex justify-center">
                <p>
                  15:40
                </p>
              </div>
              <div className="cursor-pointer transition focus:bg-blue-900 hover:scale-125 bg-black rounded-lg w-[12vh] py-1 flex justify-center">
                <p>
                  17:00
                </p>
              </div>
              <div className="cursor-pointer transition focus:bg-blue-900 hover:scale-125 bg-black rounded-lg w-[12vh] py-1 flex justify-center">
                <p>
                  18:00
                </p>
              </div>
            </div>

          </div>
          <button
                type="button"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <Link to="/card">Continuar</Link>
              </button>
        </div>
      </div>
    </>
  );
}
