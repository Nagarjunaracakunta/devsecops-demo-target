"use strict";

function searchUsersByName(db, name) {
  const query = "SELECT * FROM users WHERE name = ?";
  return db.query(query, [name]);
}

module.exports = { searchUsersByName };
