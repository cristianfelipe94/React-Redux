export default function postReducer(state= [], action) {
    switch(action.type) {
        case "CRETE_POST":
            return [...state, { ...action.post }];
        default:
            return state;
    }
}