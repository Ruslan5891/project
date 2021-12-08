import { OLElement, LIElement, Wrapper, Description, Title } from "./styled";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";

export const History = () => {
    const navigate = useNavigate();
    const userHistory = useSelector((state) => state.authorization.userProfile.history);
    const isLogin = useSelector((state) => state.authorization.isLogin);

    useEffect(() => {
        if (!isLogin) {
            navigate("/signin");
        }
    }, []);

    return (
        <Wrapper>
            {userHistory ? (
                <>
                    <Title> Your history search: </Title>
                    <OLElement>
                        {userHistory.map((text) => (
                            <LIElement key={uuidv4()}>
                                <Description style={{ display: "block", height: "100%" }}> {text} </Description>
                            </LIElement>
                        ))}
                    </OLElement>
                </>
            ) : (
                <Title>You dont have any history request</Title>
            )}
        </Wrapper>
    );
};
