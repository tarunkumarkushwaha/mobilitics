import sitedata from './maindata.js'
let menuOpen = true;
let japanese = true
const menu = document.getElementById('menu');
const rightmenuitems = document.getElementById('right-menu-items');
const menubtn = document.getElementById('menu-button');
const langbtn = document.getElementById('langbtn');
const culture = document.getElementById('culture');
const lifestyle = document.getElementById('lifestyle');
const poularjobscard = document.getElementById('poularjobs');


const toggleMenu = () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
        menu.classList.remove('hidden');
        rightmenuitems.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
        rightmenuitems.classList.add('hidden');
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
                                    <h2 class="text-2xl text-gray-100 font-bold mb-4">${item.title}</h2>
                                    <p class="text-gray-100 mb-4">${item.description}</p>
                         </div> `
        }
        ).join("")
        lifestyle.innerHTML = sitedata[0].english[1].subSections.map((item) => {
            return `
                         <div class="mb-8">
                                    <h2 class="text-2xl text-gray-100 font-bold mb-4">${item.title}</h2>
                                    <p class="text-gray-100 mb-4">${item.description}</p>
                         </div> `
        }
        ).join("")
        poularjobscard.innerHTML = sitedata[0].english[2].carddata.map((item) => {
            return `
            <div class="bg-white rounded-lg relative pb-8 shadow-md overflow-hidden hover:scale-105 duration-500">
            <img src=${item.imageUrl}
                alt="Job" class="w-full h-64 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800">${item.title}</h3>
                <p class="mt-2 text-gray-600">${item.description}</p>
                <a href="#" class="absolute bottom-5 mt-4 text-blue-500 font-semibold hover:underline">View
                    Details</a>
            </div>
        </div> `
        }
        ).join("")



    }
    if (japanese) {
        culture.innerHTML = sitedata[0].japanese[0].subSections.map((item) => {
            return `
                         <div class="mb-8">
                                    <h2 class="text-2xl text-gray-100 font-bold mb-4">${item.title}</h2>
                                    <p class="text-gray-100 mb-4">${item.description}</p>
                         </div> `
        }
        ).join("")
        lifestyle.innerHTML = sitedata[0].japanese[1].subSections.map((item) => {
            return `
                         <div class="mb-8">
                                    <h2 class="text-2xl text-gray-100 font-bold mb-4">${item.title}</h2>
                                    <p class="text-gray-100 mb-4">${item.description}</p>
                         </div> `
        }
        ).join("")
        poularjobscard.innerHTML = sitedata[0].japanese[2].carddata.map((item) => {
            return `
            <div class="bg-white relative rounded-lg pb-8 shadow-md overflow-hidden hover:scale-105 duration-500">
            <img src=${item.imageUrl}
                alt="Job" class="w-full h-64 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-800">${item.title}</h3>
                <p class="mt-2 text-gray-600">${item.description}</p>
                <a href="#" class="mt-4 text-blue-500 absolute bottom-5 font-semibold hover:underline">View
                    Details</a>
            </div>
        </div> `
        }
        ).join("")
    }
};



const handleResize = () => {
    if (window.innerWidth > 768) {
        menu.classList.remove('hidden');
        rightmenuitems.classList.remove('hidden');
    }
    else {
        menuOpen = false
        menu.classList.add('hidden');
        rightmenuitems.classList.add('hidden');
    }
};
handleResize()
togglelang()

console.log("rendering")

window.addEventListener('resize', handleResize);
menubtn.addEventListener('click', toggleMenu);
langbtn.addEventListener('click', togglelang);

// slider 
let currentIndex = 0;
const slides = document.querySelector('.slides');
const slideWidth = document.querySelector('.slider').clientWidth;
const totalSlides = document.querySelectorAll('.slides img').length;

function nextSlide() {
    currentIndex++;
    if (currentIndex === totalSlides) {
        currentIndex = 0;
    }
    updateSlider();
}

function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

setInterval(nextSlide, 2000);

