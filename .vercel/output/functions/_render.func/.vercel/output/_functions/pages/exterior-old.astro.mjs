import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_xuNN35LB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BxhFCA8y.mjs';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ExteriorOld = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Renders de Exterior", "data-astro-cid-r4f3xssn": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", `<main data-astro-cid-r4f3xssn> <section data-astro-cid-r4f3xssn> <div class="imageWrapper" data-astro-cid-r4f3xssn> <!-- fill with SVG areas --> <svg viewBox="0 0 100 100" class="image-area image-area--orange-1" data-astro-cid-r4f3xssn> <g class="toprow" id="botonModal" data-astro-cid-r4f3xssn><path d="M.1104-.0708 10.091.7768 10.1232 12.9302.0518 12.2774ZM15.6928 1.4544 39.7076 3.619 39.7084 15.1198 15.6694 13.4608ZM44.7904 3.9462 53.705 4.878 53.7396 16.3626 44.7944 15.7494ZM58.7162 5.2688 67.4978 5.9444 67.3938 17.3242 58.6642 16.7526ZM71.9666 6.516 95.4018 8.4906 95.5058 19.5586 71.9666 17.584Z" data-astro-cid-r4f3xssn></path></g> <g class="secondrow" data-astro-cid-r4f3xssn><path d="M0 17 10 19 10 29 0 28Z" data-astro-cid-r4f3xssn></path></g> </svg> <!-- --> <img src="/exterior-1.jpg" data-astro-cid-r4f3xssn> </div> <div data-astro-cid-r4f3xssn> <dialog id="fichaModal" data-astro-cid-r4f3xssn> <img src="ficha1.webp" alt="ficha comercial" class="modalImage" data-astro-cid-r4f3xssn> </dialog> </div> </section> </main> <script type="module">
		document.getElementById("botonModal").addEventListener("click", ()=>{
			
				document.getElementById("fichaModal").showModal()
					})
		
			document.getElementById("fichaModal").addEventListener('click', (event)=> {
				  let rect = document.getElementById("fichaModal").getBoundingClientRect();
				  let isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
				rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
				  if (!isInDialog) {
					document.getElementById("fichaModal").close();
				  }
			});
			
		<\/script> `])), maybeRenderHead()) })} `;
}, "C:/Users/xema_/Documents/Dev/AppKotek/src/pages/exterior-old.astro", void 0);

const $$file = "C:/Users/xema_/Documents/Dev/AppKotek/src/pages/exterior-old.astro";
const $$url = "/exterior-old";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ExteriorOld,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
