import { View } from 'react-native';
import Calender from './components/Calender';
import Header from './components/Header';
import styled from 'styled-components/native';
import colors from './colors';

const Background = styled.View`
  flex: 1;
  padding: 80px 10px;
  background-color: ${colors.white};
`;

const Container = styled.View`
  flex: 1;
`;

const App = () => {
  return (
    <Background>
      <Container>
        <Header />
        <Calender />
      </Container>
    </Background>
  );
};

export default App;
