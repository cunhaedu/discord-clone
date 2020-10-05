import React from "react"
import ThemeContainer from "../contexts/theme/themeContainer"

import '../styles/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
  )
}

export default MyApp
