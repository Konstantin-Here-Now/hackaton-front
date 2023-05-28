import { HEADERS, POST } from "../utils/methods";
import { JOB_ADD_RES_URL, JOB_ADD_URL, JOB_GET_RES_URL } from "./JobUrl";


export class JobAPi {
    
    async addJob(job_name, salary, exp, emploitment, company, description, tasks, important, plus, conditions, key_skills, city, token){
        const body = JSON.stringify({
            "job_name": job_name,
            "salary": salary,
            "requiered_exp": requiered_exp,
            "emploitment" : emploitment,
            "company": company,
            "description": description,
            "tasks": tasks,
            "important": important,
            "plus": plus,
            "conditions": conditions,
            "key_skills": key_skills,
            "city": city
        })
        const rawRes = await fetch(JOB_ADD_URL+token, {
            method: POST,
            headers: HEADERS,
            body: body,
        });
        const content = await rawRes.json();
        console.log(content);
        return content; 
    }

    async getJob(){
        const rawRes = await fetch(JOB_GET_URL, {
            method: GET,
            headers: HEADERS,
        });
        const content = await rawRes.json();
        console.log(content);
        return content;
    }


    async jobUpdateStatusRes(job_id, status, token){
        const body = JSON.stringify({
            "job_id": job_id,
            "status": status,
        });
        const rawRes = await fetch(JOB_UPDATE_RES_URL, {
            method: PUT,
            headers: HEADERS,
            body: body
        });
        const content = await rawRes.json();
        console.log(content);
        return content;
    }

    async jobAddResponse(job_id){
        const body = JSON.stringify({
            "job_id": job_id
        });
        const rawRes = await fetch(JOB_ADD_RES_URL, {
            method: POST, 
            headers: HEADERS,
            body: body
        });
        const content = await rawRes.json();
        return content;
    }

    async jobGetResponse(token){
        const rawRes = await fetch(JOB_GET_RES_URL+token, {
            method: GET,
            headers: HEADERS,
        });
        const content = await rawRes.json();
        console.log(content);
        return content;
    }
    
}

