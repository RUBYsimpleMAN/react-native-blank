import React, { useReducer } from 'react'

import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import { CREATE_TODO, UPDATE_TODO, DELETE_TODO } from './todoActionTypes'


export const TodoState = ({ children }) => {
  const initialState = {
    todos: [
    {id: '1',  title: 'Дело номер 1' },
    {id: '2',  title: 'Дело номер 2' }
  ]}
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const addTodo    = title       => dispatch({ type: CREATE_TODO, title })

  const updateTodo = (id, title) => dispatch({ type: UPDATE_TODO, id, title })

  const rmTodoItem = id          => dispatch({ type: DELETE_TODO, id })

  return  <TodoContext.Provider value={{
                                        todos: state.todos,
                                        addTodo,
                                        updateTodo,
                                        rmTodoItem
                                      }}>
            { children }
          </TodoContext.Provider>
}
