export const getToken = (): string | null => {
  const token = localStorage.getItem("token");
  return token;
};

export const setToken = (value: string): void => {
  localStorage.setItem("token", value);
};

export const deleteToken = (): void => {
  localStorage.removeItem("token");
};
