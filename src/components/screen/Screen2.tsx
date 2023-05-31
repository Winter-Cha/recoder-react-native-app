import React from 'react';
import type {ReactElement} from 'react';
import styled from 'styled-components/native';
import { getItem } from '../../utils/asyncStorage';
import { formatMsecsStringByLocale } from '../../utils/time';
import moment from 'moment';

const Container = styled.View`
  flex: 1;
  // background-color: blue;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledText = styled.Text`
  font-size: 16px;
  // color: white;
`;

type SavedData = {
  seconds: number
  date: string
  time: string
}

function Page(): ReactElement {
  const [total, setTotal] = React.useState(0);
  const [todayTotal, setTodayTotal] = React.useState(0);
  const [weekTotal, setWeekTotal] = React.useState(0);
  const [monthTotal, setMonthTotal] = React.useState(0);
  const [month, setMonth] = React.useState('');
  
  React.useEffect(() => {
    setTotalTime();
  }, []);
  
  const setTotalTime = async () => {
    let data = await getItem('recoding-json');
    let datajson = data ? JSON.parse(data) : [] ;
    let thisMonth = moment().format("MM");
    setMonth(thisMonth);
    // gether total time
    let total = 0;
    let todayTotal = 0;
    let weekTotal = 0;
    let monthTotal = 0;
    datajson.forEach((element: SavedData) => {
      // check element.date to today, this week, this month
      if (element.date === moment().format('YYYYMMDD')) {
        todayTotal += element.seconds;
      }
      if (element.date <= moment().format('YYYYMMDD') && element.date >= moment().subtract(7, 'days').format('YYYYMMDD')) {
        weekTotal += element.seconds;
      }
      if (element.date.substring(4, 6) === thisMonth) {
        monthTotal += element.seconds;
      }
      // add total
      total += element.seconds;
    });
    setTotal(total);
    setTodayTotal(todayTotal);
    setWeekTotal(weekTotal);
    setMonthTotal(monthTotal);
  };

  return (
    <Container>
      <StyledText testID="myText">총 독서시간: </StyledText><StyledText testID="myText">{formatMsecsStringByLocale(total)}</StyledText>
      <StyledText testID="myText">오늘 : </StyledText><StyledText testID="myText">{formatMsecsStringByLocale(todayTotal)}</StyledText>
      <StyledText testID="myText">이번주 : </StyledText><StyledText testID="myText">{formatMsecsStringByLocale(weekTotal)}</StyledText>
      <StyledText testID="myText">{month}달 : </StyledText><StyledText testID="myText">{formatMsecsStringByLocale(monthTotal)}</StyledText>
    </Container>
  );
}

export default Page;
