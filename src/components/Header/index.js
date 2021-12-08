import { useSelector, useDispatch } from "react-redux";
import { changeStatus } from "../../reducers/statusSlice";
import { useEffect } from "react";
import { getAllUsers } from "../../reducers/statusSlice";
import { Link, NavLink } from "react-router-dom";
import { Container, HeaderElem, Wrapper, Button, LoginButton, LogoImg, ButtonWrapper } from "./styled";

export const Header = () => {
    const dispatch = useDispatch();

    const isLogin = useSelector((state) => state.authorization.isLogin);
    const userProfile = useSelector((state) => state.authorization.userProfile);
    const allUsers = useSelector((state) => state.authorization.allUsers);

    const handleChanheStatus = () => {
        dispatch(changeStatus());
    };
    useEffect(() => {
        const searchingUser = allUsers.map((element) =>
            element && element.id === userProfile.id ? { ...userProfile } : element
        );
        dispatch(getAllUsers(searchingUser));
    }, [userProfile]);
    return (
        <div>
            <Wrapper>
                <Container>
                    <HeaderElem>
                        <Link to="/">
                            <LogoImg src="/images/logo.png" alt="logo" />
                        </Link>
                        <ButtonWrapper>
                            {isLogin ? (
                                <>
                                    <LoginButton type="button"> Welcome {userProfile.firstName} </LoginButton>
                                    <NavLink to="/favorites">
                                        <Button type="button"> Favorites </Button>
                                    </NavLink>
                                    <NavLink to="/history">
                                        <Button type="button"> History </Button>
                                    </NavLink>
                                    <Button type="button" onClick={handleChanheStatus}>
                                        Log Out
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <NavLink to="/signin">
                                        <Button type="button"> Sign In</Button>
                                    </NavLink>
                                    <NavLink to="/registration">
                                        <Button type="button"> Registration</Button>
                                    </NavLink>
                                </>
                            )}
                        </ButtonWrapper>
                    </HeaderElem>
                </Container>
            </Wrapper>
        </div>
    );
};
