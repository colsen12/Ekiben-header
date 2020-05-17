const toggleButton = document.getElementsByClassName('menu-button')[0]
const navbarLinks = document.getElementsByClassName('nav-mobile')[0]
const mainPage = document.getElementsByClassName('main-page')[0]
const logo = document.getElementsByClassName('logo-mobile')[0]
const mobileFooter = document.getElementsByClassName('mobile-footer')[0]
const desktopFooter = document.getElementsByClassName('desktop-footer')[0]
const navbarMobile = document.getElementsByClassName('nav-menu-mobile')[0]
const greenLine = document.getElementsByClassName('green-line')[0]
const header = document.getElementsByClassName('header')[0]

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active')
	mainPage.classList.toggle('active')
	logo.classList.toggle('active')
	mobileFooter.classList.toggle('active')
	desktopFooter.classList.toggle('active')
	navbarMobile.classList.toggle('active')
	greenLine.classList.toggle('active')
	header.classList.toggle('active')
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("myimg").style.height = "90px";
    document.getElementById("myimg").style.width = "90px";
    document.getElementById("mynav").style.display = "flex";
    document.getElementById("mynav").style.justifyContent = "space-between";

  } else {
    document.getElementById("mynav").style.display = "grid";
    document.getElementById("mynav").style.justifyContent = "center";
    document.getElementById("myimg").style.height = "150px";
    document.getElementById("myimg").style.width = "150px";
    document.getElementById("mynav").style.alignItems = "center";
  }
}
