import apiServices from '../services/apiServices';
import authStorage from '../utils/localStorage';

const initialState = {
  token: null,
  user: null,
  error: null,
  message: null
};

const model = {
  state: initialState,
  reducers: {},
  effects: (dispatch) => ({
    async load() {
      try {
        const token = await authStorage.getToken();

        if (token) {
          const res = await apiService.getDataUser(token);

          this.setState({
            user: res.data.user,
            token: token,
          });
        }
      } catch (error) {
        this.setState({
          error: error.response.data.msg,
        });
      }
    },

    async login(formData) {
      try {
        const res = await apiServices.loginEmail(formData);
        authStorage.setToken('token',res.token);
        this.setState({
          token: res.token,
          user: res.user,
          error: null,
        });
        return res.message;
      } catch (error) {
        this.setState({
          token: null,
          user: null,
          error: error,
        });
      }
    },

    async register(formData) {
      try {
        const res = await apiServices.registerUser(formData);
        authStorage.setToken('token',res.token);
        this.setState({
          token: res.token,
          user: res.user,
          error: null,
        });
        return res.message;
      } catch (error) {
        this.setState({
          token: null,
          user: null,
          error: error,
        });
      }
    },

    async logout() {
      await authStorage.clear();

      this.setState(initialState);
    },

    async forgotPassword(email) {
      try {
        const respApi = await apiServices.forgotPassword(email);
        this.setState({
          message: respApi.message,
          error: null,
        });
      } catch (error) {
        this.setState({
          message: null,
          error: error.error,
        });
      }
    },

    clearState() {
      this.setState(initialState);
    },

    clearError() {
      this.setState({
        error: null,
        message: null,
      });
    },

    async changeImgUser(img) {
      try {
        const token = await authStorage.getToken();
        const resBack = await apiServices.changeImg(img, token);
        return resBack;
      } catch (error) {
        throw error;
      }
    },

    async uploadPassword(data) {
      try {
        const token = await authStorage.getToken();
        const resBack = await apiServices.changePassword(data, token);
        this.setState({
          message: resBack,
        });
      } catch (error) {
        this.setState({
          error: error,
        });
      }
    },

    async changePersonalData(data) {
      try {
        const token = await authStorage.getToken();
        const resBack = await apiServices.changeDatasUser(data, token);

        this.setState({
          user: resBack.dataUpdate,
          message: resBack.messageOk,
        });
      } catch (error) {
        this.setState({
          error: error.messageError,
        });
      }
    },

 }),
};

export default model;
