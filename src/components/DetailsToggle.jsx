import { useState } from "react";

const DetailsToggle = ({ title = "Details", children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="details-toggle">
      <button
        className="details-btn"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {open ? "Hide details" : "View details"}
      </button>

      {open && <div className="details-content">{children}</div>}
    </div>
  );
};

export default DetailsToggle;
