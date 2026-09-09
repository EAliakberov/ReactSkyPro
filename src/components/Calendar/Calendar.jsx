import { useEffect, useMemo, useState } from 'react';
import { SCalendar } from './Calendar.styled';
import { ru } from 'date-fns/locale';
import {
    addDays,
    addMonths,
    endOfMonth,
    endOfWeek,
    format,
    isSameDay,
    isSameMonth,
    isWeekend,
    parse,
    startOfMonth,
    startOfWeek,
    subMonths,
} from 'date-fns';

export const Calendar = ({ currentDate, onChange, isEditing }) => {
    const initialDate = isNaN(currentDate?.getTime()) ? new Date() : new Date(currentDate);

    const [selectedDate, setSelectedDate] = useState(initialDate);
    const [currentMonth, setCurrentMonth] = useState(initialDate);

    const table = useMemo(() => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(currentMonth);
        const start = startOfWeek(monthStart, { weekStartsOn: 1 });
        const end = endOfWeek(monthEnd, { weekEndsOn: 1 });

        const days = [];
        let day = start;

        while (day <= end) {
            days.push(day);
            day = addDays(day, 1);
        }
        return days;
    }, [currentMonth]);

    useEffect(() => {
        if (!isEditing) setSelectedDate(null);
    }, [isEditing]);

    const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
    const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

    const monthLabel = format(currentMonth, 'LLLL yyyy', { locale: ru });
    const normalizedMonthLabel = monthLabel.charAt(0).toUpperCase() + monthLabel.slice(1);

    const getCellClass = (day) =>
        [
            'calendar__cell',
            isSameMonth(day, currentMonth) ? '_cell-day' : '_other-month',
            isWeekend(day) ? '_weekend' : '',
            selectedDate && isSameDay(day, selectedDate) ? '_selected' : '',
            isSameDay(day, initialDate) ? '_current' : '',
        ]
            .filter(Boolean) //отсеиваем пустые строки
            .join(' ');

    const handleSelectDate = async (day) => {
        if (isEditing) {
            setSelectedDate(day);
            onChange(day);
        }
    };

    return (
        <SCalendar>
            <p className="calendar__ttl subttl">Даты</p>
            <div className="calendar__block">
                <div className="calendar__nav">
                    <div className="calendar__month">{normalizedMonthLabel}</div>
                    <div className="nav__actions">
                        <div className="nav__action" data-action="prev" onClick={handlePrevMonth}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="11"
                                viewBox="0 0 6 11"
                            >
                                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                            </svg>
                        </div>
                        <div className="nav__action" data-action="next" onClick={handleNextMonth}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="11"
                                viewBox="0 0 6 11"
                            >
                                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="calendar__content">
                    <div className="calendar__days-names">
                        <div className="calendar__day-name">пн</div>
                        <div className="calendar__day-name">вт</div>
                        <div className="calendar__day-name">ср</div>
                        <div className="calendar__day-name">чт</div>
                        <div className="calendar__day-name">пт</div>
                        <div className="calendar__day-name -weekend-">сб</div>
                        <div className="calendar__day-name -weekend-">вс</div>
                    </div>
                    <div className="calendar__cells">
                        {table.map((day) => {
                            return (
                                <div
                                    key={day.toISOString()}
                                    className={getCellClass(day)}
                                    onClick={() => handleSelectDate(day)}
                                >
                                    {format(day, 'd')}
                                </div>
                            );
                        })}
                        <div className="calendar__cell _other-month _weekend">1</div>
                    </div>
                </div>

                <input type="hidden" id="datepick_value" value="08.09.2023" />
                <div className="calendar__period">
                    <p className="calendar__p date-end">
                        {selectedDate ? 'Срок исполнения' : 'Выберите срок исполнения'}{' '}
                        <span className="date-control">
                            {selectedDate ? format(selectedDate, 'dd.MM.yy') : ''}
                        </span>
                        .
                    </p>
                </div>
            </div>
        </SCalendar>
    );
};
