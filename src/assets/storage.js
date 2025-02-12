// check if localStorage has value
// if has localStorage, donwload datas
// if not (return undefined) generate a random info

export function populateStorage(dataName, data) {
  localStorage.setItem(dataName, JSON.stringify(data));
}

export function restoreStorage(data) {
  return JSON.parse(localStorage.getItem(data));
}