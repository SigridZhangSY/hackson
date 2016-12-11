export const RESET_SNACKBAR = 'RESET_SNACKBAR';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';

const initSnackbarState = {
    open: false,
    text: ''
};

const snackbar = (state = initSnackbarState, action) => {
    switch (action.type) {
        case OPEN_SNACKBAR:
            return {
                open: true,
                text: action.text
            };
        case RESET_SNACKBAR:
            return {
                open: false,
                text: ''
            };
        default:
            return state;

    }
};

export default snackbar;