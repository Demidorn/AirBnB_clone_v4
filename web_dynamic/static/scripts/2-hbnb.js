const $ = window.$;
$(function () {
  const selectedAmenities = {};
  function check () {
    $('div.amenities li input').map(function () {
      if ($(this).is(':checked')) {
        selectedAmenities[($(this).attr('data-id'))] = $(this).attr('data-name');
      } else {
        delete lili[($(this).attr('data-id'))];
      }
      $('.amenities .popover input').html(Object.values(selectedAmenities).join(', ') || ' ');
    });
  }
  check();
  $('.amenities .popover input').change(function () {
    check();
  });
  $.getJSON('http://0.0.0.0:5001/api/v1/status/', (data) => {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
});
