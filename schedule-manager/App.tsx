import Calender from './components/Calender';
import styled from 'styled-components/native';
import colors from './colors';
import { Provider } from 'react-redux';
import store from './store';

const Background = styled.View`
  flex: 1;
  padding: 70px 10px;
  background-color: ${colors.white};
`;

const App = () => {
  return (
    <Provider store={store}>
      <Background>
        <Calender />
      </Background>
    </Provider>
  );
};

export default App;
