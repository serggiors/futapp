import { API_URL_DEVELOPMENT as URL_API } from '../config/api';

export default {
  loginEmail: async (data) => {
    try {
      const getDataUser = await fetch(`${URL_API}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const respuesta = await getDataUser.json();

      //Error
      if (respuesta.msg) {
        throw respuesta.msg;
      }
      return respuesta;
    } catch (error) {
      throw error;
    }
  },

  registerUser: async (data) => {
    try {
      const getDataUser = await fetch(`${URL_API}/users/signup`, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const respuesta = await getDataUser.json();
      //Error
      if (respuesta.msg) {
        throw respuesta.msg;
      }
      return respuesta;
    } catch (error) {
      throw error;
    }
  },

  forgotPassword: async (email) => {
    try {
      const responseBack = await fetch(`${URL_API}/forgotPassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(email),
      });
      const respuesta = await responseBack.json();

      //Error
      if (respuesta.error) {
        throw respuesta;
      }
      return respuesta;
    } catch (error) {
      throw error;
    }
  },

  getAllSoccerFields: async () => {
    try {
      
      const res =  await fetch(`${URL_API}/soccerfields`,{mode: 'cors'});

      if(res.ok){
      const soccerFields = await res.json();
      
      return soccerFields.response;
      }else{
        throw res;
      }
    } catch (error) {
      console.log('getAllSoccerFields error', error.message);
      throw error;
    }
  },

  getAllUserBookingsById: async(userId) => {
    try {
      const res = await fetch(`${URL_API}/users/${userId}/bookings`, {mode: 'cors'});

      if(res.ok){
      const soccerFields = await res.json();
      
      return soccerFields.bookings.Bookings;
      }else{
        throw res;
      }
    } catch (error) {
      console.log('getAllUserBookingsById error', error.message);
      throw error;
    }
  },

};
