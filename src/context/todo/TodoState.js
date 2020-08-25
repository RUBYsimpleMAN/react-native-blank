import React, { useReducer } from 'react'

import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'


export const TodoState = ({ children }) => {
  const initialState = {
    todos: [
    {id: '1',  title: 'Дело номер 1' },
    {id: '2',  title: 'Дело номер 2' }
  ]}
  const [state, dispatch] = useReducer(todoReducer, initialState)

  return  <TodoContext.Provider value={{
                                        todos: state.todos
                                      }}>
            { children }
          </TodoContext.Provider>
}
