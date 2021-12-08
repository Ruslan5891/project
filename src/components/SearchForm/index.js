import { IoSearch } from "react-icons/io5";
import { Form, Label, Input, Button, Container, Wrapper } from "./styled";

export const SearchForm = () => {
    return (
        <Wrapper>
            <Container>
                <Form>
                    <Label>
                        <IoSearch style={{ position: "absolute", left: "20px", background: "#696969" }} fill="#fff" />
                        <Input type="search" placeholder="Search " />
                        <Button> Search </Button>
                    </Label>
                </Form>
            </Container>
        </Wrapper>
    );
};
