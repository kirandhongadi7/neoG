import Counter from "./components/Counter"
import LocalStorageComponent from "./components/LocalStorageComponent"
import LoggerComponent from "./components/LoggerComponent"
import ToggleSwitch from "./components/ToggleSwitch"
import UserList from "./components/UserList"

function App() {
  return (
    <div>
      <Counter />
      <hr />
      <ToggleSwitch />
      <hr />
      <UserList />
      <hr />
      <LoggerComponent />
      <hr />
      <LocalStorageComponent />
    </div>
  )
}

export default App
