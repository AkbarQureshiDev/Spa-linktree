import { ArrowRight } from "lucide-react";
import { MagneticButton } from "./ui/magnetic-button";

export default function MagneticButtonDemo() {
  const handleClick = () => {
    window.open("https://wa.me/966546420141", "_blank");
  };
  return (
    <div className="magnetic-demo-container">
      <MagneticButton>
        <button
          onClick={handleClick}
          className="magnetic-btn"
        >
          Chat on Whatsapp
          <ArrowRight size={18} style={{ display: "inline-block", flexShrink: 0, marginLeft: "8px" }} />
        </button>
      </MagneticButton>
    </div>
  );
}
