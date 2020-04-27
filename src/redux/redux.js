const { createStore } = require('redux');

const initialState = { name1: 'Garrrett' };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'type1':
            return { ...state, name2: 'Nara' }
        default:
            return state;
    }
};


const store = createStore(reducer);


