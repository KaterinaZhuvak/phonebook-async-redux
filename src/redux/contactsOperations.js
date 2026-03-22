import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://ohsmdjjictepfmvowdlu.supabase.co/rest/v1/contacts';

const config = {
  headers: {
    apikey: 'sb_publishable_fK42W3htnhWJyxoH5UML4Q_T1d0R-Xd',
    Authorization: 'Bearer sb_publishable_fK42W3htnhWJyxoH5UML4Q_T1d0R-Xd',
  },
};


export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(BASE_URL, config);
      return res.data;
    } catch (e) {
      console.log(e.response); 
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// POST
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const res = await axios.post(BASE_URL, contact, {
        headers: {
          ...config.headers,
          Prefer: 'return=representation',
        },
      });
      return res.data[0];
    } catch (e) {
      console.log(e.response);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${BASE_URL}?id=eq.${id}`, config);
      return id;
    } catch (e) {
      console.log(e.response);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);