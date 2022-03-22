import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import {Button} from '../../components/Button';

import {
  Container,
  Header,
  Title,
  Content,
  ProductContainer,
  ProductList,
  Product,
  ProductImage,
  ProductTitleContainer,
  ProductTitle,
  ProductPriceContainer,
  ProductSinglePrice,
  TotalContainer,
  ProductPrice,
  ProductQuantity,
  ActionContainer,
  ActionButton,
  FooterTotal,
  TotalCar,
  Total,
  TotalValue,
  Frete,
} from './styles';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

type NavigationProps = {
  navigate: (screen: string) => void;
};

export function Home() {
  const navigation = useNavigation<NavigationProps>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadData() {
    try {
      const response = await api.get('/products');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, [products]);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Container>
        <Header>
          <Title>Meu carrinho</Title>
        </Header>

        <Content>
          <ProductContainer>
            <ProductList
              data={products}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({item}: {item: Product}) => (
                <Product>
                  <ProductImage source={{uri: item.image_url}} />
                  <ProductTitleContainer>
                    <ProductTitle>{item.title}</ProductTitle>
                    <ProductPriceContainer>
                      <ProductSinglePrice>R$ {item.price}</ProductSinglePrice>

                      <TotalContainer>
                        <ProductQuantity>{`${item.quantity}x`}</ProductQuantity>

                        <ProductPrice>
                          R$ {item.price * item.quantity}
                        </ProductPrice>
                      </TotalContainer>
                    </ProductPriceContainer>
                  </ProductTitleContainer>
                  <ActionContainer>
                    <ActionButton
                      // onPress={() => handleIncrement(item.id)}>
                      onPress={() => {}}>
                      <Icon name="plus" color="#1e81b0" size={16} />
                    </ActionButton>
                    <ActionButton
                      // onPress={() => handleDecrement(item.id)}>
                      onPress={() => {}}>
                      <Icon name="minus" color="#1e81b0" size={16} />
                    </ActionButton>
                  </ActionContainer>
                </Product>
              )}
            />
          </ProductContainer>
        </Content>
        <FooterTotal>
          <TotalCar>
            <Total>Total</Total>
            <TotalValue>R$10</TotalValue>
          </TotalCar>
          <Frete>Parabéns, sua compra tem frete grátis !</Frete>
        </FooterTotal>

        <Button
          title="Finalizar compra"
          onPress={() => navigation.navigate('Register')}
        />
      </Container>
    </>
  );
}
