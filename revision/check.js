// Tiny test helper. You don't need to edit this file.
// Usage: check("label", actualValue, expectedValue)

function check(label, actual, expected) {
  const pass = JSON.stringify(actual) === JSON.stringify(expected);
  if (pass) {
    console.log(`  ✅ ${label}`);
  } else {
    console.log(`  ❌ ${label}  -> got ${JSON.stringify(actual)}, expected ${JSON.stringify(expected)}`);
  }
  return pass;
}

function section(title) {
  console.log(`\n${title}`);
}

module.exports = { check, section };
