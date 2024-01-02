import { v4 as uuid } from "uuid";

export const booksReducer = (state, action) => {
  switch (action.type) {
    case "READ":
      return action.books;
    case "ADD_TODO":
      return [
        ...state,
        {
          name: action.todo.name,
          author: action.todo.author,
          date: action.todo.date,
          price: action.todo.price,
          id: uuid(),
          status: action.todo.status,
        },
      ];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "CHANGE_STATUS":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            status: action.status,
          };
        }
        return todo;
      });
    case "SORT_BY_DUE_DATE":
      return [...state].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        // const dateA = new Date(a.dueDate);
        // const dateB = new Date(b.dueDate);
        return dateA.getTime() - dateB.getTime();
      });
      case "SORT_BY_STATUS":
        return [...state].sort((a, b) => {
          const statusOrder = {
            "To Do": 1,
            "In Progress": 2,
            "Done": 3,
          };
          if (statusOrder[a.status] === statusOrder[b.status])
          {
            const dateA = new Date(a.dueDate);
            const dateB = new Date(b.dueDate);
            return dateA.getTime() - dateB.getTime();
          }
          return statusOrder[a.status] - statusOrder[b.status]

      });
      case "EDIT_TODO":
        return state.map((todo) =>
        todo.id === action.todo.id ? action.todo : todo
      );
    default:
      return state;
  }
};
