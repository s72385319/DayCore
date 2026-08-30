import CountDate from "./components/CountDay"
import RandomPrediction from "./components/RandomPrediction"
import DateTime from "./components/DateTime"
import ButtonSection from "./components/ButtonSection"
import TeachingSection from "./components/WayToTeach"
import UserImg from "./components/Profile"

function App() {
  return (
    <div>
      <header className="headerClass">
        <UserImg />
      </header>
      
      <DateTime />
      
      <main>
        <section id="center">
          <CountDate day="0" week="0" />
          <RandomPrediction />
        </section>
        
        <TeachingSection />
        <ButtonSection />
      </main>
    </div>
  )
}

export default App