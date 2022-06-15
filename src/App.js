import './css/App.css';
import './css/card.css';
import './css/hero.css';
import './css/navbar.css';
import Card from './components/Card'
import Hero from './components/Hero'
import data from './data'



function App() {
  const cards = data.map(item => {
    return (
      <Card
          item = {item}
          />
    )
  })
  return (
    <div>
        {/* <Navbar
          /> */}
        <Hero
          />
        <section>
            {cards}
        </section>
    </div>
  );
}

export default App;
