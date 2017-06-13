$(function() {

    $('.tab-panels .tabs li').on('click', function() {

        var $panel = $(this).closest('.tab-panels');

        $panel.find('.tabs li.active').removeClass('active');
        $(this).addClass('active');

        //figure out which panel to show
        var panelToShow = $(this).attr('rel');

        //hide current panel
        $panel.find('.panel.active').fadeOut(300, showNextPanel);

        //show next panel
        function showNextPanel() {
            $(this).removeClass('active');

            $('#'+panelToShow).fadeIn(300, function() {
                $(this).addClass('active');
            });
        }
    });


    // Thriller panel

    $('.panelki .tabs-thrill li').on('mouseover', function(){
      var $panelek = $(this).closest('.panelki');

      $panelek.find('.tabs-thrill li.active').removeClass('active');
      $(this).addClass('active');

      var panelekToShow = $(this).attr('rel');

      $panelek.find('.panel-thrill.active').fadeOut(300, showNextPanelek);

      function showNextPanelek() {
        $(this).removeClass('active');

        $('#'+panelekToShow).fadeIn(300, function(){
          $(this).addClass('active');
        });
      }


    });

});
