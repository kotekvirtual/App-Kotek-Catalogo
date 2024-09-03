import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_xuNN35LB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BxhFCA8y.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Cocina = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Renders de Interior", "data-astro-cid-psisxphd": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-psisxphd> <section data-astro-cid-psisxphd> <a class="arrow left" href="/galeria/exterior" data-astro-cid-psisxphd>
&lt
</a> <img src="/cocina.png" alt="render de cocina" data-astro-cid-psisxphd> <a class="arrow right" href="/galeria/exterior" data-astro-cid-psisxphd>
&gt
</a> </section> </main> ` })} `;
}, "C:/Users/xema_/Documents/Dev/AppKotek/src/pages/galeria/cocina.astro", void 0);

const $$file = "C:/Users/xema_/Documents/Dev/AppKotek/src/pages/galeria/cocina.astro";
const $$url = "/galeria/cocina";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Cocina,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
