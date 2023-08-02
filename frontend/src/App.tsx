import { Divider } from "@mui/material"
import TopicCard from "./components/TopicCard"
function App() {

  return (
    <div id="App">
      <TopicCard />
      <Divider/>
      <TopicCard />
      <Divider />
      <TopicCard />
      <Divider />
    </div>
  )
}

export default App