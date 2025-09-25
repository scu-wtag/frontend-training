export function Header() {
  return (
    <header
      style={{
        backgroundColor: "pink",
        padding: "1rem",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        textAlign: "center",
      }}
    >
        <div style={{paddingRight: "2.1rem"}}>
        <h1 style={{ margin: "0 0 0.5rem 0" }}>My Frontend Training!</h1>
            <nav>
                <a href="#features" style={{ margin: "0 1rem" }}>
                Features
                </a>
                <a href="#pricing" style={{ margin: "0 1rem" }}>
                Pricing
                </a>
                <a href="#about" style={{ margin: "0 1rem" }}>
                About
                </a>
            </nav>
        </div>

    </header>
  );
}