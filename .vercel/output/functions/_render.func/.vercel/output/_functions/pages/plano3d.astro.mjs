import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_xuNN35LB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BxhFCA8y.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ` <script type="module">
	document.querySelector("#room1").addEventListener("click",()=>{
	document.getElementById("modal1").showModal()
})
document.querySelector("#room2").addEventListener("click",()=>{
	document.getElementById("modal2").showModal()
})
document.querySelector("#room3").addEventListener("click",()=>{
	document.getElementById("modal3").showModal()
})
document.querySelector("#room4").addEventListener("click",()=>{
	document.getElementById("modal4").showModal()
})



	document.getElementById("modal1").addEventListener('click', (event)=> {
		  let rect = document.getElementById("modal1").getBoundingClientRect();
		  let isInDialogA = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
		rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
		  if (!isInDialogA) {
			document.getElementById("modal1").close();
		  }
	});
	document.getElementById("modal2").addEventListener('click', (event)=> {
		  let rectB = document.getElementById("modal2").getBoundingClientRect();
		  let isInDialogB = (rectB.top <= event.clientY && event.clientY <= rectB.top + rectB.height &&
		rectB.left <= event.clientX && event.clientX <= rectB.left + rectB.width);
		  if (!isInDialogB) {
			document.getElementById("modal2").close();
		  }
	});
	document.getElementById("modal3").addEventListener('click', (event)=> {
		  let rectC = document.getElementById("modal3").getBoundingClientRect();
		  let isInDialogC = (rectC.top <= event.clientY && event.clientY <= rectC.top + rectC.height &&
		rectC.left <= event.clientX && event.clientX <= rectC.left + rectC.width);
		  if (!isInDialogC) {
			document.getElementById("modal3").close();
		  }
	});
	document.getElementById("modal4").addEventListener('click', (event)=> {
		  let rectD = document.getElementById("modal4").getBoundingClientRect();
		  let isInDialogD = (rectD.top <= event.clientY && event.clientY <= rectD.top + rectD.height &&
		rectD.left <= event.clientX && event.clientX <= rectD.left + rectD.width);
		  if (!isInDialogD) {
			document.getElementById("modal4").close();
		  }
	});
	
	<\/script> `])), renderComponent($$result, "Layout", $$Layout, { "title": "Plano 3D", "data-astro-cid-mpt4kpay": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-mpt4kpay> <section data-astro-cid-mpt4kpay> <div class="imageWrapper" data-astro-cid-mpt4kpay> <!-- fill with SVG areas --> <svg viewBox="0 0 90 90" class="image-area image-area--orange-1" data-astro-cid-mpt4kpay> <text x="19" y="20" class="svg-text" data-astro-cid-mpt4kpay>+</text> <text x="45" y="20" class="svg-text" data-astro-cid-mpt4kpay>+</text> <text x="70" y="20" class="svg-text" data-astro-cid-mpt4kpay>+</text> <text x="45" y="45" class="svg-text" data-astro-cid-mpt4kpay>+</text> <g class="toprow" id="room1" data-astro-cid-mpt4kpay><path d="M 30.8 33.8 H 4.8 L 8.8 2.6 H 33.1 Z" data-astro-cid-mpt4kpay></path> </g> <g class="toprow" id="room2" data-astro-cid-mpt4kpay><path d="M 33.3 2.6 L 31 33.8 H 60.1 L 58.9 2.6 Z" data-astro-cid-mpt4kpay></path> </g> <g class="toprow" id="room3" data-astro-cid-mpt4kpay><path d="M 80.8 2.6 L 84.7 33.8 H 60.4 L 59.1 2.6 Z" data-astro-cid-mpt4kpay></path> </g> <g class="toprow" id="room4" data-astro-cid-mpt4kpay><path d="M 4.8 34.1 H 84.7 L 87.1 55.8 H 61.7 L 61.5 51.2 H 29.7 L 29.7 55.8 H 2.6 Z" data-astro-cid-mpt4kpay></path> </g> </svg> <!-- --> <img src="/magnolia.webp" data-astro-cid-mpt4kpay> </div> </section> <div data-astro-cid-mpt4kpay> <dialog id="modal1" class="modal" data-astro-cid-mpt4kpay> <iframe src="https://kotekvirtual.es/high-2/" height="100%" width="100%" frameborder="0" data-astro-cid-mpt4kpay></iframe> </dialog> <dialog id="modal2" class="modal" data-astro-cid-mpt4kpay> <img src="/cocina.png" alt="ficha comercial" class="modalImage" data-astro-cid-mpt4kpay> </dialog> <dialog id="modal3" class="modal" data-astro-cid-mpt4kpay> <img src="/cocina.png" alt="ficha comercial" class="modalImage" data-astro-cid-mpt4kpay> </dialog> <dialog id="modal4" class="modal" data-astro-cid-mpt4kpay> <img src="/cocina.png" alt="ficha comercial" class="modalImage" data-astro-cid-mpt4kpay> </dialog> </div> </main> ` }));
}, "C:/Users/xema_/Documents/Dev/AppKotek/src/pages/plano3d/index.astro", void 0);

const $$file = "C:/Users/xema_/Documents/Dev/AppKotek/src/pages/plano3d/index.astro";
const $$url = "/plano3d";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
