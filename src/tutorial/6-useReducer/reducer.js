export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newPeople = [...state.people, action.payload];
      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: 'item added',
      };
    }
    case 'REMOVE_ITEM': {
      const newPeopleList = state.people.filter(
        (person) => person.id !== action.payload
      );
      return {
        ...state,
        people: newPeopleList,
        isModalOpen: true,
        modalContent: 'item removed',
      };
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        isModalOpen: false,
      };
    }
    case 'NO_VALUE': {
      return {
        ...state,
        isModalOpen: true,
        modalContent: 'input is empty',
      };
    }
  }
  throw new Error('no matching action type');
};
