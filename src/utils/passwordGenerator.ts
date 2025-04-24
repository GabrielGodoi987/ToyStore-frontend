const words = "abcdefghijklmnopqerstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
const numbers = "0123456789";
const allChars = words + specialChars + numbers;
const allCharsLength = allChars.length;

const passgenerator = () => {
    const passwordLength = Math.floor(Math.random() * 5) + 8;
    let password = "";
    
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allCharsLength);
        password += allChars[randomIndex];
    }
    
    return password;
}

export default passgenerator;