import React, { FC, useState, useEffect } from 'react';
import { getItem, setItem } from '../../utils/asyncStorage';
import { Button, Time, Laps, Container, Actions } from './index';
import moment from 'moment';

let interval = 0;

export const Stopwatch: FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [laps, setLaps] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
  }, [isRunning]);

  const onNewLap = () => {
    setData();
    setLaps([...laps, seconds]);
    setSeconds(0);
    setIsRunning(false);
  };

  const setData = async () => {
    let data = await getItem('recoding-json');
    let datajson = data ? JSON.parse(data) : [] ;
    datajson.push({'seconds': seconds, date: moment().format('YYYYMMDD'), time: moment().format('HH:mm:ss')});
    console.log('recoding-json', datajson);
    await setItem('recoding-json', JSON.stringify(datajson));
  };

  const getData = async () => {
    const data = await getItem('recoding-json');
    console.log(data);
  };

  const initData = async () => {
    const mooks = [
      { seconds: 13100, date: '20230101', time: '10:00:00'},
      { seconds: 123100, date: '20230101', time: '10:00:00'},
      { seconds: 14400, date: '20230101', time: '10:00:00'},
      { seconds: 150, date: '20230101', time: '10:00:00'},
      { seconds: 15400, date: '20230201', time: '10:00:00'},
      { seconds: 14500, date: '20230201', time: '10:00:00'},
      { seconds: 1340, date: '20230201', time: '10:00:00'},
      { seconds: 103450, date: '20230201', time: '10:00:00'},
      { seconds: 50, date: '20230301', time: '10:00:00'},
      { seconds: 134500, date: '20230301', time: '10:00:00'},
      { seconds: 134500, date: '20230301', time: '10:00:00'},
      { seconds: 1400, date: '20230301', time: '10:00:00'},
      { seconds: 1500, date: '20230401', time: '10:00:00'},
      { seconds: 1060, date: '20230401', time: '10:00:00'},
      { seconds: 1070, date: '20230501', time: '10:00:00'},
      { seconds: 15050, date: '20230506', time: '10:00:00'},
      { seconds: 1700, date: '20230511', time: '10:00:00'},
      { seconds: 1800, date: '20230515', time: '10:00:00'},
      { seconds: 1900, date: '20230516', time: '10:00:00'},
      { seconds: 1600, date: '20230526', time: '10:00:00'},
      { seconds: 1600, date: '20230528', time: '10:00:00'},
      { seconds: 10450, date: '20230530', time: '10:00:00'},
      { seconds: 1300, date: '20230531', time: '10:00:00'},
    ];
    await setItem('recoding-json', JSON.stringify(mooks));
  };

  return (
    <Container>
      <Time seconds={seconds} size={'small'} />
      <Actions>
        <Button
          backgroundColor={isRunning ? 'red' : 'lightgreen'}
          color={isRunning ? 'white' : 'black'}
          text={isRunning ? 'Pause' : 'Start'}
          onClick={() => setIsRunning(!isRunning)}
        />
        {/* <Button
          backgroundColor={'lightblue'}
          color={'black'}
          text={'New lap'}
          onClick={onNewLap}
        /> */}
        <Button
          backgroundColor={'lightblue'}
          color={'black'}
          text={'Complete'}
          disabled={seconds === 0}
          onClick={onNewLap}
        />
        <Button
          backgroundColor={'lightblue'}
          color={'black'}
          text={'초기화'}
          onClick={initData}
        />
      </Actions>
      <Laps laps={laps} />
    </Container>
  );
};
