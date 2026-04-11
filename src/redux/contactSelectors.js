import { createSelector } from 'reselect';


const selectContactsState = state => state.contacts;


export const selectContacts = createSelector(
  [selectContactsState],
  contactsState => contactsState.items
);

export const selectFilter = createSelector(
  [selectContactsState],
  contactsState => contactsState.filter
);

export const selectIsLoading = createSelector(
  [selectContactsState],
  contactsState => contactsState.isLoading
);

export const selectError = createSelector(
  [selectContactsState],
  contactsState => contactsState.error
);


export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);