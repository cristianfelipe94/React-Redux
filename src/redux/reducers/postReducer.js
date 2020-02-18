import * as type from "../actions/actionTypes";

export default function postReducer(state= [], action) {
    switch(action.type) {
        case type.CREATE_COURSE:
            return [...state, { ...action.post }];
        default:
            return state;
    }
}