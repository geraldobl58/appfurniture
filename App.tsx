import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Montserrat_300Light,
  Montserrat_500Medium,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat'

import { Splash } from './src/screens/auth/Splash';

import theme from "./src/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_500Medium,
    Montserrat_700Bold
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <Splash />
    </ThemeProvider>
  )

}
