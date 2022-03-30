import { AES } from "crypto-js";

export const Encrypt = (data) => {
    const encrypted = AES.encrypt(JSON.stringify(data), "mOhL95dmdjdpdYpgYTf8qLmssV5Px7sUpj");
    return encrypted.toString();
};