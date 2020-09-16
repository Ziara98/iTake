$(".default_option").click(function () {
    $(this).parent().toggleClass("active");

})

$(".select_ul li").click(function () {
    var currentele = $(this).html();
    $(".default_option li").html(currentele);
    $(this).parents(".select_wrap").removeClass("active");
})



//моя попытка написать на чистом js
// let default_option = document.querySelector('.default_option'),
//     change_links = document.querySelectorAll('.select_ul li'),
//     default_link = document.querySelectorAll('.default_option li'),
//     select_wrap = document.querySelector('.select_wrap');


// default_option.addEventListener('click', () => {
//     select_wrap.classList.toggle('active');
// });

// function each(links, div) {
//     links.forEach(elem => {
//         elem.addEventListener('click', () => {
//             let inner = elem.textContent;
//             div.innerHTML(inner);

//         });
//     });
// };

// each(change_links, default_link)