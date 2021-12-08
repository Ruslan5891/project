import { useForm } from "react-hook-form";
import { setupError } from "../../reducers/statusSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkValidity } from "../../reducers/statusSlice";

import { Button, Input, Title, Form, InputWrapper, FormWrapper, Error } from "./styled";

export const SignIn = () => {
    const history = useNavigate();
    const dispatch = useDispatch();

    const errorMessage = useSelector((state) => state.authorization.errorMessage);
    const allUsers = useSelector((state) => state.authorization.allUsers);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    useEffect(() => {
        dispatch(setupError(" "));
    }, []);
    
    const onSubmit = (data) => {
        const payload = {
            data,
            history,
            allUsers,
        };
        dispatch(checkValidity(payload));
    };

    return (
        <>
            <FormWrapper>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Title>Sign In</Title>
                    <InputWrapper>
                        <Input
                            type="email"
                            placeholder="Email"
                            name="email"
                            {...register("email", {
                                pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                                required: true,
                            })}
                        />
                        {errors.email && <Error>Введите коректный email</Error>}
                    </InputWrapper>
                    <InputWrapper>
                        <Input
                            type="password"
                            placeholder="Password"
                            name="password"
                            {...register("password", { pattern: /^[a-z0-9_-]{6,18}$/, required: true })}
                        />
                        {errors.password ? (
                            <Error> Не валидный пароль </Error>
                        ) : (
                            errorMessage && <Error>{errorMessage}</Error>
                        )}
                    </InputWrapper>

                    <Button type="submit">Sign In</Button>
                </Form>
            </FormWrapper>
        </>
    );
};
