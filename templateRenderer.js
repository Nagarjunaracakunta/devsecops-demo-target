// Demo file for the code analyzer to scan. Intentionally vulnerable.
function safeEvaluate(expression) {
  // Only allow simple arithmetic — no identifiers, no property access, no globals.
  if (!/^[0-9+\-*/(). \s]*$/.test(expression)) {
    throw new Error("Unsafe expression rejected");
  }
  return Function(`"use strict"; return (${expression})`)();
}

function renderTemplate(userExpression, context) {
  const result = safeEvaluate(userExpression); // replaced eval() with a restricted-scope evaluator
  return result;
}

module.exports = { renderTemplate };
