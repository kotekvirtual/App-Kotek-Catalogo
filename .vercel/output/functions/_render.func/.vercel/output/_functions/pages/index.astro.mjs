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
		document.querySelector("#ventanaA").addEventListener("click",()=>{
		document.getElementById("fichaVentanaA").showModal()
	})
	document.querySelector("#ventanaB").addEventListener("click",()=>{
		document.getElementById("fichaVentanaB").showModal()
	})
	document.querySelector("#ventanaC").addEventListener("click",()=>{
		document.getElementById("fichaVentanaC").showModal()
	})
	document.querySelector("#ventanaD").addEventListener("click",()=>{
		document.getElementById("fichaVentanaD").showModal()
	})
	document.querySelector("#ventanaE").addEventListener("click",()=>{
		document.getElementById("fichaVentanaE").showModal()
	})
	document.querySelector("#ventanaF").addEventListener("click",()=>{
		document.getElementById("fichaVentanaF").showModal()
	})


	
		document.getElementById("fichaVentanaA").addEventListener('click', (event)=> {
			  let rect = document.getElementById("fichaVentanaA").getBoundingClientRect();
			  let isInDialogA = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
			rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
			  if (!isInDialogA) {
				document.getElementById("fichaVentanaA").close();
			  }
		});
		document.getElementById("fichaVentanaB").addEventListener('click', (event)=> {
			  let rectB = document.getElementById("fichaVentanaB").getBoundingClientRect();
			  let isInDialogB = (rectB.top <= event.clientY && event.clientY <= rectB.top + rectB.height &&
			rectB.left <= event.clientX && event.clientX <= rectB.left + rectB.width);
			  if (!isInDialogB) {
				document.getElementById("fichaVentanaB").close();
			  }
		});
		document.getElementById("fichaVentanaC").addEventListener('click', (event)=> {
			  let rectC = document.getElementById("fichaVentanaC").getBoundingClientRect();
			  let isInDialogC = (rectC.top <= event.clientY && event.clientY <= rectC.top + rectC.height &&
			rectC.left <= event.clientX && event.clientX <= rectC.left + rectC.width);
			  if (!isInDialogC) {
				document.getElementById("fichaVentanaC").close();
			  }
		});
		document.getElementById("fichaVentanaD").addEventListener('click', (event)=> {
			  let rectD = document.getElementById("fichaVentanaD").getBoundingClientRect();
			  let isInDialogD = (rectD.top <= event.clientY && event.clientY <= rectD.top + rectD.height &&
			rectD.left <= event.clientX && event.clientX <= rectD.left + rectD.width);
			  if (!isInDialogD) {
				document.getElementById("fichaVentanaD").close();
			  }
		});
		document.getElementById("fichaVentanaE").addEventListener('click', (event)=> {
			  let rectE = document.getElementById("fichaVentanaE").getBoundingClientRect();
			  let isInDialogE = (rectE.top <= event.clientY && event.clientY <= rectE.top + rectE.height &&
			rectE.left <= event.clientX && event.clientX <= rectE.left + rectE.width);
			  if (!isInDialogE) {
				document.getElementById("fichaVentanaE").close();
			  }
		});
		document.getElementById("fichaVentanaF").addEventListener('click', (event)=> {
			  let rectF = document.getElementById("fichaVentanaF").getBoundingClientRect();
			  let isInDialogF = (rectF.top <= event.clientY && event.clientY <= rectF.top + rectF.height &&
			rectF.left <= event.clientX && event.clientX <= rectF.left + rectF.width);
			  if (!isInDialogF) {
				document.getElementById("fichaVentanaF").close();
			  }
		});
		<\/script> `])), renderComponent($$result, "Layout", $$Layout, { "title": "App Kotek Virtual", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <section class="section-pc" data-astro-cid-j7pv25f6> <div class="imageWrapper" data-astro-cid-j7pv25f6> <!-- fill with SVG areas --> <svg viewBox="0 0 192 144" class="image-area image-area--orange-1" data-astro-cid-j7pv25f6> <g class="toprow" id="ventanaA" data-astro-cid-j7pv25f6><path d="M 23.3 62.1 L 95 62.1 L 95 70.5 L 23.3 70.5 Z" data-astro-cid-j7pv25f6></path></g> <g class="secondrow" id="ventanaB" data-astro-cid-j7pv25f6><path d="M 95.5 62.1 L 170.3 62.1 L 170.3 70.5 L 95.5 70.5 Z " data-astro-cid-j7pv25f6></path></g> <g class="toprow" id="ventanaC" data-astro-cid-j7pv25f6><path d="M 23.2 74.6 L 95 74.6 L 95 83.3 L 23.2 83.3 Z" data-astro-cid-j7pv25f6></path></g> <g class="toprow" id="ventanaD" data-astro-cid-j7pv25f6><path d="M 95.5 74.6 L 95.5 83.3 L 170.3 83.3 L 170.3 74.6 Z" data-astro-cid-j7pv25f6></path></g> <g class="secondrow" id="ventanaE" data-astro-cid-j7pv25f6><path d="M 23.2 87 L 23.2 96.3 L 95 96.3 L 95 87 Z " data-astro-cid-j7pv25f6></path></g> <g class="toprow" id="ventanaF" data-astro-cid-j7pv25f6><path d="M 95.5 87 L 95.5 96.3 L 170.3 96.3 L 170.3 87 Z" data-astro-cid-j7pv25f6></path></g> </svg> <!-- --> <img src="gavilan.jpg" data-astro-cid-j7pv25f6> </div> <div data-astro-cid-j7pv25f6> <dialog id="fichaVentanaA" data-astro-cid-j7pv25f6> <img src="/viviendaA.webp" alt="ficha comercial" class="modalImage" data-astro-cid-j7pv25f6> </dialog> <dialog id="fichaVentanaB" data-astro-cid-j7pv25f6> <img src="/viviendaB.webp" alt="ficha comercial" class="modalImage" data-astro-cid-j7pv25f6> </dialog> <dialog id="fichaVentanaC" data-astro-cid-j7pv25f6> <img src="/viviendaC.webp" alt="ficha comercial" class="modalImage" data-astro-cid-j7pv25f6> </dialog> <dialog id="fichaVentanaD" data-astro-cid-j7pv25f6> <img src="/viviendaD.webp" alt="ficha comercial" class="modalImage" data-astro-cid-j7pv25f6> </dialog> <dialog id="fichaVentanaE" data-astro-cid-j7pv25f6> <img src="/viviendaE.webp" alt="ficha comercial" class="modalImage" data-astro-cid-j7pv25f6> </dialog> <dialog id="fichaVentanaF" data-astro-cid-j7pv25f6> <img src="/viviendaF.webp" alt="ficha comercial" class="modalImage" data-astro-cid-j7pv25f6> </dialog> </div> </section> <section class="section-mobile" data-astro-cid-j7pv25f6> <div class="imageWrapper" data-astro-cid-j7pv25f6> <!-- fill with SVG areas --> <svg viewBox="0 0 192 144" class="image-area image-area--orange-1" data-astro-cid-j7pv25f6> <g class="toprow" id="ventanaA" data-astro-cid-j7pv25f6><path d="M 26.625 62.449 L 37.205 62.449 L 37.23 70.526 L 26.649 70.55 Z M 40.624 62.495 L 49.37 62.495 L 49.479 70.406 L 40.624 70.406 Z M 53.195 62.444 L 62.793 62.444 L 62.849 70.563 L 53.121 70.507 Z M 64.726 62.377 L 74.298 62.415 L 74.336 70.543 L 64.707 70.543 Z M 80.707 62.427 L 89.65 62.447 L 89.67 70.564 L 80.628 70.564 Z" data-astro-cid-j7pv25f6></path></g> <g class="secondrow" id="ventanaB" data-astro-cid-j7pv25f6><path d="M 103.5 62.334 L 112.485 62.397 L 112.485 70.596 L 103.5 70.628 Z M 118.737 62.428 L 127.847 62.459 L 127.894 70.638 L 118.776 70.615 Z M 129.484 62.371 L 139.111 62.451 L 139.191 70.593 L 129.59 70.566 Z M 145.449 62.371 L 154.426 62.406 L 154.478 66.643 L 145.467 66.591 Z M 156.398 62.4 L 165.938 62.427 L 165.965 66.679 L 156.398 66.638 Z" data-astro-cid-j7pv25f6></path></g> <g class="toprow" id="ventanaC" data-astro-cid-j7pv25f6><path d="M 26.721 74.849 L 35.316 74.832 L 35.445 83.381 L 26.734 83.381 Z M 40.427 74.703 L 49.523 74.799 L 49.715 83.349 L 40.362 83.381 Z M 53.195 74.839 L 62.858 74.883 L 62.837 83.412 L 53.238 83.412 Z M 64.819 74.92 L 74.336 74.852 L 74.336 83.436 L 64.768 83.385 Z M 80.666 74.815 L 89.593 74.886 L 89.641 83.361 L 80.595 83.456 Z" data-astro-cid-j7pv25f6></path></g> <g class="toprow" id="ventanaD" data-astro-cid-j7pv25f6><path d="M 103.355 74.721 L 112.468 74.721 L 112.593 83.334 L 103.418 83.397 Z M 118.772 74.658 L 127.822 74.721 L 127.885 83.334 L 118.772 83.397 Z M 129.445 74.721 L 139.182 74.783 L 139.182 83.459 L 129.383 83.397 Z M 145.424 74.721 L 154.411 74.783 L 154.474 83.521 L 145.361 83.397 Z M 156.222 74.721 L 166.083 74.846 L 166.083 83.397 L 156.284 83.334 Z" data-astro-cid-j7pv25f6></path></g> <g class="secondrow" id="ventanaE" data-astro-cid-j7pv25f6><path d="M 26.674 87.344 L 36.821 87.225 L 36.702 96.179 L 26.674 96.179 Z M 40.403 87.225 L 49.595 87.225 L 49.595 96.179 L 40.403 96.179 Z M 52.938 87.106 L 62.727 87.106 L 62.727 96.059 L 53.057 96.059 Z M 64.756 87.106 L 74.426 87.106 L 74.546 96.059 L 64.756 96.059 Z M 80.634 87.344 L 89.707 87.464 L 89.707 95.94 L 80.634 95.82 Z" data-astro-cid-j7pv25f6></path></g> <g class="toprow" id="ventanaF" data-astro-cid-j7pv25f6><path d="M 103.497 87.1581 L 112.4 87.2 L 112.5 96.3 L 103.5 96.3 Z M 118.9 87.2 L 127.8 87.2 L 127.8 96.4 L 118.9 96.3 Z M 129.5 87.2 L 139.1 87.2 L 139.1 96.3 L 129.5 96.3 Z M 145.4 87.2 L 154.3 87.2 L 154.3 92.4 L 145.4 92.3 Z M 156.3 87.2 L 166.1 87.3 L 166.1 92.3 L 156.4 92.3 Z" data-astro-cid-j7pv25f6></path></g> <g class="outline" data-astro-cid-j7pv25f6><path d="
						M 23.3 62.1 L 95 62.1 L 95 70.5 L 23.3 70.5 Z
						M 95.5 62.1 L 170.3 62.1 L 170.3 70.5 L 95.5 70.5 Z 
						M 23.2 74.6 L 95 74.6 L 95 83.3 L 23.2 83.3 Z
						M 95.5 74.6 L 95.5 83.3 L 170.3 83.3 L 170.3 74.6 Z
						M 23.2 87 L 23.2 96.3 L 95 96.3 L 95 87 Z 
						M 95.5 87 L 95.5 96.3 L 170.3 96.3 L 170.3 87 Z" data-astro-cid-j7pv25f6></path></g> </svg> <!-- --> <img src="gavilan.jpg" data-astro-cid-j7pv25f6> </div> <div data-astro-cid-j7pv25f6> <dialog id="fichaVentanaA" data-astro-cid-j7pv25f6> <img src="/viviendaA.webp" alt="ficha comercial" class="modalImage" data-astro-cid-j7pv25f6> </dialog> <dialog id="fichaVentanaB" data-astro-cid-j7pv25f6> <img src="/viviendaB.webp" alt="ficha comercial" class="modalImage" data-astro-cid-j7pv25f6> </dialog> <dialog id="fichaVentanaC" data-astro-cid-j7pv25f6> <img src="/viviendaC.webp" alt="ficha comercial" class="modalImage" data-astro-cid-j7pv25f6> </dialog> <dialog id="fichaVentanaD" data-astro-cid-j7pv25f6> <img src="/viviendaD.webp" alt="ficha comercial" class="modalImage" data-astro-cid-j7pv25f6> </dialog> <dialog id="fichaVentanaE" data-astro-cid-j7pv25f6> <img src="/viviendaE.webp" alt="ficha comercial" class="modalImage" data-astro-cid-j7pv25f6> </dialog> <dialog id="fichaVentanaF" data-astro-cid-j7pv25f6> <img src="/viviendaF.webp" alt="ficha comercial" class="modalImage" data-astro-cid-j7pv25f6> </dialog> </div> </section> </main> ` }));
}, "C:/Users/xema_/Documents/Dev/AppKotek/src/pages/index.astro", void 0);

const $$file = "C:/Users/xema_/Documents/Dev/AppKotek/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
