import {fetcherWithAuth, fetchCurrentUser} from './index';

export const postApplication = (value) => {
    value.memory = '512';
    value.disk = '20';
    value.instances = '1';
    let user = '';
    return fetchCurrentUser().then((res) => {
        user = res.id;
        value.owner = '/users/' + user;
        return fetcherWithAuth().post('/apps', value)
            .then((res) => {
                return res.data;
            });
    });
};

export const fetchApplications = (page, perPage) => (
    fetcherWithAuth().get('/apps', {
        params: {
            'page': page,
            'per-page': perPage
        }
    })
        .then((res) => {
          return res.data;
        })
);

export const fetchApplicationDetail = (appName) => (
    fetcherWithAuth().get('/apps/' + appName)
        .then((res) => {
            return res.data;
        })
);

export const putApplicationStack = (appName, value) => (
    fetcherWithAuth().put('/apps/' + appName + '/switch-stack', value)
        .then((res) => {
            return res.data;
        })
);
