export const EMAIL_REGEXP = new RegExp(
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

export const PASSWORD_REGEXP = new RegExp(
  `^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$`
);

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
  pattern?: string | RegExp
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
