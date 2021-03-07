import { BiAccessibility } from 'react-icons/bi';
import Review from './Review';

function App() {
  return (
    <section className="container">
      <div className="title">
        <h2>Our reviews</h2>
        <div className="underline"></div>
      </div>
      <Review />
    </section>
  );
}

export default App;
