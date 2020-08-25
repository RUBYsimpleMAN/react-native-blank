import { CREATE_TODO, UPDATE_TODO, DELETE_TODO } from './todoActionTypes'

export const todoReducer = (state, action) => {
  switch(action.type) {
    case CREATE_TODO: return {...state, todos: [...state.todos, { id: Date.now().toString(),
                                                                  title: action.title }
    ]}
    case UPDATE_TODO: return {...state, todos: state.todos.map(todo => {
                                                              if (todo.id === action.id) {
                                                                todo.title = action.title
                                                              }
                      return todo
    })}
    case DELETE_TODO: return {...state, todos: state.todos.filter(todo.id !== action.id)}
    default:          return state
  }
}
