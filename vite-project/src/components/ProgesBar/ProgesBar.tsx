import './ProgresBar.css';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Define las props que recibe el componente Bar
interface BarProps {
  budget: number;
}

function Bar({ budget }: BarProps) { 
  return (
    <>
      <div id='row'>
        <div style={{ width: 300, height: 300 }}>
          <CircularProgressbar />
        </div>
        <div>
          <h3>Budget: <p>{budget}</p></h3> 
          <h3>Remaining: <p></p></h3>
          <h3>Expense: <p></p></h3>
        </div>
      </div>
    </>
  );
}

export default Bar;
