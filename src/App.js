import { useState } from "react";


const stepsItem = ["Bangun Tidur", "Mandi", "Gosok Gigi"];
function App() {
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(true);

  function nextStep() {
    if (step < 3) {
      setStep((step) => step + 1);
    }
  }

  function prevStep() {
    if (step > 1) {
      setStep((step) => step - 1);
    }
  }

  return (
    <>
      <button className="close" onClick={() => setOpen((open) => !open)}>
        &times;
      </button>
      {open && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>{" "}
          </div>
          <p className="message">Steps {step}: {stepsItem[step - 1]} </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#526d82", color: "white" }}
              onClick={prevStep}
            >
              prev
            </button>
            <button
              style={{ backgroundColor: "#526d82", color: "white" }}
              onClick={nextStep}
            >
              next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
