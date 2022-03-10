const sendRequestAction = (action) => ({type: `${action}_LOADING`});
const requestSuccessAction = (action, data) => ({type: `${action}_SUCCESS`, payload: data});
const requestFailAction = (action, exception) => ({type: `${action}_FAILED`, exception});

export const requestHandler = (dispatch, action) => {
    dispatch(sendRequestAction(action));
    return async (request) => {
        try {
            const response = await request();
            const data = await response.json();
            if (response.ok) {
                dispatch(requestSuccessAction(action, data));
            } else throw {status: response.status, message: data};

        } catch (err) {
            dispatch(requestFailAction(action, err));
        }
    }
}