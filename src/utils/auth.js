// src/utils/auth.js
// Utilidades minimalistas para registro/login usando localStorage

const USERS_KEY = "users";
const LOGGED_KEY = "loggedInUser";

export function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
}

export function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function registerUser({ name, email, password }) {
  const users = getUsers();
  // validar existencia por email
  const exists = users.some(u => u.email.toLowerCase() === email.toLowerCase());
  if (exists) {
    return { ok: false, message: "El correo ya está registrado." };
  }
  const newUser = { name, email, password };
  users.push(newUser);
  saveUsers(users);
  return { ok: true, message: "Registro exitoso" };
}

export function loginUser({ email, password }) {
  const users = getUsers();
  const match = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
  if (match) {
    setLoggedInUser(match);
    return { ok: true, user: match };
  } else {
    return { ok: false, message: "Credenciales inválidas." };
  }
}

export function setLoggedInUser(userObj) {
  localStorage.setItem(LOGGED_KEY, JSON.stringify(userObj));
}

export function getLoggedInUser() {
  try {
    return JSON.parse(localStorage.getItem(LOGGED_KEY));
  } catch {
    return null;
  }
}

export function removeLoggedInUser() {
  localStorage.removeItem(LOGGED_KEY);
}
