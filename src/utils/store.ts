const getToken = (): string | null => {
  const token = localStorage.getItem("token");
  return token;
};

const setToken = (value: string): void => {
  localStorage.setItem("token", value);
};

const deleteToken = (): void => {
  localStorage.removeItem("token");
};
