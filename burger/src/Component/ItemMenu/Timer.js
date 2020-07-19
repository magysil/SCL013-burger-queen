import React, { Component, useState, useEffect } from 'react';
import moment from 'moment';


const Timer = ({ timeStamp }) => {
  const [seconds, setSeconds] = useState('');
  const [formattedTime, setFormattedTime] = useState(true);

  // timer que se ejecuta cada 1 segundo
  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);


  // asigna un string con el formato HH:mm:ss al estado 'formattedTime', se ejecuta cada vez que cambia el estado 'seconds'
  useEffect(() => {
    const creationDate = new Date(timeStamp * 1000);
    const currentDate = new Date();
    const diff = currentDate - creationDate;
    const formatted = moment("1900-01-01 00:00:00").add(diff / 1000, 'seconds').format("HH:mm:ss")
    setFormattedTime(formatted);
  }, [seconds])


  return (
    <div className="app">
      <div className="time">
        {formattedTime}
      </div>
    </div>
  );
};

export default Timer;
