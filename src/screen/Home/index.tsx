import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import formatValue from '../../utils/formatValue';

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
  FooterButton,
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

  const total = products.reduce((sumTotal, product) => {
    sumTotal += product.price * product.quantity;

    return sumTotal;
  }, 0);

  async function handleIncrement(product: Product): Promise<void> {
    try {
      const response = await api.put(`/products/${product.id}`, {
        quantity: product.quantity + 1,
        title: product.title,
        image_url: product.image_url,
        price: product.price,
      });

      setProducts(
        products.map(mappedFood =>
          mappedFood.id === product.id ? {...response.data} : mappedFood,
        ),
      );
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDecrement(product: Product): Promise<void> {
    if (product.quantity <= 1) {
      return;
    }

    try {
      const response = await api.put(`/products/${product.id}`, {
        quantity: product.quantity - 1,
        title: product.title,
        image_url: product.image_url,
        price: product.price,
      });

      setProducts(
        products.map(mappedCar =>
          mappedCar.id === product.id ? {...response.data} : mappedCar,
        ),
      );
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

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
                      <ProductSinglePrice>
                        {formatValue(item.price)}
                      </ProductSinglePrice>

                      <TotalContainer>
                        <ProductQuantity>{`${item.quantity}x`}</ProductQuantity>

                        <ProductPrice>
                          {formatValue(item.price * item.quantity)}
                        </ProductPrice>
                      </TotalContainer>
                    </ProductPriceContainer>
                  </ProductTitleContainer>
                  <ActionContainer>
                    <ActionButton onPress={() => handleIncrement(item)}>
                      <Icon name="plus" color="#1e81b0" size={16} />
                    </ActionButton>
                    <ActionButton onPress={() => handleDecrement(item)}>
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
            <TotalValue>{formatValue(total)}</TotalValue>
          </TotalCar>
          {total >= 10 && (
            <Frete>Parabéns, sua compra tem frete grátis !</Frete>
          )}
        </FooterTotal>

        <FooterButton>
          <Button
            title="Finalizar compra"
            onPress={() => navigation.navigate('Register')}
          />
        </FooterButton>
      </Container>
    </>
  );
}
