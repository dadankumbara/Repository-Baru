(function () {
	"use strict";

	/**
	 * Easy selector helper function
	 */
	const select = (el, all = false) => {
		el = el.trim()
		if (all) {
		return [...document.querySelectorAll(el)]
		} else {
		return document.querySelector(el)
		}
	}

	/**
	 * Easy on scroll event listener 
	 */
	const onscroll = (el, listener) => {
		el.addEventListener('scroll', listener)
	}

	/**
   * Navbar links active state on scroll
   */
	 let navbarlinks = select('#navbar .scrollto', true)
	 const navbarlinksActive = () => {
	   let position = window.scrollY + 200
	   navbarlinks.forEach(navbarlink => {
		 if (!navbarlink.hash) return
		 let section = select(navbarlink.hash)
		 if (!section) return
		 if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
		   navbarlink.classList.add('active')
		 } else {
		   navbarlink.classList.remove('active')
		 }
	   })
	 }
	 window.addEventListener('load', navbarlinksActive)
	 onscroll(document, navbarlinksActive)

	/**
	 * Navbar scroll state on scroll
	 */
	 let navbar = select('.navbar-light')
	 if (navbar) {
	 const toggleNavbar = () => {
		if (window.scrollY > 100) {
		navbar.classList.add('scroll')
		} else {
		navbar.classList.remove('scroll')
		}
	 }
	 window.addEventListener('load', toggleNavbar)
	 onscroll(document, toggleNavbar)
	}

	/**
	 * Back to top button
	 */
	let backtotop = select('.back-to-top')
	if (backtotop) {
	const toggleBacktotop = () => {
		if (window.scrollY > 100) {
		backtotop.classList.add('active')
		} else {
		backtotop.classList.remove('active')
		}
	}
	window.addEventListener('load', toggleBacktotop)
	onscroll(document, toggleBacktotop)
	}
})()