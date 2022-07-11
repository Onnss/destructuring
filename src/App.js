import './App.css';
import cars from "./Component/practice"
function App() {
  const [honda,tesla]=cars;
const {speedStats:{topSpeed:teslaTopSpeed},coloursByPopularity:[teslaTopColour]}=tesla
const {speedStats:{topSpeed:hondaTopSpeed},coloursByPopularity:[hondaTopColour]}=honda
  return (
    <div className="App">
      <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
    </div>
  );
}

export default App;
