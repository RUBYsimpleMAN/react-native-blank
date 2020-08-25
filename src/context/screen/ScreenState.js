import React, { useReducer } from 'react'

import { ScreenContext } from './screenContext'
import { screenReducer } from './screenReducer'
import { TOGGLE_SCREEN } from './screenActionTypes'


export const ScreenState = ({ children }) => {

  const [state, dispatch] = useReducer(screenReducer, null)

  const toggleScreen = id => dispatch({ type: TOGGLE_SCREEN, payload: id })

  return  <ScreenContext.Provider value={{toggleScreen,                                    
                                          todoId: state}}>
            { children }
          </ScreenContext.Provider>
}
