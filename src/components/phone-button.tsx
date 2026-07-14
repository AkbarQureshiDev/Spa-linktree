import { Phone } from "lucide-react";
import { MagneticButton } from "./ui/magnetic-button";

export default function PhoneButton() {
  const handleClick = () => {
    window.open("tel:+966546420141", "_self");
  };
  return (
    <div className="magnetic-demo-container">
      <MagneticButton>
        <button
          onClick={handleClick}
          className="magnetic-btn phone-btn"
        >
          <Phone size={20} className="phone-btn-icon" />
          <span>+966 546 420 141</span>
        </button>
      </MagneticButton>
    </div>
  );
}
