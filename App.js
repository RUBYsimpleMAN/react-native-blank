import React, { useState } from 'react'
import * as expoFont from 'expo-font'
import { AppLoading } from 'expo'

import { TodoState }  from './src/context/todo/TodoState'
import { MainLayout } from './src/components/ui/MainLayout'

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
    <TodoState>
      <MainLayout />
    </TodoState>
  )
}
