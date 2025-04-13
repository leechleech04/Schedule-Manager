import styled from 'styled-components/native';
import Header from './Header';
import DayRow from './DayRow';
import colors from '../colors';
import DateTable from './DateTable';

const Container = styled.View`
  flex: 1;
`;

const Body = styled.View`
  border: 1px solid ${colors.grey};
`;

const Calender = () => {
  return (
    <Container>
      <Header />
      <Body>
        <DayRow />
        <DateTable />
      </Body>
    </Container>
  );
};

export default Calender;
