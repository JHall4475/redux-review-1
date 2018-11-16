
export const initialState = {
    items: [
        'one',
        'two',
        'three',
        'four'
    ],
    input: ''
};

const HANDLE_INPUT = "HANDLE_INPUT";
const ADD_ITEM = "ADD_ITEM";

export function handleInput({ target: { value } }) {
    return {
        type: HANDLE_INPUT,
        payload: value
    };
}

export function addItem() {
    return {
        type: ADD_ITEM,
    }
}

export default function reducer(state, action) {
    console.log(state, action);
    switch (action.type) {
        case HANDLE_INPUT:
            return {
                ...state,
                input: action.payload
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, state.input],
                input: ''
            }
        default:
            return state;
    }
}
