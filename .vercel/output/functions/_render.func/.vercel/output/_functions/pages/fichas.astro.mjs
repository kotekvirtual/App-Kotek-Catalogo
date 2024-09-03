import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_xuNN35LB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BxhFCA8y.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Fichas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `  <script type="module">
	
 	document.querySelector("#botonA").addEventListener("click",()=>{
		document.getElementById("fichaModalA").showModal()
	})
	document.querySelector("#botonB").addEventListener("click",()=>{
		document.getElementById("fichaModalB").showModal()
	})
	document.querySelector("#botonC").addEventListener("click",()=>{
		document.getElementById("fichaModalC").showModal()
	})
	document.querySelector("#botonD").addEventListener("click",()=>{
		document.getElementById("fichaModalD").showModal()
	})
	document.querySelector("#botonE").addEventListener("click",()=>{
		document.getElementById("fichaModalE").showModal()
	})
	document.querySelector("#botonF").addEventListener("click",()=>{
		document.getElementById("fichaModalF").showModal()
	})


	
		document.getElementById("fichaModalA").addEventListener('click', (event)=> {
			  let rect = document.getElementById("fichaModalA").getBoundingClientRect();
			  let isInDialogA = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
			rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
			  if (!isInDialogA) {
				document.getElementById("fichaModalA").close();
			  }
		});
		document.getElementById("fichaModalB").addEventListener('click', (event)=> {
			  let rectB = document.getElementById("fichaModalB").getBoundingClientRect();
			  let isInDialogB = (rectB.top <= event.clientY && event.clientY <= rectB.top + rectB.height &&
			rectB.left <= event.clientX && event.clientX <= rectB.left + rectB.width);
			  if (!isInDialogB) {
				document.getElementById("fichaModalB").close();
			  }
		});
		document.getElementById("fichaModalC").addEventListener('click', (event)=> {
			  let rectC = document.getElementById("fichaModalC").getBoundingClientRect();
			  let isInDialogC = (rectC.top <= event.clientY && event.clientY <= rectC.top + rectC.height &&
			rectC.left <= event.clientX && event.clientX <= rectC.left + rectC.width);
			  if (!isInDialogC) {
				document.getElementById("fichaModalC").close();
			  }
		});
		document.getElementById("fichaModalD").addEventListener('click', (event)=> {
			  let rectD = document.getElementById("fichaModalD").getBoundingClientRect();
			  let isInDialogD = (rectD.top <= event.clientY && event.clientY <= rectD.top + rectD.height &&
			rectD.left <= event.clientX && event.clientX <= rectD.left + rectD.width);
			  if (!isInDialogD) {
				document.getElementById("fichaModalD").close();
			  }
		});
		document.getElementById("fichaModalE").addEventListener('click', (event)=> {
			  let rectE = document.getElementById("fichaModalE").getBoundingClientRect();
			  let isInDialogE = (rectE.top <= event.clientY && event.clientY <= rectE.top + rectE.height &&
			rectE.left <= event.clientX && event.clientX <= rectE.left + rectE.width);
			  if (!isInDialogE) {
				document.getElementById("fichaModalE").close();
			  }
		});
		document.getElementById("fichaModalF").addEventListener('click', (event)=> {
			  let rectF = document.getElementById("fichaModalF").getBoundingClientRect();
			  let isInDialogF = (rectF.top <= event.clientY && event.clientY <= rectF.top + rectF.height &&
			rectF.left <= event.clientX && event.clientX <= rectF.left + rectF.width);
			  if (!isInDialogF) {
				document.getElementById("fichaModalF").close();
			  }
		});
		
	<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "title": "Fichas Comerciales", "data-astro-cid-ipeqng2x": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-ipeqng2x> <section class="grid-fichas" data-astro-cid-ipeqng2x> <img src="/viviendaA.webp" id="botonA" class="boton-ficha" alt="ficha comercial A" data-astro-cid-ipeqng2x> <img src="/viviendaB.webp" id="botonB" class="boton-ficha" alt="ficha comercial B" data-astro-cid-ipeqng2x> <img src="/viviendaC.webp" id="botonC" class="boton-ficha" alt="ficha comercial C" data-astro-cid-ipeqng2x> <img src="/viviendaD.webp" id="botonD" class="boton-ficha" alt="ficha comercial D" data-astro-cid-ipeqng2x> <img src="/viviendaE.webp" id="botonE" class="boton-ficha" alt="ficha comercial E" data-astro-cid-ipeqng2x> <img src="/viviendaF.webp" id="botonF" class="boton-ficha" alt="ficha comercial F" data-astro-cid-ipeqng2x> </section> <div data-astro-cid-ipeqng2x> <dialog id="fichaModalA" data-astro-cid-ipeqng2x> <img src="/viviendaA.webp" alt="ficha comercial" class="modalImage" data-astro-cid-ipeqng2x> </dialog> <dialog id="fichaModalB" data-astro-cid-ipeqng2x> <img src="/viviendaB.webp" alt="ficha comercial" class="modalImage" data-astro-cid-ipeqng2x> </dialog> <dialog id="fichaModalC" data-astro-cid-ipeqng2x> <img src="/viviendaC.webp" alt="ficha comercial" class="modalImage" data-astro-cid-ipeqng2x> </dialog> <dialog id="fichaModalD" data-astro-cid-ipeqng2x> <img src="/viviendaD.webp" alt="ficha comercial" class="modalImage" data-astro-cid-ipeqng2x> </dialog> <dialog id="fichaModalE" data-astro-cid-ipeqng2x> <img src="/viviendaE.webp" alt="ficha comercial" class="modalImage" data-astro-cid-ipeqng2x> </dialog> <dialog id="fichaModalF" data-astro-cid-ipeqng2x> <img src="/viviendaF.webp" alt="ficha comercial" class="modalImage" data-astro-cid-ipeqng2x> </dialog> </div> </main> ` }));
}, "C:/Users/xema_/Documents/Dev/AppKotek/src/pages/fichas.astro", void 0);

const $$file = "C:/Users/xema_/Documents/Dev/AppKotek/src/pages/fichas.astro";
const $$url = "/fichas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Fichas,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
