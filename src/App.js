import { useState } from "react";
import { ArrowButton, ProductList } from './components';

import "./App.scss";

function App() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const onLeftBtnClicked = () => {
    if (currentIndex === 1) {
      setCurrentIndex(3);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const onRightBtnClicked = () => {
    if (currentIndex === 3) {
      setCurrentIndex(1);
    } else {
      setCurrentIndex(currentIndex + 1);
    };
  }

  return (
    <div className="App">
      <ArrowButton type="left" onClick={onLeftBtnClicked} />
      <ProductList currentIndex={currentIndex} />
      <ArrowButton type="right" onClick={onRightBtnClicked} />
    </div>
  );
}

export default App;
