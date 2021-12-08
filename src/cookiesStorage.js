import Cookies from 'js-cookie';
export const loadState = () => {
  try {
    const serializedState = Cookies.get('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    Cookies.set('state', serializedState, { expires: 365 });
  } catch (err) {
    // Ignore write errors.
  }
};
