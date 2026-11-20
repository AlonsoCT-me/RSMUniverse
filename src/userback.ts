const WIDGET_URL = "https://static.userback.io/widget/v1.js";
const REVIEW_ORIGIN = "https://alonsoct-me.github.io";
const REVIEW_BASE = "/RSMUniverse/";

declare global {
  interface Window {
    Userback?: { access_token?: string };
  }
}

/** Load the official widget once, only on the published review prototype. */
export function initUserback(): void {
  const accessToken = import.meta.env.VITE_USERBACK_ACCESS_TOKEN?.trim();

  if (
    !import.meta.env.PROD ||
    import.meta.env.MODE !== "production" ||
    import.meta.env.BASE_URL !== REVIEW_BASE ||
    window.location.origin !== REVIEW_ORIGIN ||
    !window.location.pathname.startsWith(REVIEW_BASE) ||
    !accessToken ||
    document.querySelector(`script[src="${WIDGET_URL}"]`)
  ) {
    return;
  }

  window.Userback = window.Userback || {};
  window.Userback.access_token = accessToken;

  const script = document.createElement("script");
  script.async = true;
  script.src = WIDGET_URL;
  (document.head || document.body).appendChild(script);
}
