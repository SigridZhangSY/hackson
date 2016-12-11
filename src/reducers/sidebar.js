export const CHANGE_TAB = 'CHANGE_TAB';

const initSidebarState = {
    current: 'dashboard'
};

const sidebar = (state = initSidebarState, action) => {
    switch (action.type) {
        case CHANGE_TAB:
            return {
                current: action.tabName
            };
        
        default:
            return state;
    }
};

export default sidebar;