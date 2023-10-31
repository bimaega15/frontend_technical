import axios from 'axios';
import { ALERT_ADMIN, GET_ADMIN, GET_ROW_ADMIN, STATUS_DIALOGS, STATUS_MODAL, REFRESH_DATA } from 'store/actions';
import { dispatchError, dispatchLoading, dispatchSingle, dispatchSuccess } from 'utils/dispatch';
import { API_URL_LOCAL } from 'utils/helper';

export const getDataAdmin = () => {
  return async (dispatch) => {
    dispatchLoading(dispatch, GET_ADMIN);

    try {
      const result = await axios.get(`${API_URL_LOCAL}/master/admin`);
      const response = result.data.result;
      dispatchSuccess(dispatch, GET_ADMIN, response);
    } catch (error) {
      dispatchError(dispatch, GET_ADMIN, error.message);
    }
  };
};

export const getDataByIdAdmin = (id) => {
  return async (dispatch) => {
    try {
      const result = await axios.get(`${API_URL_LOCAL}/master/admin/${id}`);
      const response = result.data.result;
      dispatchSingle(dispatch, STATUS_MODAL, true);
      dispatchSingle(dispatch, GET_ROW_ADMIN, response);
    } catch (error) {
      dispatchError(dispatch, GET_ROW_ADMIN, error.message);
    }
  };
};

export const formSubmit = (setFormData, config, id = '') => {
  return async (dispatch) => {
    dispatchLoading(dispatch, GET_ADMIN);
    dispatchSingle(dispatch, REFRESH_DATA, true);

    try {
      let result;
      if (id == '') {
        result = await axios.post(`${API_URL_LOCAL}/master/admin`, setFormData, config);
      }
      if (id != '') {
        result = await axios.put(`${API_URL_LOCAL}/master/admin/${id}`, setFormData, config);
      }
      const response = result.data.message;

      dispatchSingle(dispatch, STATUS_MODAL, false);
      dispatchSingle(dispatch, ALERT_ADMIN, response);
      dispatchSingle(dispatch, REFRESH_DATA, false);
    } catch (error) {
      const response = error.response.data.result.errors;
      dispatchError(dispatch, GET_ADMIN, response);
    }
  };
};

export const removeDataAdmin = (id) => {
  return async (dispatch) => {
    dispatchLoading(dispatch, GET_ADMIN);
    dispatchSingle(dispatch, REFRESH_DATA, true);

    try {
      const result = await axios.delete(`${API_URL_LOCAL}/master/admin/${id}`);
      const response = result.data.message;
      dispatchSingle(dispatch, STATUS_DIALOGS, false);
      dispatchSingle(dispatch, ALERT_ADMIN, response);
      dispatchSingle(dispatch, REFRESH_DATA, false);
    } catch (error) {
      dispatchError(dispatch, GET_ROW_ADMIN, error.message);
    }
  };
};
