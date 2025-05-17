import css from "./App.module.css";
import MarkupCafeInfo from "../cafeInfo/CafeInfo";
import VoteOption from "../voteOptions/VoteOptions";

function App() {
  return (
    <div className={css.app}>
      <MarkupCafeInfo />
      <VoteOption />
    </div>
  );
}

export default App;
