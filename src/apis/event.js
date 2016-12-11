import {fetcher2} from './index';

export const fetchStackEvents = () => (
    fetcher2.get("/stack_events").then(res => (
        res.data.items
    ))
);