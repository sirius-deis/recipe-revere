export const handleChange = (
  setFunction: (value: string) => void,
  e: React.ChangeEvent<HTMLInputElement>
) => {
  e.preventDefault();
  setFunction(e.target.value);
};
