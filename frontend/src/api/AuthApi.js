import { HEADERS, POST } from "../utils/methods";
import { CHANGE_PASSWORD_URL, LOGIN_URL, SIGN_URL } from "./AuthUrl";


export class AuthApi {
    async sign(email, password, role){
        const body =  JSON.stringify({"email" :email, "password": password, "role": role});
        const rawRes = await fetch(SIGN_URL, {
            method: POST,
            headers: HEADERS,
            body: body
            });
        const content = await rawRes.json();
        console.log(content);
        return content;
    }

    async login(email, password){
        const body = JSON.stringify({"email": email, "password": password});
        const rawRes = await fetch(LOGIN_URL, {
            method: POST,
            headers: HEADERS,
            body: body
            });
        const content = await rawRes.json();
        console.log(content);
        return content;
    }

    async changePassword(email, old_password, new_password) {
        const body = JSON.stringify({"email": email, "old_password": old_password, "new_password": new_password});
        const rawRes = await fetch(CHANGE_PASSWORD_URL, {
            method: POST,
            headers: HEADERS,
            body: body,
        });
        const content = await rawRes.json();
        console.log(content);
        return content;
        
    }
}




// "email": "test@mail.ru",
//     "old_password": "lol",
//     "new_password": "kek"