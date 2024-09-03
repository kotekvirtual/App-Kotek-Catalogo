import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_xuNN35LB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BxhFCA8y.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Layama = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Plano 3D", "data-astro-cid-ntmkfnry": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-ntmkfnry> <section data-astro-cid-ntmkfnry> <iframe src="https://kotekvirtual.es/high-2/" height="100%" width="100%" frameborder="0" data-astro-cid-ntmkfnry></iframe> </section> </main> ` })} `;
}, "C:/Users/xema_/Documents/Dev/AppKotek/src/pages/plano3d/layama.astro", void 0);

const $$file = "C:/Users/xema_/Documents/Dev/AppKotek/src/pages/plano3d/layama.astro";
const $$url = "/plano3d/layama";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Layama,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
