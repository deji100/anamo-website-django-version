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
const testimonial = document.querySelector(".testimonial")
const faqInner = document.querySelector(".main .faqs .inner")

headerTitle.forEach(el => observer.observe(el))
observer.observe(headerDesc);
observer.observe(headerTitleBtns)
partnerImgBG.forEach(el => observer.observe(el))
partnerImg.forEach(el => observer.observe(el))
observer.observe(aboutInner)
observer.observe(aboutImg)
observer.observe(cdmInner)
observer.observe(testimonial)
observer.observe(faqInner)
contentImg.forEach(el => observer.observe(el))
contentDetail.forEach(el => observer.observe(el))

document.querySelectorAll('.faq .icon').forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('active');

        const answer = icon.closest('.faq').querySelector('.answer');

        answer.classList.toggle('active');
    });
});


$(document).ready(function () {
    const $navItems = $(".nav span");
    const $contents = $(".contents .content");

    function showContent(id) {
        $contents.each(function () {
            $(this).css("display", $(this).hasClass(id) ? "block" : "none");
        });

        $navItems.each(function () {
            $(this).toggleClass("active", this.id === id);
        });
    }

    $navItems.each(function () {
        $(this).on("click", function () {
            showContent(this.id);
        });
    });

    showContent("one");
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


