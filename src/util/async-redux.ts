interface CreateAsyncAction<T> {
  asyncRequest: () => Promise<T>;
  requestType: string;
  requestPayload?: any;
  successType: string;
  failureType: string;
}

export type Dispatch = (action: any) => Promise<any>;

/**
 * @param param0 Object with the request to execute and it's corresponding actions to dispatch on request/success/failure.
 */
export function createAsyncAction<T>({
  asyncRequest,
  requestType,
  requestPayload,
  successType,
  failureType
}: CreateAsyncAction<T>) {
  return async function dispatchFn(dispatch: Dispatch) {
    dispatch({
      type: requestType,
      payload: requestPayload,
      requestPayload
    });

    try {
      const data = await asyncRequest();
      dispatch({
        type: successType,
        payload: data,
        requestPayload
      });
      return data;
    } catch (err) {
      dispatch({
        type: failureType,
        payload: err,
        requestPayload
      });

      throw err;
    }
  };
}
