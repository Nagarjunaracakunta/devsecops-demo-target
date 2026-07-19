"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { searchUsersByName } = require("../src/userSearch");

test("SEC-103: malicious name remains a bound value", async () => {
  const calls = [];
  const db = {
    query(sql, params) {
      calls.push({ sql, params });
      return Promise.resolve([]);
    }
  };
  const maliciousName = "' OR '1'='1";

  await searchUsersByName(db, maliciousName);

  assert.equal(calls[0].sql, "SELECT * FROM users WHERE name = ?");
  assert.deepEqual(calls[0].params, [maliciousName]);
});
