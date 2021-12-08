import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkValidity } from "../../reducers/statusSlice";
import { Button, Input, Title, Form, InputWrapper, FormWrapper, Error } from "./styled";

export const SignIn = () => {
    const history = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        dispatch(checkValidity(data));
        history('/');
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
                            {...register("email", { pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, required: true })}
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
                        {errors.password && <Error>Не коректный пароль </Error>}
                    </InputWrapper>

                    <Button type="submit">Sign In</Button>
                </Form>
            </FormWrapper>
        </>
    );
};
