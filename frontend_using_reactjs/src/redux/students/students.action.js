import bridge from '../../bridge';
import {
    ERRORS, CREATENEWSTUDENT
} from './students.types';

export const createNewStudent = (payload) => async (dispatch) => {
    dispatch({
        type: CREATENEWSTUDENT
    });
    try {
        const res = await bridge.post(`/students`, payload);
        if (res.status === 200) {
            dispatch({
                type: CREATENEWSTUDENT
            });
        }
        return res;
    } catch (e) {
        dispatch({
            type: ERRORS,
            payload: e
        });
    }
};