import React, { useState } from 'react';
import "./Agenda2.css";

const Agenda2 = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date);
    };
    {/* 
        <div>
            <h2>Seleccione una fecha</h2>
            <Calendar 
                onChange={onChange} 
                value={date} 
            />
            <p>Fecha seleccionada: {date.toDateString()}</p>
        </div>*/}
    return (
        
        <div className="container-2">
            <div className="header-2">
                <h1>Domingo 4 de agosto</h1>

                <div className="view-options">
                    <button className="day-btn active">Day</button>
                    <button className="week-btn">Week</button>
                    <button className="month-btn">Month</button>
                    <button className="year-btn">Year</button>
                </div>
            </div>

            <div className="grid">
                <div className="day-label">SUN</div>
                <div className="day-label">MON</div>
                <div className="day-label">TUE</div>
                <div className="day-label">WED</div>
                <div className="day-label">THU</div>
                <div className="day-label">FRI</div>
                <div className="day-label">SAT</div>

                <div class="schedule-item">
                    7 AM<br /><span class="name">Yasser Jose Darce</span><br /><span class="id">MN-646526-24</span>
                </div>

                <div class="schedule-item">
                    8 AM<br /><span class="name">Yasser Jose Darce</span><br /><span class="id">MN-646526-24</span>
                </div>

                <div class="schedule-item">
                    9 AM<br /><span class="name">Yasser Jose Darce</span><br /><span class="id">MN-646526-24</span>
                </div>

                <div class="schedule-item">
                    10 AM<br /><span class="name">Yasser Jose Darce</span><br /><span class="id">MN-646526-24</span>
                </div>

                <div class="schedule-item">
                    11 AM<br /><span class="name red">Luis Francisco</span><br /><span class="id">MN-646526-24</span>
                </div>

                <div class="schedule-item">
                    12 PM<br /><span class="name">Yasser Jose Darce</span><br /><span class="id">MN-646526-24</span>
                </div>

                <div class="schedule-item">
                    1 PM<br /><span class="name">Yasser Jose Darce</span><br /><span class="id">MN-646526-24</span>
                </div>

                <div class="schedule-item">
                    2 PM<br /><span class="name">Yasser Jose Darce</span><br /><span class="id">MN-646526-24</span>
                </div>

                <div class="schedule-item">
                    3 PM<br /><span class="name red">Luis Francisco</span><br /><span class="id">MN-646526-24</span>
                </div>

                <div class="schedule-item">
                    4 PM<br /><span class="name red">Luis Francisco</span><br /><span class="id">MN-646526-24</span>
                </div>

                <div class="schedule-item">
                    4 PM<br /><span class="name red">Luis Francisco</span><br /><span class="id">MN-646526-24</span>
                </div>

                <div class="schedule-item">
                    4 PM<br /><span class="name red">Luis Francisco</span><br /><span class="id">MN-646526-24</span>
                </div>

                <div class="schedule-item">
                    4 PM<br /><span class="name red">Luis Francisco</span><br /><span class="id">MN-646526-24</span>
                </div>
                
            </div>
        </div>
    )
};

export default Agenda2;