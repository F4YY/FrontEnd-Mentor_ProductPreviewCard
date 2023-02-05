import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width:600px;
    background-color:#fff;
    align-items:center;
    border-radius: 10px;
    justify-content:center;
    margin: 20px auto;

    @media only screen and (min-width:641px) and (max-width:768px){
        width:470px;
    }

    @media only screen and (max-width:640px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 90%;
        height: auto;
        background-color: #fff;
        border-radius: 15px;
    }
`