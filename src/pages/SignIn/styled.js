import styled from "styled-components";

export const Form = styled.form`
    padding: 0 20px;
`;
export const FormWrapper = styled.div`
    max-width: 415px;
    background: #ffffff;
    box-shadow: 0px 6px 50px rgba(217, 229, 225, 0.7);
    border-radius: 20px;
    padding: 38px 10px;
    margin: 0 auto;
    margin-top: 100px;
`;
export const Input = styled.input`
    height: 45px;
    width: 100%;
    color: #3b5983;
    line-height: 16px;
    border: 2px solid #e9f2ff;
    border-radius: 15px;
    padding-left: 25px;
    margin-bottom: 30px;
`;
export const Button = styled.button`
    text-align: center;
    width: 100%;
    cursor: pointer;
    padding: 5px;
    color: #fff;
    background-color: #0000ff;
`;
export const Title = styled.h1`
    margin-bottom: 10px;
    font-size: 20px;
    color: #000000;
`;
export const InputWrapper = styled.div`
    position: relative;
`;
export const Error = styled.i`
    color: #ff0000;
    position: absolute;
    bottom: 15px;
    left: 15px;
`;
