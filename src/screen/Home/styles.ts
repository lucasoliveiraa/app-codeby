import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(100)}px;
  background-color: #fff;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 10px;
  border-bottom-width: 2px;
  border-color: #eeeee9;
`;

export const Title = styled.Text`
  color: #000;
  font-size: ${RFValue(24)}px;
  font-family: 'Poppins-Bold';
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-between;
  padding: 16px;
  padding-bottom: 0;
`;

export const ProductContainer = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 5px;
  flex-direction: row;
`;

export const ProductList = styled(FlatList)`
  width: 100%;
  flex: 1;
`;

export const Product = styled.View`
  background: #fff;
  padding: 15px 10px;
  border-radius: 5px;
  margin: 5px 0;
  flex-direction: row;
  border-width: 2px;
  border-color: #eee;
`;

export const ProductImage = styled.Image`
  height: 92px;
  width: 92px;
`;

export const ProductTitleContainer = styled.View`
  font-size: 16px;
  margin-left: 5px;
`;

export const ProductTitle = styled.Text`
  width: 80%;
  color: #000;
  font-size: ${RFValue(10)}px;
  font-family: 'Poppins-Bold';
`;

export const ProductPriceContainer = styled.View`
  flex-direction: column;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
`;

export const ProductSinglePrice = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  color: #a0a0b3;
  margin-top: 8px;
`;

export const ProductPrice = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 12px;
  color: #1e81b0;
`;

export const ProductQuantity = styled.Text`
  font-family: 'Poppins-Bold';
  margin-right: 10px;
  font-size: 12px;
  color: #1e81b0;
`;

export const ActionContainer = styled.View`
  align-self: flex-end;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
`;

export const ActionButton = styled.TouchableOpacity`
  background: rgba(30, 129, 170, 0.1);
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 5px;
`;

export const FooterTotal = styled.View`
  /* width: 100%; */
  padding: 16px;
  border-bottom-width: 2px;
  border-top-width: 2px;
  border-bottom-color: #eee;
  border-top-color: #eee;
  margin: 5px 0;
`;

export const TotalCar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Total = styled.Text`
  color: #000;
  font-size: ${RFValue(16)}px;
  font-family: 'Poppins-Bold';
`;

export const TotalValue = styled.Text`
  color: #000;
  font-size: ${RFValue(16)}px;
  font-family: 'Poppins-Bold';
`;

export const Frete = styled.Text`
  margin-top: 5px;
  background: rgba(30, 176, 38, 0.1);
  border-radius: 10px;
  text-align: center;
  color: #157b1b;
  font-size: ${RFValue(14)}px;
  font-family: 'Poppins-Bold';
`;

export const FooterButton = styled.View`
  padding: 16px;
`;

export const LoadContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
