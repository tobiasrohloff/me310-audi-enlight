// IIFE - Immediately Invoked Function Expression
(function(yourcode) {
  // The global jQuery object is passed as a parameter
  yourcode(window.jQuery, window, document);
}(function($, window, document) {
  // The $ is now locally scoped

  // Listen for the jQuery ready event on the document
  $(function() {
    // console.log('The DOM is ready');
    // The DOM is ready!
    $('.switch').bootstrapSwitch();

    $('.container').on("switchChange.bootstrapSwitch", ".switch", function(event, state) {
      $.post($(this).data('activate-url'), { activate: state });
    });
  });

  // console.log('The DOM may not be ready');
  // The rest of code goes here!

}));
