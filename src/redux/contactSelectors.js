import { createSelector } from 'reselect';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(c =>
      c.name.toLowerCase().includes(filter.toLowerCase())
    )
);