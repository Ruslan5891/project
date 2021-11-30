import styled from "styled-components";
export const Form = styled.form``;
export const Label = styled.label`
    padding: 3px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    width: 100%;
    borded: 1px solid black;
    position: relative;
`;
export const Input = styled.input`
    border: none;
    outline: none;
    width: 100%;
    height: 40px;
    background: #000;
    padding: 0 40px;
    border-radius: 30px;
    color: #fff;
`;
export const Button = styled.button`
    position: absolute;
    right: 20px;
    border: 2px solid #fff;
    color: #fff;
    font-weight: 700;
    background-color: #000;
    border-radius: 30px;
    padding: 5px 20px;
    &:hover {
        cursor: pointer;
        background-color: #fff;
        color: #000;
    }
`;
