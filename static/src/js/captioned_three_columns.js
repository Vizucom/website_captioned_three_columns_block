 $(document).ready(function() {
    /* 
    FIXME: Setting the caption size is done in documentReady to avoid
    breaking the layout. If possible, this would be better done in 
    CSS/HTML markdown only 
    */
    $(".captioned_image_wrap").each(function() {
        var imgWidth = $(this).find(".captioned_image_img").width();
        $(this).find("div.captioned_image_caption").width(imgWidth+"px")
    });
}); 