import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, HeaderWrapper, Button, LoginButton, LogoImg, ButtonWrapper } from "./styled";

export const Header = () => {
    const [logIn, setLogin] = useState(false);
    return (
        <div>
            <Container>
                <HeaderWrapper>
                    <Link to="/favorites">
                        <LogoImg src="/images/logo.png" alt="logo" />
                    </Link>
                    <ButtonWrapper>
                        {logIn ? (
                            <>
                                <LoginButton type="button"> Welcome mister ... </LoginButton>
                                <Button type="button"> Favorites </Button>
                                <Button type="button"> History </Button>
                                <Button type="button"> Log Out</Button>
                            </>
                        ) : (
                            <>
                                <Button type="button"> Sign In</Button>
                                <Button type="button"> Registration</Button>
                            </>
                        )}
                    </ButtonWrapper>
                </HeaderWrapper>
            </Container>
        </div>
    );
};
