import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import { D as DEFAULT_404_COMPONENT } from './astro/server_xuNN35LB.mjs';
import 'clsx';
import { escape } from 'html-escaper';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function template({
  title,
  pathname,
  statusCode = 404,
  tabTitle,
  body
}) {
  return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>${tabTitle}</title>
		<style>
			:root {
				--gray-10: hsl(258, 7%, 10%);
				--gray-20: hsl(258, 7%, 20%);
				--gray-30: hsl(258, 7%, 30%);
				--gray-40: hsl(258, 7%, 40%);
				--gray-50: hsl(258, 7%, 50%);
				--gray-60: hsl(258, 7%, 60%);
				--gray-70: hsl(258, 7%, 70%);
				--gray-80: hsl(258, 7%, 80%);
				--gray-90: hsl(258, 7%, 90%);
				--black: #13151A;
				--accent-light: #E0CCFA;
			}

			* {
				box-sizing: border-box;
			}

			html {
				background: var(--black);
				color-scheme: dark;
				accent-color: var(--accent-light);
			}

			body {
				background-color: var(--gray-10);
				color: var(--gray-80);
				font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
				line-height: 1.5;
				margin: 0;
			}

			a {
				color: var(--accent-light);
			}

			.center {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 100vw;
			}

			h1 {
				margin-bottom: 8px;
				color: white;
				font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
				font-weight: 700;
				margin-top: 1rem;
				margin-bottom: 0;
			}

			.statusCode {
				color: var(--accent-light);
			}

			.astro-icon {
				height: 124px;
				width: 124px;
			}

			pre, code {
				padding: 2px 8px;
				background: rgba(0,0,0, 0.25);
				border: 1px solid rgba(255,255,255, 0.25);
				border-radius: 4px;
				font-size: 1.2em;
				margin-top: 0;
				max-width: 60em;
			}
		</style>
	</head>
	<body>
		<main class="center">
			<svg class="astro-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="80" viewBox="0 0 64 80" fill="none"> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="white"/> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="url(#paint0_linear_738_686)"/> <path d="M0 51.6401C0 51.6401 10.6488 46.4654 21.3274 46.4654L29.3786 21.6102C29.6801 20.4082 30.5602 19.5913 31.5538 19.5913C32.5474 19.5913 33.4275 20.4082 33.7289 21.6102L41.7802 46.4654C54.4274 46.4654 63.1076 51.6401 63.1076 51.6401C63.1076 51.6401 45.0197 2.48776 44.9843 2.38914C44.4652 0.935933 43.5888 0 42.4073 0H20.7022C19.5206 0 18.6796 0.935933 18.1251 2.38914C18.086 2.4859 0 51.6401 0 51.6401Z" fill="white"/> <defs> <linearGradient id="paint0_linear_738_686" x1="31.554" y1="75.4423" x2="39.7462" y2="48.376" gradientUnits="userSpaceOnUse"> <stop stop-color="#D83333"/> <stop offset="1" stop-color="#F041FF"/> </linearGradient> </defs> </svg>
			<h1>${statusCode ? `<span class="statusCode">${statusCode}: </span> ` : ""}<span class="statusMessage">${title}</span></h1>
			${body || `
				<pre>Path: ${escape(pathname)}</pre>
			`}
			</main>
	</body>
</html>`;
}

const DEFAULT_404_ROUTE = {
  component: DEFAULT_404_COMPONENT,
  generate: () => "",
  params: [],
  pattern: /\/404/,
  prerender: false,
  pathname: "/404",
  segments: [[{ content: "404", dynamic: false, spread: false }]],
  type: "page",
  route: "/404",
  fallbackRoutes: [],
  isIndex: false
};
function ensure404Route(manifest) {
  if (!manifest.routes.some((route) => route.route === "/404")) {
    manifest.routes.push(DEFAULT_404_ROUTE);
  }
  return manifest;
}
async function default404Page({ pathname }) {
  return new Response(
    template({
      statusCode: 404,
      title: "Not found",
      tabTitle: "404: Not Found",
      pathname
    }),
    { status: 404, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}
default404Page.isAstroComponentFactory = true;
const default404Instance = {
  default: default404Page
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/xema_/Documents/Dev/AppKotek/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":"h1[data-astro-cid-6kjrym2w]{font-size:3rem;font-weight:700;line-height:1;text-align:center;margin:0;padding:0}main[data-astro-cid-6kjrym2w]{padding:0;margin:0;width:100%}section[data-astro-cid-6kjrym2w]{height:calc(100vh - 48px);margin:24px;border-radius:12px;background-position:50% 70%;overflow:scroll;overflow-x:hidden;display:flex;flex-direction:column;align-items:center;color:#fff}.grid-fichas[data-astro-cid-6kjrym2w]{width:100%;margin:24px;border-radius:12px;background-position:50% 70%;padding-top:64px;display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));grid-row-gap:64px;justify-items:center;align-items:top}a[data-astro-cid-6kjrym2w]{text-decoration:none;color:#fff;background-color:#637cff;padding:16px;border-radius:12px}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% );overflow:hidden}html{background-color:#fff;font-family:Poppins,sans-serif;font-weight:400;font-style:normal}main{margin:0;padding:0;width:100%;background-color:#252532}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}body{display:flex;flex-direction:row;height:100%;margin:0;padding:0;background-color:#252532}.fixed-navbar{color:#fff;width:18vw;padding-left:8px;min-width:fit-content;display:flex;flex-direction:column;padding-top:8px;gap:64px;align-items:center;font-size:12pt;height:100%}.navlink{color:#fff;text-decoration:none;padding:10px;border-radius:12px;& svg{padding-right:8px}}.icon-list{margin:0;padding:0;list-style-type:none;display:flex;flex-direction:column;gap:32px;width:250px;height:300px}.logo{pointer-events:none;& span{color:#637cff}}.navlink:hover{outline-offset:-1px;outline:solid 1px #637cff}.active{background-color:#637cff}.poppins-bold{font-family:Poppins,sans-serif;font-weight:700;font-style:normal}.poppins-regular{font-family:Poppins,sans-serif;font-weight:400;font-style:normal}@media (max-width: 700px){.fixed-navbar{display:none}}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/documentacion","isIndex":false,"type":"page","pattern":"^\\/documentacion\\/?$","segments":[[{"content":"documentacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/documentacion.astro","pathname":"/documentacion","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":"main[data-astro-cid-r4f3xssn]{margin:0;padding:0;width:100%;background-color:#fff}h1[data-astro-cid-r4f3xssn]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin:0;padding:0}section[data-astro-cid-r4f3xssn]{background-color:#fff;height:calc(100vh - 48px);margin:24px;border-radius:12px;background-position:50% 70%;overflow:hidden}.imageWrapper[data-astro-cid-r4f3xssn]{width:100%;position:relative}.imageWrapper[data-astro-cid-r4f3xssn] img[data-astro-cid-r4f3xssn]{width:100%;height:100%;object-fit:contain;border-radius:12px}.image-area[data-astro-cid-r4f3xssn]{position:absolute;left:-6%;top:-32.5%;transform:scale(.3)}.toprow[data-astro-cid-r4f3xssn]{fill:#75a93a;fill-opacity:.3;cursor:pointer}.secondrow[data-astro-cid-r4f3xssn]{fill:#a93a3a;fill-opacity:.4;cursor:pointer}.toprow[data-astro-cid-r4f3xssn] :hover[data-astro-cid-r4f3xssn],.secondrow[data-astro-cid-r4f3xssn] :hover[data-astro-cid-r4f3xssn]{fill-opacity:.8}dialog[data-astro-cid-r4f3xssn]{height:calc(100vh - 16px);border:none}dialog[data-astro-cid-r4f3xssn]::backdrop{background-color:#26263399}.modalImage[data-astro-cid-r4f3xssn]{height:99%;margin:0;border:none}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% );overflow:hidden}html{background-color:#fff;font-family:Poppins,sans-serif;font-weight:400;font-style:normal}main{margin:0;padding:0;width:100%;background-color:#252532}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}body{display:flex;flex-direction:row;height:100%;margin:0;padding:0;background-color:#252532}.fixed-navbar{color:#fff;width:18vw;padding-left:8px;min-width:fit-content;display:flex;flex-direction:column;padding-top:8px;gap:64px;align-items:center;font-size:12pt;height:100%}.navlink{color:#fff;text-decoration:none;padding:10px;border-radius:12px;& svg{padding-right:8px}}.icon-list{margin:0;padding:0;list-style-type:none;display:flex;flex-direction:column;gap:32px;width:250px;height:300px}.logo{pointer-events:none;& span{color:#637cff}}.navlink:hover{outline-offset:-1px;outline:solid 1px #637cff}.active{background-color:#637cff}.poppins-bold{font-family:Poppins,sans-serif;font-weight:700;font-style:normal}.poppins-regular{font-family:Poppins,sans-serif;font-weight:400;font-style:normal}@media (max-width: 700px){.fixed-navbar{display:none}}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/exterior-old","isIndex":false,"type":"page","pattern":"^\\/exterior-old\\/?$","segments":[[{"content":"exterior-old","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/exterior-old.astro","pathname":"/exterior-old","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":"main[data-astro-cid-ipeqng2x]{margin:0;padding:0;width:100%}h1[data-astro-cid-ipeqng2x]{font-size:3rem;font-weight:700;line-height:1;text-align:center;margin:0;padding:0}section[data-astro-cid-ipeqng2x]{height:calc(100vh - 48px);margin:24px;border-radius:12px;background-position:50% 70%;overflow:scroll;overflow-x:hidden}.grid-fichas[data-astro-cid-ipeqng2x]{padding-top:24px;display:grid;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));grid-row-gap:24px;justify-items:center}.boton-ficha[data-astro-cid-ipeqng2x]{width:300px;border:1px solid hsl(240,15%,97%);border-radius:12px}dialog[data-astro-cid-ipeqng2x]{height:calc(100vh - 16px);border:none}dialog[data-astro-cid-ipeqng2x]::backdrop{background-color:#26263399}.modalImage[data-astro-cid-ipeqng2x]{height:99%;margin:0;border:none}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% );overflow:hidden}html{background-color:#fff;font-family:Poppins,sans-serif;font-weight:400;font-style:normal}main{margin:0;padding:0;width:100%;background-color:#252532}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}body{display:flex;flex-direction:row;height:100%;margin:0;padding:0;background-color:#252532}.fixed-navbar{color:#fff;width:18vw;padding-left:8px;min-width:fit-content;display:flex;flex-direction:column;padding-top:8px;gap:64px;align-items:center;font-size:12pt;height:100%}.navlink{color:#fff;text-decoration:none;padding:10px;border-radius:12px;& svg{padding-right:8px}}.icon-list{margin:0;padding:0;list-style-type:none;display:flex;flex-direction:column;gap:32px;width:250px;height:300px}.logo{pointer-events:none;& span{color:#637cff}}.navlink:hover{outline-offset:-1px;outline:solid 1px #637cff}.active{background-color:#637cff}.poppins-bold{font-family:Poppins,sans-serif;font-weight:700;font-style:normal}.poppins-regular{font-family:Poppins,sans-serif;font-weight:400;font-style:normal}@media (max-width: 700px){.fixed-navbar{display:none}}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/fichas","isIndex":false,"type":"page","pattern":"^\\/fichas\\/?$","segments":[[{"content":"fichas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fichas.astro","pathname":"/fichas","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":"h1[data-astro-cid-psisxphd]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin:0;padding:0}section[data-astro-cid-psisxphd]{height:calc(100vh - 48px);margin:48px;border-radius:12px;background-position:50% 70%;display:flex;align-items:center;justify-content:space-between;position:relative}img[data-astro-cid-psisxphd]{width:100%;border-radius:12px}.arrow[data-astro-cid-psisxphd]{font-size:2rem;text-decoration:none;color:#262633;position:absolute;background-color:#d9d9e3;border-radius:12px;display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;font-weight:200}.right[data-astro-cid-psisxphd]{right:4px}.left[data-astro-cid-psisxphd]{left:4px}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% );overflow:hidden}html{background-color:#fff;font-family:Poppins,sans-serif;font-weight:400;font-style:normal}main{margin:0;padding:0;width:100%;background-color:#252532}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}body{display:flex;flex-direction:row;height:100%;margin:0;padding:0;background-color:#252532}.fixed-navbar{color:#fff;width:18vw;padding-left:8px;min-width:fit-content;display:flex;flex-direction:column;padding-top:8px;gap:64px;align-items:center;font-size:12pt;height:100%}.navlink{color:#fff;text-decoration:none;padding:10px;border-radius:12px;& svg{padding-right:8px}}.icon-list{margin:0;padding:0;list-style-type:none;display:flex;flex-direction:column;gap:32px;width:250px;height:300px}.logo{pointer-events:none;& span{color:#637cff}}.navlink:hover{outline-offset:-1px;outline:solid 1px #637cff}.active{background-color:#637cff}.poppins-bold{font-family:Poppins,sans-serif;font-weight:700;font-style:normal}.poppins-regular{font-family:Poppins,sans-serif;font-weight:400;font-style:normal}@media (max-width: 700px){.fixed-navbar{display:none}}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/galeria/cocina","isIndex":false,"type":"page","pattern":"^\\/galeria\\/cocina\\/?$","segments":[[{"content":"galeria","dynamic":false,"spread":false}],[{"content":"cocina","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/galeria/cocina.astro","pathname":"/galeria/cocina","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":"h1[data-astro-cid-3htl7mjt]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin:0;padding:0}section[data-astro-cid-3htl7mjt]{height:calc(100vh - 48px);margin:48px;border-radius:12px;background-position:50% 70%;display:flex;align-items:center;justify-content:space-between;position:relative}img[data-astro-cid-3htl7mjt]{width:100%;border-radius:12px}.arrow[data-astro-cid-3htl7mjt]{font-size:2rem;text-decoration:none;color:#262633;position:absolute;background-color:#d9d9e3;border-radius:12px;display:flex;align-items:center;justify-content:center;width:2rem;height:2rem;font-weight:200}.right[data-astro-cid-3htl7mjt]{right:4px}.left[data-astro-cid-3htl7mjt]{left:4px}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% );overflow:hidden}html{background-color:#fff;font-family:Poppins,sans-serif;font-weight:400;font-style:normal}main{margin:0;padding:0;width:100%;background-color:#252532}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}body{display:flex;flex-direction:row;height:100%;margin:0;padding:0;background-color:#252532}.fixed-navbar{color:#fff;width:18vw;padding-left:8px;min-width:fit-content;display:flex;flex-direction:column;padding-top:8px;gap:64px;align-items:center;font-size:12pt;height:100%}.navlink{color:#fff;text-decoration:none;padding:10px;border-radius:12px;& svg{padding-right:8px}}.icon-list{margin:0;padding:0;list-style-type:none;display:flex;flex-direction:column;gap:32px;width:250px;height:300px}.logo{pointer-events:none;& span{color:#637cff}}.navlink:hover{outline-offset:-1px;outline:solid 1px #637cff}.active{background-color:#637cff}.poppins-bold{font-family:Poppins,sans-serif;font-weight:700;font-style:normal}.poppins-regular{font-family:Poppins,sans-serif;font-weight:400;font-style:normal}@media (max-width: 700px){.fixed-navbar{display:none}}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/galeria/exterior","isIndex":false,"type":"page","pattern":"^\\/galeria\\/exterior\\/?$","segments":[[{"content":"galeria","dynamic":false,"spread":false}],[{"content":"exterior","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/galeria/exterior.astro","pathname":"/galeria/exterior","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":"main[data-astro-cid-dlr55tob]{margin:0;padding:0;width:100%;background-color:#fff}h1[data-astro-cid-dlr55tob]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin:0;padding:0}section[data-astro-cid-dlr55tob]{background-color:#f2f2f2;height:calc(100vh - 48px);margin:24px;border-radius:12px;background-image:url(/exterior-1.jpg);background-position:50% 70%}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% );overflow:hidden}html{background-color:#fff;font-family:Poppins,sans-serif;font-weight:400;font-style:normal}main{margin:0;padding:0;width:100%;background-color:#252532}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}body{display:flex;flex-direction:row;height:100%;margin:0;padding:0;background-color:#252532}.fixed-navbar{color:#fff;width:18vw;padding-left:8px;min-width:fit-content;display:flex;flex-direction:column;padding-top:8px;gap:64px;align-items:center;font-size:12pt;height:100%}.navlink{color:#fff;text-decoration:none;padding:10px;border-radius:12px;& svg{padding-right:8px}}.icon-list{margin:0;padding:0;list-style-type:none;display:flex;flex-direction:column;gap:32px;width:250px;height:300px}.logo{pointer-events:none;& span{color:#637cff}}.navlink:hover{outline-offset:-1px;outline:solid 1px #637cff}.active{background-color:#637cff}.poppins-bold{font-family:Poppins,sans-serif;font-weight:700;font-style:normal}.poppins-regular{font-family:Poppins,sans-serif;font-weight:400;font-style:normal}@media (max-width: 700px){.fixed-navbar{display:none}}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/index-old","isIndex":false,"type":"page","pattern":"^\\/index-old\\/?$","segments":[[{"content":"index-old","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/index-old.astro","pathname":"/index-old","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":"main[data-astro-cid-r3iywzce]{margin:0;padding:0;width:100%;background-color:#fff}h1[data-astro-cid-r3iywzce]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin:0;padding:0}section[data-astro-cid-r3iywzce]{background-color:#fff;height:calc(100vh - 48px);margin:48px;border-radius:12px;background-position:50% 70%;display:flex;align-items:center;justify-content:space-between}img[data-astro-cid-r3iywzce]{width:90%;border-radius:12px}.arrow[data-astro-cid-r3iywzce]{font-size:3rem;text-decoration:none;color:#262633}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% );overflow:hidden}html{background-color:#fff;font-family:Poppins,sans-serif;font-weight:400;font-style:normal}main{margin:0;padding:0;width:100%;background-color:#252532}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}body{display:flex;flex-direction:row;height:100%;margin:0;padding:0;background-color:#252532}.fixed-navbar{color:#fff;width:18vw;padding-left:8px;min-width:fit-content;display:flex;flex-direction:column;padding-top:8px;gap:64px;align-items:center;font-size:12pt;height:100%}.navlink{color:#fff;text-decoration:none;padding:10px;border-radius:12px;& svg{padding-right:8px}}.icon-list{margin:0;padding:0;list-style-type:none;display:flex;flex-direction:column;gap:32px;width:250px;height:300px}.logo{pointer-events:none;& span{color:#637cff}}.navlink:hover{outline-offset:-1px;outline:solid 1px #637cff}.active{background-color:#637cff}.poppins-bold{font-family:Poppins,sans-serif;font-weight:700;font-style:normal}.poppins-regular{font-family:Poppins,sans-serif;font-weight:400;font-style:normal}@media (max-width: 700px){.fixed-navbar{display:none}}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/interior","isIndex":false,"type":"page","pattern":"^\\/interior\\/?$","segments":[[{"content":"interior","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/interior.astro","pathname":"/interior","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":"main[data-astro-cid-ntmkfnry]{margin:0;padding:0;width:100%;background-color:#fff}h1[data-astro-cid-ntmkfnry]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin:0;padding:0}section[data-astro-cid-ntmkfnry]{background-color:#f2f2f2;height:calc(100vh - 48px);margin:24px;border-radius:12px;background-position:50% 70%}iframe[data-astro-cid-ntmkfnry]{border-radius:12px}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% );overflow:hidden}html{background-color:#fff;font-family:Poppins,sans-serif;font-weight:400;font-style:normal}main{margin:0;padding:0;width:100%;background-color:#252532}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}body{display:flex;flex-direction:row;height:100%;margin:0;padding:0;background-color:#252532}.fixed-navbar{color:#fff;width:18vw;padding-left:8px;min-width:fit-content;display:flex;flex-direction:column;padding-top:8px;gap:64px;align-items:center;font-size:12pt;height:100%}.navlink{color:#fff;text-decoration:none;padding:10px;border-radius:12px;& svg{padding-right:8px}}.icon-list{margin:0;padding:0;list-style-type:none;display:flex;flex-direction:column;gap:32px;width:250px;height:300px}.logo{pointer-events:none;& span{color:#637cff}}.navlink:hover{outline-offset:-1px;outline:solid 1px #637cff}.active{background-color:#637cff}.poppins-bold{font-family:Poppins,sans-serif;font-weight:700;font-style:normal}.poppins-regular{font-family:Poppins,sans-serif;font-weight:400;font-style:normal}@media (max-width: 700px){.fixed-navbar{display:none}}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/plano3d/layama","isIndex":false,"type":"page","pattern":"^\\/plano3d\\/layama\\/?$","segments":[[{"content":"plano3d","dynamic":false,"spread":false}],[{"content":"layama","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/plano3d/layama.astro","pathname":"/plano3d/layama","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":"h1[data-astro-cid-mpt4kpay]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin:0;padding:0}section[data-astro-cid-mpt4kpay]{background-color:#252532;height:calc(100vh - 48px);margin:24px;border-radius:13px;background-position:50% 70%;overflow:hidden;display:flex;align-items:center;justify-content:center}.imageWrapper[data-astro-cid-mpt4kpay]{position:relative}.imageWrapper[data-astro-cid-mpt4kpay] img[data-astro-cid-mpt4kpay]{width:100%;height:100%;border-radius:12px;object-position:top;max-height:calc(100vh - 48px)}.image-area[data-astro-cid-mpt4kpay]{position:absolute;left:0;top:0}.toprow[data-astro-cid-mpt4kpay]{fill:#75a93a;fill-opacity:.3;cursor:pointer;stroke:#fff;stroke-width:.2}.secondrow[data-astro-cid-mpt4kpay]{fill:#a93a3a;fill-opacity:.4;cursor:pointer}.toprow[data-astro-cid-mpt4kpay] :hover[data-astro-cid-mpt4kpay],.secondrow[data-astro-cid-mpt4kpay] :hover[data-astro-cid-mpt4kpay]{fill-opacity:.8}dialog[data-astro-cid-mpt4kpay]{height:calc(100vh - 16px);border:none}dialog[data-astro-cid-mpt4kpay]::backdrop{background-color:#26263399}.modalImage[data-astro-cid-mpt4kpay]{height:99%;margin:0;border:none}.outline[data-astro-cid-mpt4kpay]{fill:none;stroke:#fff;stroke-width:.2}.svg-text[data-astro-cid-mpt4kpay]{fill:#a93a75;font:700 3px Poppins,sans-serif}.modal[data-astro-cid-mpt4kpay]{height:80vh;border-radius:12px;& img[data-astro-cid-mpt4kpay]{border-radius:25px;height:100%}}#modal1[data-astro-cid-mpt4kpay]{width:80vw}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% );overflow:hidden}html{background-color:#fff;font-family:Poppins,sans-serif;font-weight:400;font-style:normal}main{margin:0;padding:0;width:100%;background-color:#252532}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}body{display:flex;flex-direction:row;height:100%;margin:0;padding:0;background-color:#252532}.fixed-navbar{color:#fff;width:18vw;padding-left:8px;min-width:fit-content;display:flex;flex-direction:column;padding-top:8px;gap:64px;align-items:center;font-size:12pt;height:100%}.navlink{color:#fff;text-decoration:none;padding:10px;border-radius:12px;& svg{padding-right:8px}}.icon-list{margin:0;padding:0;list-style-type:none;display:flex;flex-direction:column;gap:32px;width:250px;height:300px}.logo{pointer-events:none;& span{color:#637cff}}.navlink:hover{outline-offset:-1px;outline:solid 1px #637cff}.active{background-color:#637cff}.poppins-bold{font-family:Poppins,sans-serif;font-weight:700;font-style:normal}.poppins-regular{font-family:Poppins,sans-serif;font-weight:400;font-style:normal}@media (max-width: 700px){.fixed-navbar{display:none}}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/plano3d","isIndex":true,"type":"page","pattern":"^\\/plano3d\\/?$","segments":[[{"content":"plano3d","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/plano3d/index.astro","pathname":"/plano3d","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":"main[data-astro-cid-3p2o2q5p]{margin:0;padding:0;width:100%}h1[data-astro-cid-3p2o2q5p]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin:0;padding:0}section[data-astro-cid-3p2o2q5p]{background-color:#f2f2f2;height:calc(100vh - 48px);margin:24px;border-radius:12px;background-position:50% 70%}iframe[data-astro-cid-3p2o2q5p]{border-radius:12px}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% );overflow:hidden}html{background-color:#fff;font-family:Poppins,sans-serif;font-weight:400;font-style:normal}main{margin:0;padding:0;width:100%;background-color:#252532}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}body{display:flex;flex-direction:row;height:100%;margin:0;padding:0;background-color:#252532}.fixed-navbar{color:#fff;width:18vw;padding-left:8px;min-width:fit-content;display:flex;flex-direction:column;padding-top:8px;gap:64px;align-items:center;font-size:12pt;height:100%}.navlink{color:#fff;text-decoration:none;padding:10px;border-radius:12px;& svg{padding-right:8px}}.icon-list{margin:0;padding:0;list-style-type:none;display:flex;flex-direction:column;gap:32px;width:250px;height:300px}.logo{pointer-events:none;& span{color:#637cff}}.navlink:hover{outline-offset:-1px;outline:solid 1px #637cff}.active{background-color:#637cff}.poppins-bold{font-family:Poppins,sans-serif;font-weight:700;font-style:normal}.poppins-regular{font-family:Poppins,sans-serif;font-weight:400;font-style:normal}@media (max-width: 700px){.fixed-navbar{display:none}}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/ubicacion","isIndex":false,"type":"page","pattern":"^\\/ubicacion\\/?$","segments":[[{"content":"ubicacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ubicacion.astro","pathname":"/ubicacion","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":"main[data-astro-cid-mnpmyww2]{margin:0;padding:0;width:100%}h1[data-astro-cid-mnpmyww2]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin:0;padding:0}section[data-astro-cid-mnpmyww2]{background-color:#f2f2f2;height:calc(100vh - 48px);margin:24px;border-radius:12px;background-position:50% 70%}iframe[data-astro-cid-mnpmyww2]{border-radius:12px}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% );overflow:hidden}html{background-color:#fff;font-family:Poppins,sans-serif;font-weight:400;font-style:normal}main{margin:0;padding:0;width:100%;background-color:#252532}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}body{display:flex;flex-direction:row;height:100%;margin:0;padding:0;background-color:#252532}.fixed-navbar{color:#fff;width:18vw;padding-left:8px;min-width:fit-content;display:flex;flex-direction:column;padding-top:8px;gap:64px;align-items:center;font-size:12pt;height:100%}.navlink{color:#fff;text-decoration:none;padding:10px;border-radius:12px;& svg{padding-right:8px}}.icon-list{margin:0;padding:0;list-style-type:none;display:flex;flex-direction:column;gap:32px;width:250px;height:300px}.logo{pointer-events:none;& span{color:#637cff}}.navlink:hover{outline-offset:-1px;outline:solid 1px #637cff}.active{background-color:#637cff}.poppins-bold{font-family:Poppins,sans-serif;font-weight:700;font-style:normal}.poppins-regular{font-family:Poppins,sans-serif;font-weight:400;font-style:normal}@media (max-width: 700px){.fixed-navbar{display:none}}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/video","isIndex":false,"type":"page","pattern":"^\\/video\\/?$","segments":[[{"content":"video","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/video.astro","pathname":"/video","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":"main[data-astro-cid-wro72d3j]{margin:0;padding:0;width:100%}h1[data-astro-cid-wro72d3j]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin:0;padding:0}section[data-astro-cid-wro72d3j]{background-color:#f2f2f2;height:calc(100vh - 48px);margin:24px;border-radius:12px;background-position:50% 70%}iframe[data-astro-cid-wro72d3j]{border-radius:12px}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% );overflow:hidden}html{background-color:#fff;font-family:Poppins,sans-serif;font-weight:400;font-style:normal}main{margin:0;padding:0;width:100%;background-color:#252532}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}body{display:flex;flex-direction:row;height:100%;margin:0;padding:0;background-color:#252532}.fixed-navbar{color:#fff;width:18vw;padding-left:8px;min-width:fit-content;display:flex;flex-direction:column;padding-top:8px;gap:64px;align-items:center;font-size:12pt;height:100%}.navlink{color:#fff;text-decoration:none;padding:10px;border-radius:12px;& svg{padding-right:8px}}.icon-list{margin:0;padding:0;list-style-type:none;display:flex;flex-direction:column;gap:32px;width:250px;height:300px}.logo{pointer-events:none;& span{color:#637cff}}.navlink:hover{outline-offset:-1px;outline:solid 1px #637cff}.active{background-color:#637cff}.poppins-bold{font-family:Poppins,sans-serif;font-weight:700;font-style:normal}.poppins-regular{font-family:Poppins,sans-serif;font-weight:400;font-style:normal}@media (max-width: 700px){.fixed-navbar{display:none}}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/visitavirtual","isIndex":false,"type":"page","pattern":"^\\/visitavirtual\\/?$","segments":[[{"content":"visitavirtual","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/visitavirtual.astro","pathname":"/visitavirtual","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"inline","content":"h1[data-astro-cid-j7pv25f6]{font-size:4rem;font-weight:700;line-height:1;text-align:center;margin:0;padding:0}section[data-astro-cid-j7pv25f6]{background-color:#252532;height:calc(100vh - 48px);margin:24px;border-radius:12px;overflow:hidden;display:flex;align-items:center;justify-content:center}.imageWrapper[data-astro-cid-j7pv25f6]{position:relative}.imageWrapper[data-astro-cid-j7pv25f6] img[data-astro-cid-j7pv25f6]{width:100%;height:100%;border-radius:12px;object-position:top;max-height:calc(100vh - 48px)}.image-area[data-astro-cid-j7pv25f6]{position:absolute;left:0;top:0}.toprow[data-astro-cid-j7pv25f6]{fill:#75a93a;fill-opacity:.3;cursor:pointer;stroke:#fff;stroke-width:.2}.secondrow[data-astro-cid-j7pv25f6]{fill:#a93a3a;fill-opacity:.4;cursor:pointer;stroke:#fff;stroke-width:.2}.toprow[data-astro-cid-j7pv25f6] :hover[data-astro-cid-j7pv25f6],.secondrow[data-astro-cid-j7pv25f6] :hover[data-astro-cid-j7pv25f6]{fill-opacity:.8}dialog[data-astro-cid-j7pv25f6]{height:calc(100vh - 16px);border:none}dialog[data-astro-cid-j7pv25f6]::backdrop{background-color:#26263399}.modalImage[data-astro-cid-j7pv25f6]{height:99%;margin:0;border:none}.outline[data-astro-cid-j7pv25f6]{fill:none;stroke:#fff;stroke-width:.2}.section-mobile[data-astro-cid-j7pv25f6]{display:none}@media (max-width: 700px){section[data-astro-cid-j7pv25f6]{margin:4px}.section-pc[data-astro-cid-j7pv25f6]{display:none}.section-mobile[data-astro-cid-j7pv25f6]{display:initial}}}{}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}:root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% );overflow:hidden}html{background-color:#fff;font-family:Poppins,sans-serif;font-weight:400;font-style:normal}main{margin:0;padding:0;width:100%;background-color:#252532}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}body{display:flex;flex-direction:row;height:100%;margin:0;padding:0;background-color:#252532}.fixed-navbar{color:#fff;width:18vw;padding-left:8px;min-width:fit-content;display:flex;flex-direction:column;padding-top:8px;gap:64px;align-items:center;font-size:12pt;height:100%}.navlink{color:#fff;text-decoration:none;padding:10px;border-radius:12px;& svg{padding-right:8px}}.icon-list{margin:0;padding:0;list-style-type:none;display:flex;flex-direction:column;gap:32px;width:250px;height:300px}.logo{pointer-events:none;& span{color:#637cff}}.navlink:hover{outline-offset:-1px;outline:solid 1px #637cff}.active{background-color:#637cff}.poppins-bold{font-family:Poppins,sans-serif;font-weight:700;font-style:normal}.poppins-regular{font-family:Poppins,sans-serif;font-weight:400;font-style:normal}@media (max-width: 700px){.fixed-navbar{display:none}}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/xema_/Documents/Dev/AppKotek/src/pages/documentacion.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/xema_/Documents/Dev/AppKotek/src/pages/exterior-old.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/xema_/Documents/Dev/AppKotek/src/pages/fichas.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/xema_/Documents/Dev/AppKotek/src/pages/galeria/cocina.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/xema_/Documents/Dev/AppKotek/src/pages/galeria/exterior.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/xema_/Documents/Dev/AppKotek/src/pages/index-old.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/xema_/Documents/Dev/AppKotek/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/xema_/Documents/Dev/AppKotek/src/pages/interior.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/xema_/Documents/Dev/AppKotek/src/pages/plano3d/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/xema_/Documents/Dev/AppKotek/src/pages/plano3d/layama.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/xema_/Documents/Dev/AppKotek/src/pages/ubicacion.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/xema_/Documents/Dev/AppKotek/src/pages/video.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/xema_/Documents/Dev/AppKotek/src/pages/visitavirtual.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/xema_/Documents/Dev/AppKotek/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/documentacion@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/exterior-old@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/fichas@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/galeria/cocina@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/galeria/exterior@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index-old@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/interior@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/plano3d/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/plano3d/layama@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/ubicacion@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/video@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/visitavirtual@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/documentacion@_@astro":"pages/documentacion.astro.mjs","\u0000@astro-page:src/pages/exterior-old@_@astro":"pages/exterior-old.astro.mjs","\u0000@astro-page:src/pages/fichas@_@astro":"pages/fichas.astro.mjs","\u0000@astro-page:src/pages/galeria/cocina@_@astro":"pages/galeria/cocina.astro.mjs","\u0000@astro-page:src/pages/galeria/exterior@_@astro":"pages/galeria/exterior.astro.mjs","\u0000@astro-page:src/pages/index-old@_@astro":"pages/index-old.astro.mjs","\u0000@astro-page:src/pages/interior@_@astro":"pages/interior.astro.mjs","\u0000@astro-page:src/pages/plano3d/layama@_@astro":"pages/plano3d/layama.astro.mjs","\u0000@astro-page:src/pages/plano3d/index@_@astro":"pages/plano3d.astro.mjs","\u0000@astro-page:src/pages/ubicacion@_@astro":"pages/ubicacion.astro.mjs","\u0000@astro-page:src/pages/video@_@astro":"pages/video.astro.mjs","\u0000@astro-page:src/pages/visitavirtual@_@astro":"pages/visitavirtual.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","C:/Users/xema_/Documents/Dev/AppKotek/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_kdZDuPHj.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.Oozc_hRb.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/android-chrome-192x192.png","/android-chrome-384x384.png","/apple-touch-icon.png","/browserconfig.xml","/cocina.png","/exterior-1.jpg","/exterior1.jpg","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/favicon.svg","/ficha1.webp","/gavilan.jpg","/magnolia.webp","/mstile-150x150.png","/safari-pinned-tab.svg","/site.webmanifest","/viviendaA.webp","/viviendaB.webp","/viviendaC.webp","/viviendaD.webp","/viviendaE.webp","/viviendaF.webp","/fonts/Poppins-Regular.ttf","/_astro/hoisted.Oozc_hRb.js"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { AstroIntegrationLogger as A, DEFAULT_404_ROUTE as D, Logger as L, default404Instance as d, ensure404Route as e, getEventPrefix as g, levels as l, manifest as m };
