export const MyLogger = (store) => (next) => (action) => {
    if (action.type !== "userStatus/checkValidity") {
        return next(action);
    }
    const users = JSON.parse(localStorage.getItem("allUsers"));
    const { email, password } = action.payload;
    users.forEach((user) => {
        if (user.email === email && user.password === password) {
            action.payload = user;
            localStorage.setItem("currentUser", JSON.stringify(user));
            return next(action);
        } else {
            return null;
        }
    });
};
