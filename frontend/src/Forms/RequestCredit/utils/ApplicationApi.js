import axios from "axios";
import config from "../../../config"

const base_url = config.api.url;

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
    const api = "Application/RequestCredit/Create"
    const method = "POST";

    const headers = {
        "Authorization": token,
        "Content-Type": "application/json"
    }

    const response = await request(api, method, headers);
    const data = await response.json();

    return data;
}

export async function LoadSavedProgress(token){
    const api = "Application/RequestCredit/LoadSavedProgress"
    const method = "GET";

    const headers = {
        "Authorization": token,
        "Content-Type": "application/json"
    }

    const response = await request(api, method, headers);
    const data = await response.json();

    if (data.success == 0 && data.message == "No saved progress found"){
        Create(token)
    }

    return data;
}

export async function SaveProgress(token, step, body){
    const api = "Application/RequestCredit/SaveProgress/" + step
    const method = "POST";

    const headers = {
        "Authorization": token,
        "Content-Type": "application/json"
    }

    const response = await request(api, method, headers, body);
    const data = await response.json();

    return data;
}

export async function SaveProgressUploads(token, files){
    const api = "Application/RequestCredit/SaveProgress/uploads"
    const url = base_url + api;

    // upload form data
    const formData = new FormData();
    for (const key in files) {
        formData.append(key, files[key]);
    }

    const headers = {
        "Authorization": token
    };

    // use axios to send form data
    const response = await axios.post(url, formData, {
        headers: headers
    });

    return response;
}

export async function UpdateTime(token, step, body){
    const api = "Application/RequestCredit/UpdateTime/" + step
    const method = "POST";

    const headers = {
        "Authorization": token,
        "Content-Type": "application/json"
    }

    const response = await request(api, method, headers, body);
    const data = await response.json();

    return data;
}

export async function Finish(token){
    const api = "Application/RequestCredit/Finish"
    const method = "POST";

    const headers = {
        "Authorization": token,
        "Content-Type": "application/json"
    }

    const response = await request(api, method, headers);
    const data = await response.json();

    return data;
}

