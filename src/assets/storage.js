export function populateStorage(dataName, data) {
  localStorage.setItem(dataName, JSON.stringify(data));
}

export function restoreStorage(data) {
  return JSON.parse(localStorage.getItem(data));
}
