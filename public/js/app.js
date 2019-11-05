/* Main app js file */

$(document).ready(function () {
  $('.add-row').click(function () {
   
    var fname = $('#fname').val();
        lname = $('#lname').val();
        age = $('#age').val();
        sex = $('input[name=gender]:checked', '#medicalForm').val();
        city = $('#city').val();
        country = $('#country').val();
        diabetesCheck = $('input[name=diabetesCheck]:checked', '#medicalForm').val();

  
      var dataArray = [];
        dataArray.push(fname,lname,age,sex,city,country,diabetesCheck)

    if (!/^[0-9]+$/.test(age) || age == '') {
     alert("The age field can not be empty.Please enter the valid age.");
    }else{
    }

     if (dataArray.length > 0) {
      var markup = "<tr style='background-color:#ffe484;'><td>" + dataArray[0] + '</td><td>' + dataArray[1] + '</td><td>' + dataArray[2] + '</td><td>' + dataArray[3] + '</td><td>' + dataArray[4] + '</td><td>' + dataArray[5] + '</td><td>' + dataArray[6] + '</td><td><span class="deletebtn">x</span></td></tr>';
      $('table tbody').append(markup);
     }

      //for-minors-check
      $("#minors_check").on("click", function () {
        var value = $(this).val().toLowerCase();
        var ArrayTable = [];
                $('#customerDetails td').each(function(){
                    ArrayTable.push($(this).text()); 
                });
             
            for (i=0;i<ArrayTable.length;++i){  
              if(parseInt(ArrayTable[i]) < value){
                $("#customerDetails tr").filter(function() {
                  $(this).show()
                })
              }else{
                $("#customerDetails tr").hide()
              }
            }
         
      });// end main function
    });
  });


