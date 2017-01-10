$(document).ready(function() {
    //$('#fullpage').fullpage();
    $('#fullpage').fullpage({
        menu: '#menu',
        anchors:['home','identidades-visuais', 'campanhas', 'contato']
    });
    $(".button-collapse").sideNav();
});
