/** Canonical prerender + sitemap routes for https://devcentr.app */
export const SITE_ORIGIN = "https://devcentr.app";

export function getPrerenderRoutes() {
  return ["/"];
}

export const HTML_FALLBACK = {
  title: "DevCentr — Development Orchestration Suite",
  description:
    "DevCentr is a Development Orchestration Suite: orchestrate environments, toolchains, projects, and the ops around the code.",
  heading: "DevCentr",
  purpose:
    "Stop managing tools. Orchestrate ecosystems. Download the Development Orchestration Suite for reproducible developer environments.",
};
