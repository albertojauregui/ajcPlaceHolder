(function($) {
  $.fn.ajcPlaceHolder = function() {
    return this.each(function(){
      var $this = $(this);
      var defvalue = $this.attr("auxvalue") || "";
      if($.trim($this.val()) == ""){$this.val(defvalue);}
      $this.focus(function() {if($this.val() == defvalue) {$this.val("");}});
      $this.blur(function() {if($.trim($this.val()) == "") {$this.val(defvalue)}});
    });
  }
 })(jQuery);