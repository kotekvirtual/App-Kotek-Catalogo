import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_xuNN35LB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BxhFCA8y.mjs';
/* empty css                                         */
export { renderers } from '../renderers.mjs';

const $$Visitavirtual = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Visita Virtual", "data-astro-cid-wro72d3j": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-wro72d3j> <section data-astro-cid-wro72d3j> <iframe src="https://3d.kotekvirtual.es/san-pablo-tipo9/" height="100%" width="100%" frameborder="0" data-astro-cid-wro72d3j></iframe> </section> </main> ` })} `;
}, "C:/Users/xema_/Documents/Dev/AppKotek/src/pages/visitavirtual.astro", void 0);

const $$file = "C:/Users/xema_/Documents/Dev/AppKotek/src/pages/visitavirtual.astro";
const $$url = "/visitavirtual";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Visitavirtual,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
