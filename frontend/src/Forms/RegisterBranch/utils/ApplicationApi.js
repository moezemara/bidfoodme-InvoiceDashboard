import axios from "axios";

const base_url = "http://localhost:3001/v1/";

export async function request(api, method, headers, body = []) {
    const url = base_url + api;

    const request_action = await fetch(url, {
        method: method,
        body: method === "GET" ? null : JSON.stringify(body),
        headers: headers
    });

    return request_action;
}

export async function Create(token){
    const api = "Application/RegisterBranch/Create"
    const method = "POST";

    const headers = {
        "authorization": token,
        "Content-Type": "application/json"
    }

    const response = await request(api, method, headers);
    const data = await response.json();

    return data;
}

export async function LoadSavedProgress(token){
    const api = "Application/RegisterBranch/LoadSavedProgress"
    const method = "GET";

    const headers = {
        "authorization": token,
        "Content-Type": "application/json"
    }

    const response = await request(api, method, headers);
    const data = await response.json();

    return data;
}

export async function SaveProgress(token, step, body){
    const api = "Application/RegisterBranch/SaveProgress/" + step
    const method = "POST";

    const headers = {
        "authorization": token,
        "Content-Type": "application/json"
    }

    const response = await request(api, method, headers, body);
    const data = await response.json();

    return data;
}

export async function SaveProgressUploads(token, files){
    const api = "Application/RegisterBranch/SaveProgress/uploads"
    const url = base_url + api;

    // upload form data
    const formData = new FormData();
    for (const key in files) {
        formData.append(key, files[key]);
    }

    const headers = {
        "authorization": token
    };

    // use axios to send form data
    const response = await axios.post(url, formData, {
        headers: headers
    });

    return response;
}

export async function UpdateTime(token, step, body){
    const api = "Application/RegisterBranch/UpdateTime/" + step
    const method = "POST";

    const headers = {
        "authorization": token,
        "Content-Type": "application/json"
    }

    const response = await request(api, method, headers, body);
    const data = await response.json();

    return data;
}

export async function Finish(token){
    const api = "Application/RegisterBranch/Finish"
    const method = "POST";

    const headers = {
        "authorization": token,
        "Content-Type": "application/json"
    }

    const response = await request(api, method, headers);
    const data = await response.json();

    return data;
}
