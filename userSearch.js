// Demo file for the code analyzer to scan. Intentionally vulnerable.
function searchUsersByName(db, name) {
  const query = "SELECT * FROM users WHERE name = ?";
  return db.query(query, [name]); // parameterized to prevent SQL injection
}

module.exports = { searchUsersByName };
