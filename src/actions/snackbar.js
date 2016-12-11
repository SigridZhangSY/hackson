import {OPEN_SNACKBAR, RESET_SNACKBAR} from '../reducers/snackbar'

export const openSnackbar = (text) => ({
    type: OPEN_SNACKBAR,
    text
});

export const resetSnackbar = () => ({
    type: RESET_SNACKBAR
});

