import { MagneticButton } from "./ui/magnetic-button";

export default function MagneticButtonDemo() {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="magnetic-demo-container">
      <MagneticButton>
        <button
          onClick={handleClick}
          className="magnetic-btn"
        >
          Follow @mannupaaji
        </button>
      </MagneticButton>
    </div>
  );
}
