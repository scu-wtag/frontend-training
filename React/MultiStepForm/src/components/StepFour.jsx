import styles from "./StepFour.module.css";

export default function StepFour({ data, onBack, step, totalSteps }) {
  const onSubmit = () => {
    alert(`Sent:\nName: ${data.name}\nAge: ${data.age}`);
  };

  return (
    <div className={styles.box}>
      <h2>Step 4</h2>
      <h4>Everything is ready! Do you want to upload it?</h4>

      <div className={styles.actions}>
        <button className={styles.back} onClick={onBack}>
          Back
        </button>
        <button className={styles.next} onClick={onSubmit}>
          Upload
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