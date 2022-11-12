import Codecommerce from './Codecommerce';
import styles from "./App.module.css"

function App() {
  
  return (
    <div className={`${styles.App}`}>
      <div className={`${styles.AppShadow}`}>
        <Codecommerce/>
      </div>
    </div>
  );
}

export default App;
