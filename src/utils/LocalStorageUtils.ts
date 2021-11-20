// Get a string value from localStorage as an object
export const getLocalStorageObj = (localStorageKey: string) => {
  const stringifiedObj = localStorage.getItem(localStorageKey);
  let object = null;

  if (stringifiedObj) {
    try {
      object = JSON.parse(stringifiedObj);
    } catch (error) {
      object = null;
    }
  }

  return object;
};

// Store an object in local storage
export const setLocalStorageObj = (localStorageKey: string, obj: any) => {
  localStorage.setItem(localStorageKey, JSON.stringify(obj));
};

// Get a property of an object value from localStorage
export const getLocalStorageObjProperty = (
  localStorageKey: string,
  property: string
) => {
  const object = getLocalStorageObj(localStorageKey);
  if (!object) return object;

  return object[property];
};

// Set a property of an object value in localStorage
export const setLocalStorageObjProperty = (
  localStorageKey: string,
  property: string,
  value: string
) => {
  const object = getLocalStorageObj(localStorageKey);
  object[property] = value;
  localStorage.setItem(localStorageKey, JSON.stringify(object));
};
