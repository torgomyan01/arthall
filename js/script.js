const {none, show, active} = {
    none: "d-none",
    show: 'show',
    active: 'active'
}

$('.change-name-user-profile').on('click', function () {
    $('.user-profile-name').addClass(none);
    $('.form-change-name-user').removeClass(none)
})

$('.save-user-info').on('click', function () {
    $('.user-profile-name').removeClass(none);
    $('.form-change-name-user').addClass(none)
})

$('.close-green-message').on('click', function () {
    $(this).parent().addClass(none)
})


$('.open-green-message').on('click', function () {
    $('.green-message').addClass(show);

    setTimeout(() => {
        $('.green-message').removeClass(show);
    }, 3000)
})

const Button = $('.btn-sign')
const tabSignUp = $('.sign-up-tab');

Button.on('click', function () {
    Button.removeClass(active);
    $(this).addClass(active);
    tabSignUp.addClass(none);
    $(`.sign-up-tab[data-tabname="${$(this).text()}"]`).removeClass(none)
})


$('.select-image-crete-work').on('change', function (e) {
    const files = e.target.files;
    $(this).prev().prev('span').text(files[0] ? files[0]?.name : 'Выберите изображение в формате PNG или JPG')
})


$('.sign-up-image').on('change', function (e) {
    const files = e.target.files;
    $('.sign-up-image-text').html(files[0] ? files[0]?.name : 'Файл в формате <br> PNG или JPG')
})


const dataMask = document.getElementById('data-mask');
const dataMaskEnd = document.getElementById('data-mask-end');

if(dataMask && dataMaskEnd){
    IMask(dataMask,
        {
            mask: Date,
            min: new Date(1990, 0, 1),
            max: new Date(),
            lazy: false
        });

    IMask(dataMaskEnd,
        {
            mask: Date,
            min: new Date(1990, 0, 1),
            max: new Date(2050, 0, 1),
            lazy: false
        });
}

