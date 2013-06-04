(function() {
    "use strict";

    $('.adv-options-form, .dashboard-event-details').hide();

    // Advanced toggle click.
    $('.adv-options-toggle').click(function() {
        $(this).siblings('.adv-options-form').slideToggle('fast', function(){
          $(this).siblings('.adv-options-toggle').toggleClass('open', $(this).is(':visible'));
        });
    });

    // Events expander button click.
    $('.event-name .item-expand').click(function() {
        $(this).siblings('.dashboard-event-details').slideToggle('fast', function(){
          $(this).siblings('.item-expand').toggleClass('open', $(this).is(':visible'));
        });
    });

    $('table').each(function(index, item) { $(item).stupidtable(); });
    // Apply prettyDate on all elements with data-time attribute.
    $('*').find('*[data-time]').prettyDate({attribute:'data-time', interval: 60000, isUTC:true});

    // Render charts from tables
    // @Requires: jquery.visualize.js
    $('table.chart-table').visualize({
      type: 'area',
      width: '500px',
      appendKey: 'true',
      colors: [
        '#bf0c3f',
        '#e97d0a',
        '#096b8b',
        '#51b009',
        '#684dac',
        '#eac90f',
        '#28adfa',
        '#f45a90',
        '#7b1b48']
    })
    .appendTo($(this).parents('.reveal-modal').find('div.chart'))
    .trigger('visualizeRefresh');

})();
