import bridge from '../../bridge';
import {
    ERRORS, UPLOADARTEFACTS
} from './artefacts.types';

export const uploadArtefact = (type, payload) => async (dispatch) => {
    dispatch({
        type: UPLOADARTEFACTS
    });
    try {
        const res = await bridge.post(`/artefacts/${type}`, payload);
        if (res.status === 200) {
            dispatch({
                type: UPLOADARTEFACTS
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