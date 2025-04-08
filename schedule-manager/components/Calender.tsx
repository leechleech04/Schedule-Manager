import styled from 'styled-components/native';
import colors from '../colors';

const Container = styled.View`
  flex: 10;
`;

const DayWeek = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid ${colors.grey};
`;

const Day = styled.View`
  flex-grow: 1;
  padding: 5px 0;
`;

const DateWeek = styled.View`
  flex: 2;
  flex-direction: row;
  border: 1px solid ${colors.grey};
`;

const Date = styled.View`
  flex-grow: 1;
`;

const Text = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;

const Calender = () => {
  return (
    <Container>
      <DayWeek>
        <Day>
          <Text style={{ color: 'red' }}>일</Text>
        </Day>
        <Day>
          <Text>월</Text>
        </Day>
        <Day>
          <Text>화</Text>
        </Day>
        <Day>
          <Text>수</Text>
        </Day>
        <Day>
          <Text>목</Text>
        </Day>
        <Day>
          <Text>금</Text>
        </Day>
        <Day>
          <Text style={{ color: 'blue' }}>토</Text>
        </Day>
      </DayWeek>
      <DateWeek>
        <Date>
          <Text>1</Text>
        </Date>
        <Date>
          <Text>2</Text>
        </Date>
        <Date>
          <Text>3</Text>
        </Date>
        <Date>
          <Text>4</Text>
        </Date>
        <Date>
          <Text>5</Text>
        </Date>
        <Date>
          <Text>6</Text>
        </Date>
        <Date>
          <Text>7</Text>
        </Date>
      </DateWeek>
      <DateWeek>
        <Date>
          <Text>1</Text>
        </Date>
        <Date>
          <Text>2</Text>
        </Date>
        <Date>
          <Text>3</Text>
        </Date>
        <Date>
          <Text>4</Text>
        </Date>
        <Date>
          <Text>5</Text>
        </Date>
        <Date>
          <Text>6</Text>
        </Date>
        <Date>
          <Text>7</Text>
        </Date>
      </DateWeek>
      <DateWeek>
        <Date>
          <Text>1</Text>
        </Date>
        <Date>
          <Text>2</Text>
        </Date>
        <Date>
          <Text>3</Text>
        </Date>
        <Date>
          <Text>4</Text>
        </Date>
        <Date>
          <Text>5</Text>
        </Date>
        <Date>
          <Text>6</Text>
        </Date>
        <Date>
          <Text>7</Text>
        </Date>
      </DateWeek>
      <DateWeek>
        <Date>
          <Text>1</Text>
        </Date>
        <Date>
          <Text>2</Text>
        </Date>
        <Date>
          <Text>3</Text>
        </Date>
        <Date>
          <Text>4</Text>
        </Date>
        <Date>
          <Text>5</Text>
        </Date>
        <Date>
          <Text>6</Text>
        </Date>
        <Date>
          <Text>7</Text>
        </Date>
      </DateWeek>
      <DateWeek>
        <Date>
          <Text>1</Text>
        </Date>
        <Date>
          <Text>2</Text>
        </Date>
        <Date>
          <Text>3</Text>
        </Date>
        <Date>
          <Text>4</Text>
        </Date>
        <Date>
          <Text>5</Text>
        </Date>
        <Date>
          <Text>6</Text>
        </Date>
        <Date>
          <Text>7</Text>
        </Date>
      </DateWeek>
    </Container>
  );
};

export default Calender;
