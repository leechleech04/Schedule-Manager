import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import colors from '../colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import { setCurrentDate } from '../store';
import { useState, useRef } from 'react';
import { Animated } from 'react-native';

const Container = styled.View`
  flex: 1;
  border: 1px solid ${colors.grey};
`;

const HeaderPressable = styled.Pressable`
  flex-direction: row;
  padding: 20px;
`;

const HeaderText = styled.Text`
  font-size: 36px;
  font-weight: 700;
  color: black;
`;

const DatePickerContainer = styled.View`
  position: absolute;
  top: 50px;
  align-self: center;
`;

const ArrowIconWrapper = styled.View`
  margin-top: 5px;
  margin-left: 5px;
`;

interface RootState {
  currentDate: {
    year: number;
    month: number;
    date: number;
  };
}

const Header = () => {
  const dispatch = useDispatch();

  const currentDate = useSelector((state: RootState) => state.currentDate);

  const onDateChange = (_: any, selectedDate: Date | undefined) => {
    if (selectedDate === undefined) {
      return;
    }
    dispatch(
      setCurrentDate({
        year: selectedDate.getFullYear(),
        month: selectedDate.getMonth() + 1,
        date: selectedDate.getDate(),
      })
    );
  };

  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const rotateArrow = useRef(new Animated.Value(0)).current;

  return (
    <Container>
      <HeaderPressable
        onPress={() => {
          setIsDatePickerVisible((prev) => !prev);
          Animated.timing(rotateArrow, {
            toValue: isDatePickerVisible ? 0 : 180,
            duration: 300,
            useNativeDriver: true,
          }).start();
        }}
      >
        <HeaderText>
          {currentDate.year}.{currentDate.month}
        </HeaderText>
        <ArrowIconWrapper>
          <Animated.View
            style={{
              transform: [
                {
                  rotate: rotateArrow.interpolate({
                    inputRange: [0, 180],
                    outputRange: ['0deg', '180deg'],
                  }),
                },
              ],
            }}
          >
            <MaterialIcons name="keyboard-arrow-down" size={36} color="black" />
          </Animated.View>
        </ArrowIconWrapper>
      </HeaderPressable>
      {isDatePickerVisible ? (
        <DatePickerContainer>
          <DateTimePicker
            value={
              new Date(
                currentDate.year,
                currentDate.month - 1,
                currentDate.date
              )
            }
            mode="date"
            display="spinner"
            onChange={onDateChange}
            locale="ko"
          />
        </DatePickerContainer>
      ) : null}
    </Container>
  );
};

export default Header;
