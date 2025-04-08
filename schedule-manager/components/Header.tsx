import styled from 'styled-components/native';
import colors from '../colors';

const Container = styled.View`
  flex: 1;
  border: 1px solid ${colors.grey};
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 36px;
  font-weight: 600;
`;

const Header = () => {
  return (
    <Container>
      <Text>2025.04</Text>
    </Container>
  );
};

export default Header;
