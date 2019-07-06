import * as Color from '@material-ui/core/colors'
import commonFunc from '@/functions/common.func'
import React from 'react'
import { CircularProgress, Grid } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
interface LoadingComponentProps {
  isLoading: boolean
  pastDelay: boolean
  timedOut: boolean
  error: any
}

const Loading: React.FunctionComponent<LoadingComponentProps> = (props) => {
  let Theme = Color[commonFunc.Theme]
  let ThemeData = createMuiTheme({
    palette: {
      primary: Object.assign({}, Theme),
      secondary: Object.assign({}, Theme),
      type: commonFunc.darkPage ? 'dark' : commonFunc.Dark ? 'dark' : 'light'
    }
  })
  return (
    <MuiThemeProvider theme={ThemeData}>
      <div className="full">
        <Grid
          container={true}
          alignContent="center"
          justify="center"
          alignItems="center"
          style={{ height: '100%' }}
        >
          <CircularProgress size={50} />
        </Grid>
      </div>
    </MuiThemeProvider>
  )
}

export default Loading
