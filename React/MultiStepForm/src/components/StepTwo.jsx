import styles from "./StepTwo.module.css";

export default function StepTwo({
  name,
  value,
  onChange,
  onNext,
  onBack,
  step,
  totalSteps,
}) {
  const ageNum = Number(value);
  const isValid = Number.isInteger(ageNum) && ageNum > 0 && ageNum < 120;

  return (
    <div className={styles.box}>
      <h2>Step 2</h2>
      <h4>
        Hello {name || "👋"}, Please enter your age.
      </h4>

      <input
        className={styles.field}
        inputMode="numeric"
        pattern="[0-9]*"
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/[^\d]/g, ""))}
        placeholder="Age"
      />

      <div className={styles.actions}>
        <button className={styles.back} onClick={onBack}>
          Back
        </button>
        <button
          className={styles.next}
          onClick={onNext}
          disabled={!isValid}
          aria-disabled={!isValid}
        >
          Next
        </button>
      </div>

      <Dots current={step} total={totalSteps} />
    </div>
  );
}

function Dots({ current, total }) {
  return (
    <div className={styles.dots} aria-label={`Step ${current} of ${total}`}>
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={i + 1 === current ? styles.stepActive : styles.step}
        />
      ))}
    </div>
  );
}