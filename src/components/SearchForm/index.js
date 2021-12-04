import { IoSearch } from "react-icons/io5";
import { Form, Label, Input, Button } from "./styled";


export const SearchForm = () => {
    return (
        <Form>
            <Label>
                <IoSearch style={{ position: "absolute", left: "20px" }} fill="#fff" />
                <Input type="search" placeholder="Search additional films" />
                <Button> Search </Button>
            </Label>
        </Form>
    );
};
