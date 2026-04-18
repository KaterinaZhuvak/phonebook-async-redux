import { createSelector } from 'reselect';
import { createEntityAdapter } from '@reduxjs/toolkit';

const adapter = createEntityAdapter();

const selectContactsState = state => state.contacts;


const { selectAll } = adapter.getSelectors(selectContactsState);

export const selectContacts = selectAll;
export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(c =>
      c.name.toLowerCase().includes(filter.toLowerCase())
    )
);