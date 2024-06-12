import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';

const App = () => {
  return (
    <div>
      <First name={["Select","Appu","Sunil","Asif","Girish","Sridhar"]} />
      <Second/>
      <Third/>
    </div>
  )
}

export default App