$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var fullNameInput = $("input#fullName").val();
    var creditCardNumberInput = $("input#creditCardNumber").val();
    var addressInput = $("input#address").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipCodeInput = $("input#zipCode").val();

    $(".fullName").text(fullNameInput);
    $(".creditCardNumber").text(creditCardNumberInput);
    $(".address").text(addressInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zipCode").text(zipCodeInput);

    $("#letter").show();
    $(".formOne") .hide();

    event.preventDefault();
  

  });
});
