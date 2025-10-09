import styles from "./StepOne.module.css";

export default function StepOne({ value, onChange, onNext, step, totalSteps }) {
  const isValid = value.trim().length >= 2;

  return (
    <div className={styles.box}>
      <h2>Step 1</h2>
      <h4>Please enter your name.</h4>

      <input
        className={styles.field}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Your name"
      />

      <div className={styles.actions}>
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
