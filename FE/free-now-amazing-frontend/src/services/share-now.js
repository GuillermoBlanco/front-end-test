export function fetchShares() {
  return fetch('http://localhost:5000/share-now/vehicles')
    .then(data => data.json())
}