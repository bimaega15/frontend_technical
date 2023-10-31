import { GET_ADMIN, STATUS_MODAL, ALERT_ADMIN, GET_ROW_ADMIN, STATUS_DIALOGS, REFRESH_DATA } from './actions';

const initialState = {
  getAdminLoading: false,
  getAdminResult: [],
  getAdminError: false,

  modalAdmin: false,

  dialogsAdmin: false,

  alertAdmin: '',

  getAdminRow: null,

  refreshData: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ADMIN:
      return {
        ...state,
        getAdminLoading: action.payload.loading,
        getAdminResult: action.payload.data,
        getAdminError: action.payload.errorMessage
      };
    case STATUS_MODAL:
      return {
        ...state,
        modalAdmin: action.payload.data
      };
    case STATUS_DIALOGS:
      return {
        ...state,
        dialogsAdmin: action.payload.data
      };
    case ALERT_ADMIN:
      return {
        ...state,
        alertAdmin: action.payload.data
      };
    case GET_ROW_ADMIN:
      return {
        ...state,
        getAdminRow: action.payload.data
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
