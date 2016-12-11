import {fetcher2} from './index';

export const fetchStacks = () => {
    return fetcher2.get('/stacks').then((res) => {
        return res.data.items;
    });
};

export const fetchStackDetail = (stackId) => {
    return fetcher2.get('/stacks/' + stackId).then((res) => {
        return res.data;
    });
}