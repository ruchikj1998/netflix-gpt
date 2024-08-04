export const validateSignIn = (email, password) => {
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!validEmail) return "Email is not valid!";
    if(!validPassword) return "Password is not valid!";

    return null;
}

export const validateFullName = (fullName) => {
   
    const validFullName = /^([a-zA-z,/.-]+)\s([a-zA-z,/.-]+)$/.test(fullName);

    if(!validFullName) return "Enter valid Full name!";

    return null;
}