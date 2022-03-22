import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {TouchableOpacity} from 'react-native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  background-color: #127cae;
  border-radius: 5px;
  padding: 16px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  color: #fff;
  font-family: 'Poppins-Bold';
`;
