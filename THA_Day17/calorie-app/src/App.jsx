import './App.css';
import FoodInfo from './Components/FoodInfo';

function App() 
{
  return (
    <div className = "App-container">
      <FoodInfo foodName = "Pizza" foodCal = "350" link="/images/pizza.gif" />
      <FoodInfo foodName = "Coffee" foodCal = "10" link="/images/coffee.jpeg" />
      <FoodInfo foodName = "French Fries" foodCal = "300" link="/images/fries.gif" />
      <FoodInfo foodName = "Donut" foodCal = "450" link="/images/donut.png" />
      <FoodInfo foodName = "Chicken Biryani" foodCal = "300" link="/images/chickenbiryani.jpeg"/>
    </div>
  );
}

export default App;
