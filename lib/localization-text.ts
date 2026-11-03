/** Values and identifiers whose written form is the same in both languages. */
export function isLanguageNeutralAnswer(text: string): boolean {
  const value = text.trim();
  return (/\d/.test(value) && /^[\d\s.,/:%$×x+\-–=()]+$/.test(value)) ||
    /^R-\d+(?:\/\d+)*$/.test(value) ||
    /^R\d{3}(?:\.\d+)*$/.test(value) ||
    /^L\/\d+$/.test(value) ||
    /^\d+[ABC]$/.test(value) ||
    /^(?:BC|QR)$/.test(value) ||
    /^(?:ASTM [A-Z]\d+(?:\.\d+)?|AAMA \d+|UL \d+|NFPA \d+[A-Z]?|ASCE \d+)$/.test(value) ||
    /^\d+(?:-\d+)?(?:\/\d+)?H:\d+(?:-\d+)?(?:\/\d+)?V$/.test(value) ||
    /^\d+(?:\.\d+)?\s+(?:cfm|psi|mil|tsf|kV)$/.test(value);
}
