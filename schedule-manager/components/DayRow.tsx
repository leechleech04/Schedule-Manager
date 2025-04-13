import styled from 'styled-components/native';
import colors from '../colors';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const DayText = styled.Text`
  border: 1px solid ${colors.grey};
  flex-grow: 1;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

const DayRow = () => {
  return (
    <Container>
      <DayText style={{ color: 'red' }}>일</DayText>
      <DayText>월</DayText>
      <DayText>화</DayText>
      <DayText>수</DayText>
      <DayText>목</DayText>
      <DayText>금</DayText>
      <DayText style={{ color: 'blue' }}>토</DayText>
    </Container>
  );
};

export default DayRow;
