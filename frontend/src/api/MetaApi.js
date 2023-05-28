import {GET_USER_META, META_ADD_PLACE_URL, META_ADD_URL} from "./MetaUrl";
import { HEADERS, POST, GET} from "../utils/methods";

export class MetaApi {
    async addMeta(specialisation, salary, first_name, last_name, city, token) {
        const body = JSON.stringify({
            "spec": {
                "specialisation": specialisation,
                "salary": salary,
            },
            "contacts": {
                "first_name": first_name,
                "last_name": last_name,
                "city": city
            }
        });
        const rawRes = await fetch(META_ADD_UR+token, {
            method: POST,
            headers: HEADERS,
            body: body,
        });
        const content = await rawRes.json();
        console.log(content);
        return content;
    };

    async addPlaceWork([time_start, time_end, specialisation, resbilities], token){
        const body = JSON.stringify([time_start, time_end, specialisation, resbilities]);
        const URL = META_ADD_PLACE_URL+token
        const rawRes = await fetch(URL, {
            method: POST,
            headers: HEADERS,
            body: body,
        });
        const content = await rawRes.json();
        return content;
    }

    async getUserMeta(token){
        let URL = GET_USER_META+token
        const rawRes = await fetch(URL, {
            method: GET,
            headers: HEADERS,
        });
        const content = await rawRes.json();
        console.log(content)
        return content;
    }

    async getRole(token){
        const rawRes = await fetch("http://84.201.175.72:3002/meta/role/"+token, {
            method: GET,
            headers: HEADERS,
        });
        const content = await rawRes.json();
        console.log(content);
        return content;
    }

}


