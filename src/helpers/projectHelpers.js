

export const local = {
    get: (key) => {
      try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
          return undefined;
        }
        return JSON.parse(serializedState);
      } catch (err) {
        return undefined;
      }
    },
    set: (key, value) => {
      try {
        const serializedState =
          typeof value === "string" ? value : JSON.stringify(value);
        localStorage.setItem(key, serializedState);
      } catch (err) {}
    },
  };
  