import styled from "styled-components";

export const ULElement = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
export const LIElement = styled.li`
    
    color: #000000;
    min-height: 320px;
    width: 18%;
    margin-bottom: 20px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 25px
`;
export const Title = styled.h2`
    margin: 20px 0;
    color: #000000;
    text-transform: uppercase;
    font-size: 16px;
`;

export const Container = styled.div`
    width: 100%;
    min-width: 320px;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 10px;
    padding-bottom: 20px;
`;
