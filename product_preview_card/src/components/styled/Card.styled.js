import styled from "styled-components";
import desktopimage from '../images/image-product-desktop.jpg'
import mobileimage from '../images/image-product-mobile.jpg'

export const CardImage = styled.img`
    display: flex;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    width: 50%;
    background-image: url(${desktopimage});
    background-repeat: no-repeat;
    background-size: cover;

    @media only screen and (min-width:641px) and (max-width:768px){
        width:50%;
        background-image: url(${desktopimage});
        background-repeat: no-repeat;
        background-size: cover;
    }

    @media only screen and (max-width:640px){
        width:100%;
        height:375px;
        margin-top:10px;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        border-bottom-left-radius: 0px;
        background-image: url(${mobileimage});
        background-repeat: no-repeat;
        background-size: cover;
    }
`
export const CardInfo = styled.section`
    display: flex;
    flex-direction: column;
    width:50%;
    padding: 20px;
    row-gap:20px;

    @media only screen and (min-width:641px) and (max-width:768px){
        width:42%;
    }

    @media only screen and (max-width:640px){
        width:80%;
        height:250px;
        margin-bottom:20px;
    }
`
export const ItemCategory = styled.p`
    font-size:16px;
    color:hsl(228, 12%, 48%);
    letter-spacing:4px;
    text-transform:uppercase;
    font-weight:500;
    font-family: 'Montserrat', sans-serif;

    @media only screen and (min-width:641px) and (max-width:768px){
        font-size:14px;
        color:hsl(228, 12%, 48%);
        letter-spacing:2px;
        text-transform:uppercase;
        font-weight:200;
        font-family: 'Montserrat', sans-serif;
    }

    @media only screen and (max-width:640px){
        font-size:12px;
        color:hsl(228, 12%, 48%);
        letter-spacing:1px;
        text-transform:uppercase;
        font-weight:100;
        font-family: 'Montserrat', sans-serif;
    }
`
export const Title = styled.h1`
    color:hsl(212, 21%, 14%);
    font-family:Fraunces,serif;
    font-weight:700;

    @media only screen and (min-width:641px) and (max-width:768px){
        color:hsl(212, 21%, 14%);
        font-family:Fraunces,serif;
        font-weight:200;
        font-size:16px;

    @media only screen and (max-width:640px){
        color:hsl(212, 21%, 14%);
        font-family:Fraunces,serif;
        font-weight:200;
        font-size:14px;
`
export const Description = styled.p`
    font-size:14px;
    font-weight: 500;
    line-height:1.5;
    color:hsl(228, 12%, 48%);
    font-family:Montserrat,sans-serif;
    letter-spacing:1px;

    @media only screen and (min-width:641px) and (max-width:768px){
        font-size:12px;
        font-weight: 300;
        line-height:1.3;
        color:hsl(228, 12%, 48%);
        font-family:Montserrat,sans-serif;
        letter-spacing:1px;
    }

    @media only screen and (max-width:641px){
        font-size:12px;
        font-weight: 200;
        line-height:1.3;
        color:hsl(228, 12%, 48%);
        font-family:Montserrat,sans-serif;
        letter-spacing:1px;
    }
`
export const Price = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    gap:24px;
`
export const DiscPrice = styled(Price)`
    font-size:30px;
    color: hsl(158, 36%, 37%);
    font-weight: 700;
    font-family:Roboto,sans-serif;
`
export const PrevPrice = styled(Price)`
    font-size:14px;
    color: hsl(228, 12%, 48%);
    text-decoration: line-through;
`
export const StyledButton = styled.button`
    display:flex;
    font-size:15px;
    width:100%;
    padding:15px 0;
    margin:0 auto;
    justify-content:center;
    align-items:center;
    color:#fff;
    font-weight:700;
    border-radius:7px;
    background-color:hsl(158, 36%, 37%);
    font-family:Montserrat,sans-serif;
    border:none;
    cursor:pointer;
    &:hover{
        opacity:0.9;
        transform:scale(0.98);
    }
`
export const IconButton = styled.img`
    margin-right:7px;
`