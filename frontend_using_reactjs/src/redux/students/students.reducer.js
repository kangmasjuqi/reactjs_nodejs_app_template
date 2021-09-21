import {
    CREATENEWSTUDENT
} from './students.types';

const INITIAL_STATE = {
    students: []
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case CREATENEWSTUDENT:
        return {
            ...state
        };
    default: return state;
    }
};

export default reducer;
