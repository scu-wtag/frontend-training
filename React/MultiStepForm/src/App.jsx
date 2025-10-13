import { useState } from "react";
import StepOne from "./components/StepOne.jsx";
import StepTwo from "./components/StepTwo.jsx";
import StepThree from "./components/StepThree.jsx";
import StepFour from "./components/StepFour.jsx";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    age: "",
  });

  const totalSteps = 4;

  const next = () => setStep((s) => Math.min(s + 1, totalSteps));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const updateField = (key, value) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="app">
      {step === 1 && (
        <StepOne
          value={form.name}
          onChange={(v) => updateField("name", v)}
          onNext={next}
          step={step}
          totalSteps={totalSteps}
        />
      )}

      {step === 2 && (
        <StepTwo
          name={form.name}
          value={form.age}
          onChange={(v) => updateField("age", v)}
          onNext={next}
          onBack={back}
          step={step}
          totalSteps={totalSteps}
        />
      )}

      {step === 3 && (
        <StepThree
          data={form}
          onNext={next}
          onBack={back}
          step={step}
          totalSteps={totalSteps}
        />
      )}

      {step === 4 && (
        <StepFour
          data={form}
          onBack={back}
          step={step}
          totalSteps={totalSteps}
        />
      )}
    </div>
  );
}