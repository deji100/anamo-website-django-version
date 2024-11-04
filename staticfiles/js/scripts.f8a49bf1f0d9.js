const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }
        else {
            entry.target.classList.remove('show')
        }
    })
})

const headerTitle = document.querySelectorAll(".header-title");
const headerDesc = document.querySelector(".main .hero header .content .desc");
const headerTitleBtns = document.querySelector(".main .hero header .content .title .btns")
const partnerImgBG = document.querySelectorAll('.main .partners .inner .partner-list img.bg')
const partnerImg = document.querySelectorAll('.main .partners .inner .partner-list img')
const aboutInner = document.querySelector(".main .about .inner")
const aboutImg = document.querySelector(".main .about .inner .content img")
const cdmInner = document.querySelector(".main .cdm .inner")
const contentImg = document.querySelectorAll(".main .solution .inner .nav-content .content img")
const contentDetail = document.querySelectorAll(".main .solution .inner .nav-content .content .details")
const faqInner = document.querySelector(".main .faqs .inner")

headerTitle.forEach(el => observer.observe(el))
observer.observe(headerDesc);
observer.observe(headerTitleBtns)
partnerImgBG.forEach(el => observer.observe(el))
partnerImg.forEach(el => observer.observe(el))
observer.observe(aboutInner)
observer.observe(aboutImg)
observer.observe(cdmInner)
observer.observe(faqInner)
contentImg.forEach(el => observer.observe(el))
contentDetail.forEach(el => observer.observe(el))

document.querySelectorAll('.faq .icon').forEach(icon => {
    icon.addEventListener('click', () => {
        // Toggle the active class on the icon
        icon.classList.toggle('active');

        // Find the answer div within the same parent element (the .faq div)
        const answer = icon.closest('.faq').querySelector('.answer');

        // Toggle the active class on the answer div
        answer.classList.toggle('active');
    });
});


$(document).ready(function () {
    const $navItems = $(".nav span");
    const $contents = $(".contents .content");

    function showContent(id) {
        // Hide all content sections and remove active state from nav items
        $contents.each(function () {
            $(this).css("display", $(this).hasClass(id) ? "block" : "none");
        });

        $navItems.each(function () {
            $(this).toggleClass("active", this.id === id);
        });
    }

    // Add click event to each navigation item
    $navItems.each(function () {
        $(this).on("click", function () {
            showContent(this.id); // Pass the id to showContent
        });
    });

    // Display the first content by default
    showContent("one"); // Adjust to the initial content ID
});

$(document).ready(function () {
    const imgContainer = $(".main .solution .inner .nav-content .content .img-container")
    const icon = imgContainer.find(".icon")

    imgContainer.on('click', function (e) {
        e.stopPropagation()

        $(this).toggleClass('active')
        $(this).find('img').toggleClass('active')
        $(this).find('.icon').toggleClass('active')
    })

    icon.on('click', function (e) {
        e.stopPropagation()

        $(this).toggleClass('active')
        let container = $(this).closest('.img-container')
        container.toggleClass('active')
        container.find('img').toggleClass('active')
    })
})


