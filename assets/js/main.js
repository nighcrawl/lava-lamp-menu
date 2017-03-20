jQuery(document).ready(function($) {
    $(function() {
        $(".menu").lavaLamp({
            fx: "backout",
            speed: 700,
            click: function(event, menuItem) {
                return false;
            }
        });
    });
});