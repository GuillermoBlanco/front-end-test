export function fetchFrees() {
  return fetch('http://localhost:5000/free-now/vehicles')
    .then(data => data.json())
}