import { useCallback, useState } from "react";
import { useAccruPay } from "@accrupay/react";
import { getAllTestCards } from "../utils/testCards";

interface TestCardHelperProps {
  className?: string;
}

export function TestCardHelper({ className }: TestCardHelperProps) {
  const { provider, isReady } = useAccruPay();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = useCallback((text: string, fieldId: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedField(fieldId);
        setTimeout(() => setCopiedField(null), 2000);
      })
      .catch(() => {});
  }, []);

  const setCardholderName = useCallback((name: string) => {
    const cardHolderNameInput = document.querySelector<HTMLInputElement>(
      'input[id*="cardholder"], input[id*="cardHolder"], input[name*="cardholder"], input[name*="cardHolder"]',
    );
    if (cardHolderNameInput) {
      cardHolderNameInput.value = name;
      cardHolderNameInput.dispatchEvent(new Event("input", { bubbles: true }));
      cardHolderNameInput.dispatchEvent(new Event("change", { bubbles: true }));
    }
  }, []);

  const handleCopyCardNumber = useCallback(
    (card: ReturnType<typeof getAllTestCards>[0], fieldId: string) => {
      copyToClipboard(card.cardNumber, fieldId);
      setCardholderName(card.cardHolderName);
    },
    [copyToClipboard, setCardholderName],
  );

  if (!provider || !isReady) {
    return null;
  }

  const testCards = getAllTestCards(provider);

  if (testCards.length === 0) {
    return null;
  }

  return (
    <div className={className} data-testid="test-card-helper">
      <div style={{ marginBottom: "16px" }}>
        <strong>Test Cards</strong>
        <p style={{ fontSize: "12px", color: "#666", marginTop: "4px" }}>
          Click values to copy to clipboard
        </p>
      </div>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "12px",
        }}
      >
        <thead>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <th style={{ padding: "8px", textAlign: "left" }}>Scenario</th>
            <th style={{ padding: "8px", textAlign: "left" }}>Card Number</th>
            <th style={{ padding: "8px", textAlign: "left" }}>Expiry</th>
            <th style={{ padding: "8px", textAlign: "left" }}>CVC</th>
            <th style={{ padding: "8px", textAlign: "left" }}>Cardholder</th>
          </tr>
        </thead>
        <tbody>
          {testCards.map(card => (
            <tr key={card.scenario} style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "8px" }}>
                <strong>{card.scenario.toUpperCase()}</strong>
                <div
                  style={{ fontSize: "10px", color: "#666", marginTop: "2px" }}
                >
                  {card.description}
                </div>
                {card.minAmount && (
                  <div style={{ fontSize: "10px", color: "#666" }}>
                    Min: ${card.minAmount}
                  </div>
                )}
              </td>
              <td style={{ padding: "8px" }}>
                <button
                  type="button"
                  onClick={() =>
                    handleCopyCardNumber(card, `card-${card.scenario}-number`)
                  }
                  style={{
                    background:
                      copiedField === `card-${card.scenario}-number`
                        ? "#e8f5e9"
                        : "transparent",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "underline",
                    color:
                      copiedField === `card-${card.scenario}-number`
                        ? "#2e7d32"
                        : "#0066cc",
                    fontFamily: "monospace",
                    fontSize: "11px",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    transition: "all 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                  title="Click to copy card number and set cardholder name"
                >
                  {card.cardNumber}
                  <span style={{ fontSize: "12px" }}>
                    {copiedField === `card-${card.scenario}-number`
                      ? "✓"
                      : "📋"}
                  </span>
                </button>
              </td>
              <td
                style={{
                  padding: "8px",
                  fontFamily: "monospace",
                  fontSize: "11px",
                }}
              >
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(
                      card.cardExpiry,
                      `card-${card.scenario}-expiry`,
                    )
                  }
                  style={{
                    background:
                      copiedField === `card-${card.scenario}-expiry`
                        ? "#e8f5e9"
                        : "transparent",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "underline",
                    color:
                      copiedField === `card-${card.scenario}-expiry`
                        ? "#2e7d32"
                        : "#0066cc",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    transition: "all 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                  title="Click to copy expiry"
                >
                  {card.cardExpiry}
                  <span style={{ fontSize: "12px" }}>
                    {copiedField === `card-${card.scenario}-expiry`
                      ? "✓"
                      : "📋"}
                  </span>
                </button>
              </td>
              <td
                style={{
                  padding: "8px",
                  fontFamily: "monospace",
                  fontSize: "11px",
                }}
              >
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(card.cardCvc, `card-${card.scenario}-cvc`)
                  }
                  style={{
                    background:
                      copiedField === `card-${card.scenario}-cvc`
                        ? "#e8f5e9"
                        : "transparent",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "underline",
                    color:
                      copiedField === `card-${card.scenario}-cvc`
                        ? "#2e7d32"
                        : "#0066cc",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    transition: "all 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                  title="Click to copy CVC"
                >
                  {card.cardCvc}
                  <span style={{ fontSize: "12px" }}>
                    {copiedField === `card-${card.scenario}-cvc` ? "✓" : "📋"}
                  </span>
                </button>
              </td>
              <td style={{ padding: "8px", fontSize: "11px" }}>
                <button
                  type="button"
                  onClick={() => {
                    copyToClipboard(
                      card.cardHolderName,
                      `card-${card.scenario}-holder`,
                    );
                    setCardholderName(card.cardHolderName);
                  }}
                  style={{
                    background:
                      copiedField === `card-${card.scenario}-holder`
                        ? "#e8f5e9"
                        : "transparent",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "underline",
                    color:
                      copiedField === `card-${card.scenario}-holder`
                        ? "#2e7d32"
                        : "#0066cc",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    transition: "all 0.2s",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                  title="Click to copy cardholder name"
                >
                  {card.cardHolderName}
                  <span style={{ fontSize: "12px" }}>
                    {copiedField === `card-${card.scenario}-holder`
                      ? "✓"
                      : "📋"}
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
