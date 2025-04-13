import styled from 'styled-components/native';
import Header from './Header';

const Container = styled.View`
  flex: 1;
`;

const Body = styled.View``;

const Calender = () => {
  return (
    <Container>
      <Header />
      <Body></Body>
    </Container>
  );
};

export default Calender;
