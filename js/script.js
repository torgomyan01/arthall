const {none, show, active} = {
    none: "d-none",
    show: 'show',
    active: 'active'
}
const Button = $('.btn-sign')

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

Button.on('click', function () {
    Button.removeClass(active);
    $(this).addClass(active);
})


$('.select-image-crete-work').on('change', function (e) {
    const files = e.target.files;
    $(this).prev().prev('span').text(files[0] ? files[0]?.name : 'Выберите изображение в формате PNG или JPG')
})

const dataMask = document.getElementById('data-mask');
const dataMaskEnd = document.getElementById('data-mask-end');

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

