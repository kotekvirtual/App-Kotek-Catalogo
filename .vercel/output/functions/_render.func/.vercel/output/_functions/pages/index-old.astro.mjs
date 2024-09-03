import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_xuNN35LB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BxhFCA8y.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$IndexOld = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Aplicaci\xF3n Kotek Virtual", "data-astro-cid-dlr55tob": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-dlr55tob> <section data-astro-cid-dlr55tob></section> </main> ` })} `;
}, "C:/Users/xema_/Documents/Dev/AppKotek/src/pages/index-old.astro", void 0);

const $$file = "C:/Users/xema_/Documents/Dev/AppKotek/src/pages/index-old.astro";
const $$url = "/index-old";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$IndexOld,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
