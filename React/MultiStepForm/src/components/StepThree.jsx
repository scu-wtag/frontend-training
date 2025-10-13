import styles from "./StepThree.module.css";

export default function StepThree({ data, onNext, onBack, step, totalSteps }) {
  return (
    <div className={styles.box}>
      <h2>Step 3</h2>
      <h4>Please check your information:</h4>

      <div className={styles.review}>
        <div>
          <span className={styles.label}>Name</span>
          <span className={styles.value}>{data.name || "—"}</span>
        </div>
        <div>
          <span className={styles.label}>Age</span>
          <span className={styles.value}>{data.age || "—"}</span>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.back} onClick={onBack}>
          Back
        </button>
        <button className={styles.next} onClick={onNext}>
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