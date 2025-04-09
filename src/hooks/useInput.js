import { useState } from 'react';

export default function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  function onValueChange(event) {
    if (typeof event === 'string') {
      setValue(event);
      return;
    }

    setValue(event.target.value);
  }

  return [value, onValueChange];
}
