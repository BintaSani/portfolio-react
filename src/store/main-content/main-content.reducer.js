import headerActionTypes from "./main-content.types";
const INITIAL_STATE = {
    hidden: true
}

const HeaderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case headerActionTypes.PROJECT_CONTENT:
            return{
                ...state,
                hidden: !state.hidden
            }
        case headerActionTypes.CONTACT_CONTENT:
            return{
                ...state,
                hidden: !state.hidden
            }
        default:
            return{
                ...state,
                hidden: !state.hidden
            }
    }
}

export default HeaderReducer;