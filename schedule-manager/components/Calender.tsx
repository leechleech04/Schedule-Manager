import styled from 'styled-components/native';
import Header from './Header';

const Container = styled.View`
  flex: 1;
`;

const Calender = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Calender;
