import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_xuNN35LB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BxhFCA8y.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Exterior = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Renders de Interior", "data-astro-cid-3htl7mjt": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-3htl7mjt> <section data-astro-cid-3htl7mjt> <a class="arrow left" href="/galeria/cocina" data-astro-cid-3htl7mjt>
&lt
</a> <img src="/exterior-1.jpg" alt="render de exterior" data-astro-cid-3htl7mjt> <a class="arrow right" href="/galeria/cocina" data-astro-cid-3htl7mjt>
&gt
</a> </section> </main> ` })} `;
}, "C:/Users/xema_/Documents/Dev/AppKotek/src/pages/galeria/exterior.astro", void 0);

const $$file = "C:/Users/xema_/Documents/Dev/AppKotek/src/pages/galeria/exterior.astro";
const $$url = "/galeria/exterior";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Exterior,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
