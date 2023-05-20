const { none, show } = {
    none: "d-none",
    show: 'show'
}


$('.change-name-user-profile').on('click', function (){
    $('.user-profile-name').addClass(none);
    $('.form-change-name-user').removeClass(none)
})

$('.save-user-info').on('click', function (){
    $('.user-profile-name').removeClass(none);
    $('.form-change-name-user').addClass(none)
})

$('.close-green-message').on('click', function (){
    $(this).parent().addClass(none)
})


$('.open-green-message').on('click', function (){
    $('.green-message').addClass(show);

    setTimeout(() => {
        $('.green-message').removeClass(show);
    }, 3000)
})
