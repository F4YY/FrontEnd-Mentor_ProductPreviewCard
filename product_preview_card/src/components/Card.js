import React from 'react';
import { CardImage, CardInfo, ItemCategory, Title, Description, Price, DiscPrice, PrevPrice, StyledButton, IconButton } from './styled/Card.styled';
import imagedesktop from './images/image-product-desktop.jpg';
import imagemobile from './images/image-product-mobile.jpg';
import { Container } from './styled/Container.styled';
import Cart from './images/icon-cart.svg';

export const Card = () => {
    const desktop={imagedesktop}
  return (
        <Container>
            <CardImage src={desktop?imagedesktop:imagemobile} alt="" />
            <CardInfo>
                <ItemCategory>
                    <p>perfume</p>
                </ItemCategory>
                <Title>
                    <h1>Gabrielle Essence Eau De Parfum</h1>
                </Title>
                <Description>
                    <p>
                        A floral, solar and voluptuous interpretation composed by Olivier Polge,
                        Perfumer-Creator for the House of CHANEL.
                    </p>
                </Description>
                <Price>
                    <DiscPrice>
                        $149.99
                    </DiscPrice>
                    <PrevPrice>
                        $169.99
                    </PrevPrice>
                </Price>
                <StyledButton>
                    <IconButton src={Cart} alt='cart' />
                    Add to cart
                </StyledButton>
            </CardInfo>
        </Container>
  )
}
