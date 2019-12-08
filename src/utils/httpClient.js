import store from '../data/store/store';
import HttpError from './HttpError';

const API_ROOT = "https://newsapi.org/v2/";

export const get = async (url, token = null) => {
    const resp = await fetch(`${API_ROOT}${url}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token ? token : store.getState().auth.user.apiKey}`
        }
    });

    if (resp.status !== 200) {
        throw new HttpError(resp.status, `Failed to get ${url}`, await resp.json());
    }

    return await resp.json();
}

export const post = async (url, data) => {
    const resp = await fetch(`${API_ROOT}${url}`, {
        method: 'POST',
        redirect: 'follow',
        headers: {
            'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': `Bearer ${store.getState().auth.user.apiKey}`
        },
        body: JSON.stringify(data)
    });

    if (resp.status !== 200) {
        throw new HttpError(resp.status, `Failed to post to ${url}`);
    }

    return await resp.json();
}

export const put = async (url, data) => {
    const resp = await fetch(`${API_ROOT}${url}`, {
        method: 'PUT',
        redirect: 'follow',
        headers: {
            'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': `Bearer ${store.getState().auth.user.apiKey}`
        },
        body: JSON.stringify(data)
    });

    if (resp.status !== 200) {
        throw new HttpError(resp.status, `Failed to put to ${url}`);
    }

    return await resp.json();
}


export const head = async url => {
    const resp = await fetch(`${API_ROOT}${url}`, {
        method: 'HEAD',
        redirect: 'follow',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Authorization': `Bearer ${store.getState().auth.user.apiKey}`
        }
    })

    if (resp.status !== 200) {
        throw new HttpError(resp.status, `Failed head to ${url}`);
    }

    return resp;
}

export const patch = async (url, data) => {
    const resp = await fetch(`${API_ROOT}${url}`, {
        method: 'PATCH',
        redirect: 'follow',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': `Bearer ${store.getState().auth.user.apiKey}`
        },
        body: JSON.stringify(data)
    })

    if (resp.status !== 200) {
        throw new HttpError(resp.status, `Failed patch to ${url}`);
    }

    return resp;

}

export const deletee = async (url) => {
    const resp = await fetch(`${API_ROOT}${url}`, {
        method: 'DELETE',
        redirect: 'follow',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Authorization': `Bearer ${store.getState().auth.user.apiKey}`
        }
    })

    if (resp.status !== 200) {
        throw new HttpError(resp.status, `Failed to delete ${url}`);
    }

    return resp;
}
