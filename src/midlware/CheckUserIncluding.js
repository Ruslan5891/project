import { setupError } from "../reducers/statusSlice";
export const CheckUserIncluding = (store) => (next) => (action) => {
    if (action.type !== "userStatus/checkValidity") {
        return next(action);
    }

    const { data, history, allUsers } = action.payload;
    const { email, password } = data;
    const { dispatch } = store;
    let isFindUser = false;
    allUsers?.forEach((user) => {
        if (user.email === email && user.password === password) {
            action.payload = user;
            history("/");
            isFindUser = true;
            return next(action);
        } else {
            isFindUser = false;
            return null;
        }
    });

     if (isFindUser) {
        dispatch(setupError(" "));
     } else {
        dispatch(setupError("Введены не верные данные логина или пароль"));
     }
};
