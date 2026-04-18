import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contactsOperations';


const contactsAdapter = createEntityAdapter();


const initialState = contactsAdapter.getInitialState({
  isLoading: false,
  error: null,
});

const contactSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {},

  extraReducers: builder => {
    builder
    
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        contactsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

    
      .addCase(addContact.fulfilled, (state, action) => {
        contactsAdapter.addOne(state, action.payload);
      })

   
      .addCase(deleteContact.fulfilled, (state, action) => {
        contactsAdapter.removeOne(state, action.payload);
      });
  },
});

export default contactSlice.reducer;