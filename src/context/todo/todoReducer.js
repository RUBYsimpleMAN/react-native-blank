import { CREATE_TODO, UPDATE_TODO, DELETE_TODO } from './todoActionTypes'

const handlers = {
  [CREATE_TODO]: (state, {title}) => ({...state, todos: [...state.todos, { id: Date.now().toString(),
                                                                           title }
  ]}),
  [UPDATE_TODO]: (state, {title, id}) => ({...state, todos: state.todos.map(todo => {
                                                              if (todo.id === id) {
                                                                todo.title = title
                                                              }
    return todo
    })
  }),
  [DELETE_TODO]: (state, {id})    => ({...state, todos: state.todos.filter(todo => todo.id !== id)}),
  DEFAULT:        state => state
}

export const todoReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
//switch(action.type) {
//  case CREATE_TODO: return {...state, todos: [...state.todos, { id: Date.now().toString(),
//                                                                title: action.title }
//  ]}
//  case UPDATE_TODO: return {...state, todos: state.todos.map(todo => {
//                                                            if (todo.id === action.id) {
//                                                              todo.title = action.title
//                                                            }
//                    return todo
//  })}
//  case DELETE_TODO: return {...state, todos: state.todos.filter(todo => todo.id !== action.id)}
//  default:          return state
//}
}
