import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import InfoDialog from "./components/general/InfoDialog"
import { useGlobalContext } from './contexts/useGlobalContext'
import { ERROR_MESSAGE_STRINGS } from './util/constants'
import { getRandomIntInRange } from './util/util'
import { MdError } from 'react-icons/md'
import Page404 from './pages/Page404'
import PageHome from './pages/PageHome'
import PageSettings from './pages/account/PageSettings'
import PageExplore from './pages/PageExplore'
import PageSavedArticles from './pages/PageSavedArticles'

function App() {


  const { modal0, modal1, modal2, isMobile, errors, clearErrors } = useGlobalContext()


  function errorText(): string {
    if (!errors[0]?.code) {
      return ERROR_MESSAGE_STRINGS.generic[0] as string
    }

    if (errors[0].code >= 400 && errors[0].code < 500) {
      switch (errors[0].code) {
        case 400:
          return ERROR_MESSAGE_STRINGS.user_error[getRandomIntInRange(0, ERROR_MESSAGE_STRINGS.user_error.length - 1)] as string
        case 401:
          return "Unauthorised"
        case 403:
          return "Forbidden"
        case 404:
          return "Not Found"
        case 408:
          return "Timed Out"
        case 409:
          return "Data Conflict"
      }
    } else if (errors[0].code >= 500) {
      return "Internal Server Error"
    } else {
      return ERROR_MESSAGE_STRINGS.generic[0] as string
    }

    return "Error occurred"

  }


  return (
    <Router>
      {
        modal0 && modal0
      }

      {
        modal1 && modal1
      }

      {
        modal2 && modal2
      }

      {
        errors.length > 0 && (
          <InfoDialog
            title={errorText()}
            text={errors}
            icon={MdError}
            onClose={clearErrors}
          >

          </InfoDialog>
        )
      }
      <div className='w-full h-full flex flex-col'>
        <Routes>


          <Route path="/" element={<PageExplore />} />
          <Route path="/app/explore" element={<PageExplore />} />
          <Route path="/app/saved" element={<PageSavedArticles />} />
          <Route path="/app/account/settings" element={<PageSettings />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>

    </Router >
  )

}

export default App
