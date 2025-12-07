// export function getLocalStorage<T>(key: string, defaultValue: T): T {
//   const storedValue = localStorage.getItem(key);
//   if (storedValue !== null) {
//     try {
//       return JSON.parse(storedValue) as T;
//     } catch (error) {
//       console.error(`Error parsing JSON for key "${key}":`, error);
//       return defaultValue;
//     }
//   } else {
//     return defaultValue;
//   }
// }

// export function setLocalStorage<T>(key: string, value: T) {
//   localStorage.setItem(key, JSON.stringify(value));
// }
