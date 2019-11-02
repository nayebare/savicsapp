/* Main app js file */

$(document).ready(function () {
  $('.add-row').click(function () {
    var inputData = {};
    var fname = $('#fname').val();
    lname = $('#lname').val();
    age = $('#age').val();
    sex = $('input[name=gender]:checked', '#medicalForm').val(); 
    city = $('#city').val();
    country = $('#country').val();
    diabetesCheck = $('input[name=diabetesCheck]:checked', '#medicalForm').val(); 

    //apply mock-backend server result here
    var markup = "<tr style='background-color:#ffe484;'><td>" + fname + '</td><td>' + lname + '</td><td>' + age + '</td><td>' + sex + '</td><td>' + country + '</td><td>' + city + '</td><td>' + diabetesCheck + '</td><td><span class="deletebtn">x</span></td></tr>';
    $('table tbody').append(markup);
  });// end main function

  //trying the filter function

  var tds = $("table#customerDetails tr td:contains('male')");


  $("#minors_check").click(function() { 

    table = document.getElementById("customerDetails");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
       
      td = tr[i].getElementsByTagName("td")[0];
      alert(tr[i].getElementsByTagName("td")[0])
  
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
}


}); 
  // Find and remove selected table rows
  $(document).on('click', 'span.deletebtn', function () {
    $(this).closest('tr').remove();
    return false;
  });
});