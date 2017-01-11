$(document).ready(function() {
    //$('#fullpage').fullpage();
    $('#fullpage').fullpage({
        menu: '#menu',
        anchors:['homepage','identidades-visuais',
        'campanhas', 'anuncios', 'websites',
        'redes-sociais', 'contato'],

        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);

            //after leaving section 1
            if(index == 1 && direction =='down'){
                if($("#menu").hasClass('main-menu-regular')){
                    $("#menu").removeClass('main-menu-regular');
                }
                $("#menu").addClass('main-menu-floating');
                console.log('Add class');

            }else if(index == 2 && direction == 'up'){
                $("#menu").removeClass('main-menu-floating');
                $("#menu").addClass('main-menu-regular');
                console.log('remove class');
            }
        }
    });
    $(".button-collapse").sideNav();
    console.log(`Width: ${screen.width}`);
});
