import './css/App.css';
import './css/card.css';
import './css/navbar.css';
import Navbar from './components/Navbar'
import Card from './components/Card'
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
        <Navbar
          />
        <section>
            {cards}
        </section>
    </div>
  );
}

export default App;
