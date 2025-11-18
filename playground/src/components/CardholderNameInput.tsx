import { useState, useRef } from "react";
import { useAccruPay } from "@accrupay/react";
import { useNuvei } from "../../../sdk/src/gateways/nuvei/context";

function NuveiCardholderNameInput() {
  const { cardHolderName, setCardHolderName } = useNuvei();
  return (
    <input
      id="cardholder-name"
      type="text"
      value={cardHolderName}
      onChange={e => setCardHolderName(e.target.value)}
      className="form-control"
      placeholder="Cardholder Name"
      data-testid="cardholder-name-input"
    />
  );
}

function FallbackCardholderNameInput() {
  const [value, setValue] = useState("");
  const [applied, setApplied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleApply = () => {
    if (!value.trim() || !inputRef.current) return;

    const input = inputRef.current;
    input.focus();
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
    input.dispatchEvent(new Event("blur", { bubbles: true }));

    setApplied(true);
    setTimeout(() => setApplied(false), 2000);
  };

  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "stretch" }}>
      <input
        ref={inputRef}
        id="cardholder-name"
        type="text"
        value={value}
        onChange={e => {
          setValue(e.target.value);
          setApplied(false);
        }}
        className="form-control"
        placeholder="Cardholder Name"
        data-testid="cardholder-name-input"
        style={{ flex: 1 }}
        onKeyDown={e => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleApply();
          }
        }}
      />
      <button
        type="button"
        onClick={handleApply}
        disabled={!value.trim()}
        className="btn btn-secondary"
        style={{
          padding: "0.75rem 1rem",
          whiteSpace: "nowrap",
          marginBottom: 0,
        }}
        data-testid="cardholder-name-apply"
      >
        {applied ? "✓ Applied" : "Apply"}
      </button>
    </div>
  );
}

export function CardholderNameInput() {
  const { provider } = useAccruPay();
  if (provider === "NUVEI") {
    return <NuveiCardholderNameInput />;
  }
  return <FallbackCardholderNameInput />;
}
