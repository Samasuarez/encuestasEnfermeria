import { useSelector } from "react-redux";

import Questionnaire from "./components/cuestionario/Cuestionario.jsx";

function App() {
  const cuestionState = useSelector((state) => state.questionnaire);



  return (
    <div className="App">
      <Questionnaire />
    </div>
  );
}

export default App;
