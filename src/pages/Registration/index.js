import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProfile } from "../../reducers/statusSlice";
import { Button, Input, Title, Form, InputWrapper, FormWrapper, Error } from "./styled";

export const Registration = () => {
    const history = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        dispatch(addProfile(data));
        history("/");
    };

    return (
        <>
            <FormWrapper>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Title>Registration</Title>
                    <InputWrapper>
                        <Input
                            type="text"
                            name="firstName"
                            placeholder="Name"
                            {...register("firstName", { pattern: /^[a-zA-Z]{3,}$/, required: true })}
                        />
                        {errors.firstName && <Error>Введите коректное имя пользователя</Error>}
                    </InputWrapper>
                    <InputWrapper>
                        <Input
                            type="text"
                            placeholder="Surname"
                            name="surname"
                            {...register("surName", { pattern: /^[a-zA-Z]{3,}$/, required: true })}
                        />
                        {errors.surName && <Error>Введите коректную фамилию</Error>}
                    </InputWrapper>
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
                        {errors.password && <Error>Не надежный пароль </Error>}
                    </InputWrapper>

                    <Button type="submit">Sign Up</Button>
                </Form>
            </FormWrapper>
        </>
    );
};
