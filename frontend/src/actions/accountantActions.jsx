// accountantActions.js

import axios from 'axios';
import {
  CREATE_ACCOUNTANT_REQUEST,
  CREATE_ACCOUNTANT_SUCCESS,
  CREATE_ACCOUNTANT_FAILURE,
  ACCOUNTANT_LIST_REQUEST,
  ACCOUNTANT_LIST_SUCCESS,
  ACCOUNTANT_LIST_FAIL,
  ACCOUNTANT_DELETE_FAIL,
  ACCOUNTANT_DELETE_SUCCESS,
  ACCOUNTANT_DELETE_REQUEST,
  ACCOUNTANT_UPDATE_FAIL,
  ACCOUNTANT_UPDATE_SUCCESS,
  ACCOUNTANT_UPDATE_REQUEST,
  ACCOUNTANT_DETAILS_SUCCESS,
  ACCOUNTANT_DETAILS_FAIL,
  ACCOUNTANT_DETAILS_REQUEST
} from '../constants/accountantConstants';
const base_url = 'http://localhost:5000/api/accountants';

export const createAccountant = (accountantData) => async (dispatch,getState) => {
  try {
    dispatch({ type: CREATE_ACCOUNTANT_REQUEST });

    const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };


  
    const response = await axios.post(`${base_url}`, accountantData,config);

    dispatch({
      type: CREATE_ACCOUNTANT_SUCCESS,
      payload: response.data,
    });

    return response.data; // You can return any data you need in your component
  } catch (error) {
    dispatch({
      type: CREATE_ACCOUNTANT_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });

    throw error; // You can handle the error in your component
  }
};

export const listAccountants = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ACCOUNTANT_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(base_url, config);

    dispatch({
      type: ACCOUNTANT_LIST_SUCCESS,
      payload: data.data,
    });
    console.log("data is ",data.data);
  } catch (error) {
    dispatch({
      type: ACCOUNTANT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAccountantDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ACCOUNTANT_DETAILS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${base_url}/${id}`, config);

    dispatch({
      type: ACCOUNTANT_DETAILS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: ACCOUNTANT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateAccountant = (id, updatedAccountantData) => async (dispatch, getState) => {
  try {
    dispatch({ type: ACCOUNTANT_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`${base_url}/${id}`, updatedAccountantData, config);

    dispatch({
      type: ACCOUNTANT_UPDATE_SUCCESS,
      payload: data.data,
    });

    // Optionally, you can redirect or dispatch other actions after a successful update

  } catch (error) {
    dispatch({
      type: ACCOUNTANT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Delete Accountant
export const deleteAccountant = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ACCOUNTANT_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`${base_url}/${id}`, config);

    dispatch({
      type: ACCOUNTANT_DELETE_SUCCESS,
    });

    // Optionally, you can dispatch other actions or update the state after successful deletion

  } catch (error) {
    dispatch({
      type: ACCOUNTANT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};