import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { IoSearch } from "react-icons/io5";
import { SearchContext } from "../../pages/Main";
import { fetchFilms } from "../../reducers/fetchFilmsSlice";
import { setHistory } from "../../reducers/statusSlice";
import { Form, Label, Input, Button, Container, Wrapper } from "./styled";

export const SearchForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const history = useNavigate();
    const dispatch = useDispatch();

    const seachContext = useContext(SearchContext);
    const { setPageNumber, setSearchQuaery } = seachContext;
    const isLogin = useSelector((state) => state.authorization.isLogin);
    const historyFilms = useSelector((state) => state.authorization.userProfile.history);

    const getHistoryData = () => {
        if (historyFilms && historyFilms.length) {
            return historyFilms;
        }
        return [];
    };
    const onSubmit = (data) => {
        if (!isLogin) {
            history("/signin");
            return;
        }

        const { search } = data;

        const historyData = getHistoryData();
        dispatch(setHistory([...historyData, search]));

        setSearchQuaery(search);
        setPageNumber(1);
        const payload = {
            searchQuery: search,
            pageNumber: 1,
        };
        dispatch(fetchFilms(payload));
        reset();
    };
    return (
        <Wrapper>
            <Container>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Label>
                        <IoSearch style={{ position: "absolute", left: "20px", background: "#696969" }} fill="#fff" />
                        <Input type="search" placeholder="Search " {...register("search")} />
                        <Button type="submit"> Search </Button>
                    </Label>
                </Form>
            </Container>
        </Wrapper>
    );
};
