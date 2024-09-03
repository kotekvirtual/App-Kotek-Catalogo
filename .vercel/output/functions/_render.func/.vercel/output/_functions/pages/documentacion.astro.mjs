import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_xuNN35LB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BxhFCA8y.mjs';
/* empty css                                         */
export { renderers } from '../renderers.mjs';

const $$Documentacion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Documentaci\xF3n Comercial", "data-astro-cid-6kjrym2w": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-6kjrym2w> <section data-astro-cid-6kjrym2w> <h2 data-astro-cid-6kjrym2w>Documentación Comercial</h2> <div class="grid-fichas" data-astro-cid-6kjrym2w> <a href="#" data-astro-cid-6kjrym2w>Dossier Comercial</a> <a href="#" data-astro-cid-6kjrym2w>Memoria de calidades</a> <a href="#" data-astro-cid-6kjrym2w>Catálogo</a> </div> </section> </main> ` })} `;
}, "C:/Users/xema_/Documents/Dev/AppKotek/src/pages/documentacion.astro", void 0);

const $$file = "C:/Users/xema_/Documents/Dev/AppKotek/src/pages/documentacion.astro";
const $$url = "/documentacion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Documentacion,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
