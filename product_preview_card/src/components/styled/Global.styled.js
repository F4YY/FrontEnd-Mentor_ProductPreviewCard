import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,100&family=Montserrat:wght@100&family=Open+Sans:wght@600&family=Prompt:wght@300&family=Roboto&family=Source+Sans+Pro&family=Ubuntu&display=swap');

    *{
        margin: 0;
        padding: 0;
    }

    body{
        background-color: hsl(30, 38%, 92%);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 600px;
        height: auto;
        background-color: #fff;
        border-radius: 15px;
        margin: 20vh auto;
    }

    .product-img{
        width: 100%;
        height: auto;
        border-radius: 15px 0 0 15px;
    }

    .product-info{
        width: 100%;
    }

    .product-name{
        color: hsl(228, 12%, 48%);
        padding: 2em 30px;
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 5px;
    }

    .product-title{
        color: hsl(212, 21%, 14%);
        font-family: 'Fraunces', serif;
        font-weight: 900;
        padding: 0 30px;
    }

    .product-description{
        color: hsl(228, 12%, 48%);
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        padding: 1.5em 30px;
    }

    .price-after{
        display: inline;
        color: hsl(158, 36%, 37%);
        margin: 1.5em 30px;
        font-size: 30px;
    }

    .price-before{
        display: inline;
        color: hsl(228, 12%, 48%);
        text-decoration: line-through;
        font-size: 15px;
        position: relative;
        top: -12px;
    }

    .cart-button{
        width: 200px;
        height: auto;
        font-family: 'Montserrat', sans-serif;
        font-weight: 900;
        color: #fff;
        background-color: hsl(158, 36%, 37%);
        border-radius: 15px;
        padding: 1em;
        margin: 2.5em auto;
        text-align: center;
    }

    .cart-button:hover{
        background-color: hsl(158, 28%, 22%);
        cursor: pointer;
    }

    .mobile-only{
        display: none;
    }


    @media (max-width: 600px) {
        .container{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 600px;
            height: auto;
            background-color: #fff;
            border-radius: 15px;
            margin: 20vh 2em;
        }

        .product-img{
            width: 100%;
            height: auto;
            border-radius: 15px 15px 0 0;
        }

        .cart-button{
            width: 300px;
            height: auto;
            font-family: 'Montserrat', sans-serif;
            font-weight: 900;
            color: #fff;
            background-color: hsl(158, 36%, 37%);
            border-radius: 15px;
            text-align: center;
        }

        .mobile-only{
            display: block;
        }

        .desktop-only{
            display: none;
        }
    }
`
export default Globalstyles;