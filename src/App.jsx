import './App.css'
import PersonalDetails from './PersonalDetails'
import EducationalDetails from './EducationalDetails'
import ProfessionalDetails from './ProfessionalDetails'

function App() {
  return (
    <form>
      <h1>ODIN | CV Form | React</h1>
      <PersonalDetails />
      <EducationalDetails />
      <ProfessionalDetails />
    </form>
  )
}

export default App
