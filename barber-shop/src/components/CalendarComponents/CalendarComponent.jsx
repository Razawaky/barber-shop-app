// import { useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// function CalendarComponent() {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedTime, setSelectedTime] = useState(new Date());

//   const events = [
//     {
//       id: 1,
//       title: 'Meeting',
//       start: moment(selectedDate).set({ hour: 10, minute: 30 }),
//       end: moment(selectedDate).set({ hour: 11, minute: 30 }),
//     },
//     // Add more events as needed
//   ];

//   const handleSelectSlot = ({ start, end }) => {
//     setSelectedDate(start);
//     setSelectedTime(end);
//   };

//   const localizer = momentLocalizer(moment);

//   return (
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center">
//       <div className="bg-black p-8 rounded-lg shadow-md max-w-sm w-full">
//         <h1 className="text-2xl font-bold mb-4">Calendar</h1>
//         <Calendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           eventPropGetter={(event) => ({
//             className: `${event.title}`,
//           })}
//           onSelectSlot={handleSelectSlot}
//           selectable
//           defaultDate={new Date()}
//           min={moment().subtract(1, 'day')}
//           max={moment().add(7, 'days')}
//         />
//         {selectedDate && selectedTime && (
//           <div className="mt-4">
//             <p className="text-lg font-semibold mb-2">Selected Date:</p>
//             <p>{moment(selectedDate).format('YYYY-MM-DD')}</p>
//             <p className="mt-2 text-lg font-semibold">Selected Time:</p>
//             <p>{moment(selectedTime).format('HH:mm')}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CalendarComponent;


export default function CalendarComponent() {
  return (
    <div>CalendarComponent</div>
  )
}
