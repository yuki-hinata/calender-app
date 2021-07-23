import React from 'react';
import dayjs from 'dayjs';
import * as styles from './style.css';
import { Typography } from '@material-ui/core'
import {
        isSameMonth, 
        isSameday, 
        isFirstDay,
        getMonth 
    } from '../../services/calendar';

const CalendarElement = ({ day, month }) => {
    const format = isFirstDay(day) ? 'M月D日' : 'D';
    const today = dayjs();
    const isToday = isSameday(day, today);
    const currentMonth = getMonth(month);
    const isCurrentMonth = isSameMonth(day, currentMonth);
    const textColor = isCurrentMonth ? 'textPrimary' : 'textSecondary';
    
    return (
        <div className={styles.element}>
            <Typography
                className={styles.date}
                color={textColor}
                align='center'
                variant='caption'
                component='div'
                >
                    <span className={isToday ? styles.today : ''}>
                    {day.format(format)}
                    </span>
                </Typography>
        </div>
    );
};

export default CalendarElement;