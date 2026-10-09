import { useCallback, useState } from 'react';

export default function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  // Stable identity so callers can list it as an effect dependency.
  const onValueChange = useCallback((event) => {
    if (typeof event === 'string') {
      setValue(event);
      return;
    }

    setValue(event.target.value);
  }, []);

  return [value, onValueChange];
}
