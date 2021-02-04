import { TestComponent } from './components/testcomponent/TestComponent'
import { Routing } from './routes/Routing'
import { NavigationBar } from './components/navigationbar/NavigationBar'
import './utils/global/Global.css'
import { UserProvider } from './utils/global/provider/UserProvider'

function App() {
  return (
    <UserProvider>
      <Routing>
        <NavigationBar />
      </Routing>
    </UserProvider>
  );
}

export default App;
