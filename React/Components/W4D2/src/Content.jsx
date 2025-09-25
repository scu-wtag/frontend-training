export function Content() {
  return (
    <main
      style={{
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        marginTop: "190px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          backgroundColor: "#f9f9f9",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "1rem" }}>
          Hello, I am learning how to use React! :D
        </h2>

        <p style={{ textAlign: "left", marginBottom: "0.5rem" }}>
          My hobbies are:
        </p>
        <ul
          style={{
            textAlign: "left",
            paddingLeft: "1.2rem",
            marginBottom: "1.5rem",
            lineHeight: "1.6",
          }}
        >
          <li>Watching Ski Jumping</li>
          <li>Watching Drifting</li>
          <li>Going for a (long) walk</li>
          <li>Gaming</li>
        </ul>

        <p>My favourite color is:</p>
        <h2
          style={{
            color: "black",
            backgroundColor: "rgba(161,46,255,0.7)",
            margin: "0rem 0 1rem 0",
            WebkitBoxShadow: "0px 0px 30px 6px rgba(161,46,255,0.7)",
            MozBoxShadow: "0px 0px 30px 6px rgba(161,46,255,0.7)",
            boxShadow: "0px 0px 30px 6px rgba(161,46,255,0.7)",
            display: "inline-block",
            padding: "999rem 0.6rem, 0.2rem",
            borderRadius: "6px",
          }}
        >
          PURPLE!!
        </h2>

        <p style={{ fontStyle: "italic", color: "#555" }}>
          That was it, have a nice day!
        </p>
      </div>
    </main>
  );
}