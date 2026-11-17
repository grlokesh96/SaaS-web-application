(function () {
  const STORAGE_KEY = "theme";
  const DARK = "dark";
  const LIGHT = "light";

  function readStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Storage can be blocked (private mode); the theme still applies for this page.
    }
  }

  function resolveTheme() {
    const stored = readStoredTheme();
    return stored === LIGHT || stored === DARK ? stored : DARK;
  }

  function syncLabels(theme) {
    const label = theme === DARK ? "Switch to light theme" : "Switch to dark theme";
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
    });
  }

  // Runs in <head> before first paint, so the stored theme never flashes.
  const root = document.documentElement;
  const initial = resolveTheme();
  root.dataset.theme = initial;

  function init() {
    syncLabels(root.dataset.theme);

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const next = root.dataset.theme === LIGHT ? DARK : LIGHT;
        root.dataset.theme = next;
        syncLabels(next);
        storeTheme(next);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
