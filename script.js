import sitedata from './maindata.js'
let menuOpen = true;
let japanese =true
const menu = document.getElementById('menu');
const menubtn = document.getElementById('menu-button');
const langbtn = document.getElementById('langbtn');
const culture = document.getElementById('culture');
const lifestyle = document.getElementById('lifestyle');

const toggleMenu = () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
};

const togglelang = () => {
    japanese = !japanese
    if (japanese) {
        langbtn.innerText = "English"
    } else {
        langbtn.innerText = "日本語"
    }
    if (!japanese) {
        culture.innerHTML = sitedata[0].english[0].subSections.map((item) => {
            return `
                         <div class="mb-8">
                                    <h2 class="text-2xl font-bold mb-4">${item.title}</h2>
                                    <p class="text-gray-700 mb-4">${item.description}</p>
                         </div> `
        }
        )
        lifestyle.innerHTML = sitedata[0].english[1].subSections.map((item) => {
            return `
                         <div class="mb-8">
                                    <h2 class="text-2xl font-bold mb-4">${item.title}</h2>
                                    <p class="text-gray-700 mb-4">${item.description}</p>
                         </div> `
        }
        )

    }
    if (japanese) {
        culture.innerHTML = sitedata[0].japanese[0].subSections.map((item) => {
            return `
                         <div class="mb-8">
                                    <h2 class="text-2xl font-bold mb-4">${item.title}</h2>
                                    <p class="text-gray-700 mb-4">${item.description}</p>
                         </div> `
        }
        )
       lifestyle.innerHTML = sitedata[0].japanese[1].subSections.map((item) => {
            return `
                         <div class="mb-8">
                                    <h2 class="text-2xl font-bold mb-4">${item.title}</h2>
                                    <p class="text-gray-700 mb-4">${item.description}</p>
                         </div> `
        }
        )
    }
};



const handleResize = () => {
    if (window.innerWidth > 768) {
        menu.classList.remove('hidden');
    }
    else {
        menuOpen = false
        menu.classList.add('hidden');
    }
};
handleResize()
togglelang()

console.log("rendering")

window.addEventListener('resize', handleResize);
menubtn.addEventListener('click', toggleMenu);
langbtn.addEventListener('click', togglelang);
