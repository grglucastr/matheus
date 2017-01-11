$(document).ready(function() {
    $('#fullpage').fullpage({
        menu: '#menu',
        anchors:['homepage','identidades-visuais',
        'campanhas', 'anuncios', 'websites',
        'redes-sociais', 'contato'],

        onLeave: onLeaveFn,
    });
});

function onLeaveFn(index, nextIndex, direction){
    var leavingSection = $(this);

    //after leaving section 1
    if(index == 1 && direction =='down'){
        if($("#menu").hasClass('main-menu-regular')){
            $("#menu").removeClass('main-menu-regular');
        }
        $("#menu").addClass('main-menu-floating');

    }else if(index == 2 && direction == 'up'){
        $("#menu").removeClass('main-menu-floating');
        $("#menu").addClass('main-menu-regular');

    }else if(index == 3 && direction == 'up' && nextIndex == 1){
        $("#menu").removeClass('main-menu-floating');
        $("#menu").addClass('main-menu-regular');

    }else if(index == 4 && direction == 'up' && nextIndex == 1){
        $("#menu").removeClass('main-menu-floating');
        $("#menu").addClass('main-menu-regular');

    }else if(index == 5 && direction == 'up' && nextIndex == 1){
        $("#menu").removeClass('main-menu-floating');
        $("#menu").addClass('main-menu-regular');

    }else if(index == 6 && direction == 'up' && nextIndex == 1){
        $("#menu").removeClass('main-menu-floating');
        $("#menu").addClass('main-menu-regular');

    }else if(index == 7 && direction == 'up' && nextIndex == 1){
        $("#menu").removeClass('main-menu-floating');
        $("#menu").addClass('main-menu-regular');
    }
}
