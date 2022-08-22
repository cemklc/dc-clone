export const validateLoginForm = ({ mail, password }) => {
    const isMailValid = validateMail(mail);
    const isPasswordValid = validatePassword(password);

    return isMailValid && isPasswordValid;
};

const validatePassword = (password) => {
    return password.length > 5 && password.length < 13;
};

export const validateMail = (mail) => {

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    return emailPattern.test(mail);
};

const validateUsername = (username) => {
    return username.length > 2 && username.length < 13;
}

export const validateRegisterForm = ({ mail, password, username }) => {
    const isMailValid = validateMail(mail);
    const isPasswordValid = validatePassword(password);
    const isUsernameValid = validateUsername(username);

    return isMailValid && isPasswordValid && isUsernameValid;
};