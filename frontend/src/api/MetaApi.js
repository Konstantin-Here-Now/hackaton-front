import { GET_USER_META, META_ADD_URL } from "./MetaUrl";


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
        const rawRes = await fetch(META_ADD_PLACE_URL+token, {
            method: POST,
            headers: HEADERS,
            body: body,
        });
        const content = await rawRes.json();
        return content;
    }

    async getUserMeta(token){
        const rawRes = await fetch(GET_USER_META+token, {
            method: GET,
            headers: HEADERS,
        });
        const content = await rawRes.json();
        return content;
    }

}


