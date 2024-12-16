import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Body from './Components/Body/Body'
import ConsentScreen from './Components/ConsentScreen/ConsentScreen'
import ValadateToken from './Components/ValidateToken/ValadateToken'

function App() {

  return (
    <div className='flex'>
      <Header />
      <Main />
      {/* <Body /> */}
      {/* <ConsentScreen/> */}
      <ValadateToken/>
    </div>
  )
}

export default App
