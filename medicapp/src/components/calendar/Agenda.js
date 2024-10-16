import { Route } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import "./Agenda.css";
import {ChevronLeft, ChevronRight} from 'lucide-react';

const daysOfWeek = ["SUN", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"];
const timeSlots = ["7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM"];

const Agenda = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const goToPreviousWeek = () => {
        setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)));
    };

    const goToNextWeek = () => {
        setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)));
    };

    const getWeekDates = () => {
        const dates = [];

        for (let i = 0; i < 7; i++) {
            const date = new Date(currentDate);
            date.setDate(currentDate.getDate() - currentDate.getDay() + i);
            dates.push(date);
        }
        return dates;
    }

    const weekDates = getWeekDates();

    const sampleSchedule = {
        0: {
          '7 AM': { name: 'Yasser Jose Darce', code: 'MN-646526-24' },
          '8 AM': { name: 'Yasser Jose Darce', code: 'MN-646526-24' },
          '9 AM': { name: 'Yasser Jose Darce', code: 'MN-646526-24' },
          '10 AM': { name: 'Yasser Jose Darce', code: 'MN-646526-24' },
          '11 AM': { name: 'Luis Francisco', code: 'MN-646526-24' },
          '12 PM': { name: 'Yasser Jose Darce', code: 'MN-646526-24' },
          '1 PM': { name: 'Yasser Jose Darce', code: 'MN-646526-24' },
          '2 PM': { name: 'Yasser Jose Darce', code: 'MN-646526-24' },
          '3 PM': { name: 'Luis Francisco', code: 'MN-646526-24' },
          '4 PM': { name: 'Luis Francisco', code: 'MN-646526-24' },
        },
    }

    return (
        <div className="container-agenda">
            <div className="heading-container">
                    <h1 className="heading">
                        Calendario de
                    </h1>
                    <h1>
                        <span className="highlight">Citas</span>
                    </h1>
            </div>

            <div className="agenda-container">
                <div className="header-agenda">
                        

                    <button onClick={goToPreviousWeek} className="nav-button">
                    <ChevronLeft className="icon" />
                    </button>

                    <h2 className="title-date">
                    {weekDates[0].toLocaleDateString('es-ES', { month: 'long', day: 'numeric' })}
                    </h2>

                    <button onClick={goToNextWeek} className="nav-button">
                    <ChevronRight className="icon" />
                    </button>

                <div className="view-buttons">
                    <button className="view-button">Day</button>
                    <button className="view-button active">Week</button>
                    <button className="view-button">Month</button>
                    <button className="view-button">Year</button>
                </div>
                    
                </div>


                <div className="grid-container-agenda">
                    <div className="empty-cell"></div>
                    {weekDates.map((date, index) => (
                    <div key={index} className="day-header">
                        <div>{daysOfWeek[index]}</div>
                        <div>{date.getDate()}</div>
                    </div>
                    ))}
                    {timeSlots.map((timeSlot) => (
                    <>
                        <div key={timeSlot} className="time-slot">{timeSlot}</div>
                        {weekDates.map((date, dateIndex) => {
                        const daySchedule = sampleSchedule[dateIndex]
                        const appointment = daySchedule && daySchedule[timeSlot]
                        return (
                            <div
                            key={`${dateIndex}-${timeSlot}`}
                            className={`cell ${appointment ? (appointment.name === 'Luis Francisco' ? 'red-bg' : 'blue-bg') : ''}`}
                            >
                            {appointment && (
                                <>
                                <div className="appointment-name">{appointment.name}</div>
                                <div className="appointment-code">{appointment.code}</div>
                                </>
                            )}
                            </div>
                        )
                        })}
                    </>
                    ))}
                </div>
            </div>
            
        </div>
      )
};

export default Agenda