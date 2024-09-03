import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_xuNN35LB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BxhFCA8y.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Video = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Video Comercial", "data-astro-cid-mnpmyww2": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-mnpmyww2> <section data-astro-cid-mnpmyww2> <iframe allow="autoplay; fullscreen" width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/DGseDjK6WsQ?version=3&enablejsapi=1&html5=1&hd=1&wmode=opaque&showinfo=0&rel=0&origin=https://www.puertadesanpablo.com;&controls=0&playsinline=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen data-astro-cid-mnpmyww2></iframe> </section> </main> ` })} `;
}, "C:/Users/xema_/Documents/Dev/AppKotek/src/pages/video.astro", void 0);

const $$file = "C:/Users/xema_/Documents/Dev/AppKotek/src/pages/video.astro";
const $$url = "/video";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Video,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
