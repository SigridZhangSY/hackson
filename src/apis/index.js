import axios from 'axios';

const BASE_URL = 'http://localhost:1337/launcher.aisensiy.com/';
const BASE_URL2 = 'http://localhost:1337/controller.aisensiy.com';

export const fetcher = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getClusters = (page, perPage) => {
    return fetcher.get('/clusters', {
        params:{
            'page': page,
            'per-page':perPage
        }
    }).then((res) => {
        return res.data;
    })
};

export const fetchCluster = (id) => {
    return fetcher.get('/clusters/' + id)
        .then(res => (
            res.data
        ));
};

export const postCluster = (value) => {
    return fetcher.post('/clusters', value)
        .then(res => {
            return res;
        })
};

export const putCluster = (id, value) => {
    return fetcher.put('/clusters/' + id, value)
        .then(res => {
            return res;
        })
};

export const deleteCluster = (id) => {
    return fetcher.delete('/clusters/' + id)
        .then((res) => {
            return res;
        })
};

export const fetcher2 = axios.create({
    baseURL: BASE_URL2,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const loginValidator = (email, password) => {
    return fetcher2.post('/auths', {
        email,
        password
    }).then(res => {
        return Promise.resolve(res.data);
    });
};

export const signUpValidator = (email, password) => {
    return fetcher2.post('/users', {
        email,
        password
    })
        .then((res) => {
            return res
        })
};

export const pagination = (list, page, perPage) => {
    let i = (page-1)*perPage;
    const max = i + perPage*1;
    let res = [];
    for(; i < max && i < list.length; i++ ){
        res.push(list[i]);
    };
    return res;
};

export const fetcherWithAuth = () => {
    const id_token = sessionStorage.getItem('id_token');

    return axios.create({
        baseURL: BASE_URL2,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': id_token
        }
    })
};


export const fetchCurrentUser = () => {
    return fetcherWithAuth().get('/auths').then((res) => {
        return Promise.resolve(res.data);
    });
};

export const fetchAuth = () => {
    const id_token = sessionStorage.getItem('id_token');
    return id_token === null ? false : true;
}