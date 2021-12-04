import { useForm } from "react-hook-form";
import { Button, Input, Title, Form, InputWrapper, FormWrapper } from "./styled";
export const Registration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <FormWrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Title>Sign Up</Title>
                <InputWrapper>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Name"
                        {...register("firstName", { pattern: /^[a-z0-9_-]{3,16}$/ })}
                    />
                    {errors.username && <p>{errors.username.message}</p>}
                </InputWrapper>
                <InputWrapper>
                    <Input
                        type="text"
                        placeholder="Surname"
                        name="surname"
                        {...register("surName", { pattern: /^[a-z0-9_-]{3,16}$/ })}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        {...register("email", { pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ })}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Input
                        type="password"
                        placeholder="Password"
                        name="password"
                        {...register("password", { pattern: /^[a-z0-9_-]{6,18}$/ })}
                    />
                </InputWrapper>

                <Button type="submit">Sign Up</Button>
            </Form>
        </FormWrapper>
    );
};
