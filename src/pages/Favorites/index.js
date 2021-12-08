import { useSelector } from "react-redux";
import { Title, Wrapper, Description, OLElement, LIElement } from "./styled";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const Favorites = () => {
    const navigation = useNavigate();
    const isLogin = useSelector((state) => state.authorization.isLogin);

    useEffect(() => {
        if (!isLogin) {
            navigation("/signin");
        }
    }, []);

    const films = useSelector((state) => state.authorization.userProfile.favorites);
    return (
        <>
            <Wrapper>
                {films ? (
                    <>
                        <Title> Your added to favorites films with id: </Title>
                        <OLElement>
                            {films.map((film) => (
                                <LIElement key={uuidv4()}>
                                    <Description style={{ display: "block", height: "100%" }}> {film} </Description>
                                </LIElement>
                            ))}
                        </OLElement>
                    </>
                ) : (
                    <Title>You dont have any favorites</Title>
                )}
            </Wrapper>
        </>
    );
};
