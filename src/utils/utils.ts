export const handleChange = (
  setFunction: (value: string) => void,
  e: React.ChangeEvent<HTMLInputElement>
) => {
  e.preventDefault();
  setFunction(e.target.value);
};

export const checkValidity = (
  value: string,
  fn: (value: boolean) => void,
  length: number,
  pattern?: string
) => {
  const trimmed = value.trim();
  if (trimmed.length > length) {
    if (pattern && !trimmed.match(pattern)) {
      return fn(false);
    }
    return fn(true);
  }
  return fn(false);
};
