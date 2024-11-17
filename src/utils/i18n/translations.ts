const translations = {
  en: {
    general: {
      username: "Username",
      password: "Password",
      loading: "Loading...",
      loggedInAs: "Logged in as {{name}}",
    },
    actions: {
      login: "Login",
      logout: "Logout",
    },
    input: {
      pleaseEnter: "Please enter your {{field}}",
    },
    routes: {
      index: "Login",
      dashboard: "Dashboard",
    },
    errorMessages: {
      loginFailed: "Login failed. Please try again.",
      loadingContentNodes: "Error loading content nodes.",
      logoutFailed: "Logout failed.",
      invalidEmail: "Invalid email address.",
      required: "Required",
    },
    prompt: {
      hint: "Hint",
      logout: "Are you sure you want to log out?",
      cancel: "Cancel",
      confirm: "Confirm",
    },
  },
  de: {
    general: {
      username: "Nutzername",
      password: "Passwort",
      loading: "Laden...",
      loggedInAs: "Angemeldet als {{name}}",
    },
    actions: {
      login: "Anmelden",
      logout: "Abmelden",
    },
    input: {
      pleaseEnter: "Bitte geben Sie {{field}} ein",
    },
    routes: {
      index: "Anmeldung",
      dashboard: "Dashboard",
    },
    errorMessages: {
      loadingContentNodes: "Fehler beim Laden von Inhaltselementen.",
      loginFailed: "Anmeldung fehlgeschlagen. Bitte versuchen Sie es erneut.",
      logoutFailed: "Abmeldung fehlgeschlagen.",
      invalidEmail: "Ungültige E-Mail-Adresse.",
      required: "Erforderlich",
    },
    prompt: {
      hint: "Hinweis",
      logout: "Möchten Sie sich wirklich abmelden?",
      cancel: "Abbrechen",
      confirm: "Bestätigen",
    },
  },
};

export default translations;
