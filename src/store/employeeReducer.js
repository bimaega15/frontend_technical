import { GET_ADMIN, STATUS_MODAL, ALERT_ADMIN, GET_ROW_ADMIN, STATUS_DIALOGS, REFRESH_DATA } from './actions';

const initialState = {
  getEmployeeLoading: false,
  getEmployeeResult: [],
  getEmployeeError: false,

  modalEmployee: false,

  dialogsEmployee: false,

  alertEmployee: '',

  getEmployeeRow: null,

  refreshData: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ADMIN:
      return {
        ...state,
        getEmployeeLoading: action.payload.loading,
        getEmployeeResult: action.payload.data,
        getEmployeeError: action.payload.errorMessage
      };
    case STATUS_MODAL:
      return {
        ...state,
        modalEmployee: action.payload.data
      };
    case STATUS_DIALOGS:
      return {
        ...state,
        dialogsEmployee: action.payload.data
      };
    case ALERT_ADMIN:
      return {
        ...state,
        alertEmployee: action.payload.data
      };
    case GET_ROW_ADMIN:
      return {
        ...state,
        getEmployeeRow: action.payload.data
      };
    case REFRESH_DATA:
      return {
        ...state,
        refreshData: action.payload.data
      };
    default:
      return state;
  }
}
