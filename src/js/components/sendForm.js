$(document).ready(function () {
  $('.form').submit(function () {
    const th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: th.serialize(),
    }).done(function () {
      alert('Заявка отправлена');
      setTimeout(function () {
        $('#name').parent().removeClass('valid');
        $('#phone').parent().removeClass('valid');
        th.trigger('reset');
      }, 1000);
    });
    return false;
  });
});
