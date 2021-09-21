import {
    UPLOADARTEFACTS
} from './artefacts.types';

const INITIAL_STATE = {
    artefacts: []
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case UPLOADARTEFACTS:
        return {
            ...state
        };
    default: return state;
    }
};

export default reducer;
