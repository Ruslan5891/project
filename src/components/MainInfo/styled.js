import React from "react";
import styled from "styled-components";

export const Titled = styled.h2`
    text-transform: uppercase;
    font-size: 28px;
`;
export const TitletDescr = styled.p`
    margin-top: 15px;
    font-size: 16px;
`;
export const Wrapper = styled.div`
    min-height: 500px;
    background-image: url(/images/stragi1.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction:column;
    justify-content: end;
    padding-bottom:20px;
}

`;
export const Container = styled.div`
    width: 100%;
    min-width: 320px;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 10px;
`;
