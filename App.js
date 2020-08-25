import React, { useState } from 'react'
import * as expoFont from 'expo-font'
import { AppLoading } from 'expo'

import { TodoState }  from './src/context/todo/TodoState'
import { ScreenState }  from './src/context/screen/ScreenState'
import { MainLayout } from './src/components/ui/MainLayout'
import { screenReducer } from './src/context/screen/screenReducer'

async function loadApplication() {
  await expoFont.loadAsync({
    'rThin': require('./assets/fonts/Roboto-Thin.ttf'),
    'rLight': require('./assets/fonts/Roboto-Light.ttf')
  })
}

export default function App() {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return <AppLoading  startAsync={loadApplication}
                        onError={err => console.log(err)}
                        onFinish={() => setIsReady(true)} />
  }

  return (
    <ScreenState>
      <TodoState>
        <MainLayout />
      </TodoState>
    </ScreenState>
  )
}
