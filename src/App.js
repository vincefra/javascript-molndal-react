import {TestComponent} from './components/testcomponent/TestComponent'
import { Routing } from './routes/Routing'
import { NavigationBar} from './components/navigationbar/NavigationBar'
import './utils/global/Global.css'

function App() {
  return (
    <Routing>
      <NavigationBar />
    </Routing>
  );
}

export default App;
