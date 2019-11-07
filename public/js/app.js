/* Main app js file code optimization is the  next step */

$(document).ready(function () {
  var dataArray = [];
  $('.add-row').click(function () {
    var fname = $('#fname').val();
    lname = $('#lname').val();
    age = $('#age').val();
    sex = $('input[name=gender]:checked', '#medicalForm').val();
    city = $('#city').val();
    country = $('#country').val();
    diabetesCheck = $('input[name=diabetesCheck]:checked', '#medicalForm').val();


    var compare = /[0-9]{10}/;
    if (age.match(compare)) {


      var myObject = {};
      myObject.fname = fname;
      myObject.lname = lname;
      myObject.age = age;
      myObject.sex = sex;
      myObject.city = city;
      myObject.country = country;
      myObject.diabetesCheck = diabetesCheck;

      dataArray.push(myObject)
      localStorage.setItem("tempData", JSON.stringify(dataArray));

      if (dataArray.length > 0) {
        for (i = 0; i < dataArray.length; i++) {
          var markup = "<tr style='background-color:#ffe484;'><td>" + dataArray[i].fname + '</td><td>' + dataArray[i].lname + '</td><td>' + dataArray[i].age + '</td><td>' + dataArray[i].sex + '</td><td>' + dataArray[i].city + '</td><td>' + dataArray[i].country + '</td><td>' + dataArray[i].diabetesCheck + '</td></tr>';
        }
        $('table tbody').append(markup);
      }
    } else {
      alert("The age must be a number")
    }
  });


  //minors check
  $("#minors_check").on("click", function () {
    $('table tbody').empty();
    var localStorageData = JSON.parse((localStorage.getItem("tempData")));
    for (i = 0; i < localStorageData.length; i++) {
      if (localStorageData[i].age < 18) {
        var markup = "<tr style='background-color:##A9A9A9;'><td>" + localStorageData[i].fname + '</td><td>' + localStorageData[i].lname + '</td><td>' + localStorageData[i].age + '</td><td>' + localStorageData[i].sex + '</td><td>' + localStorageData[i].city + '</td><td>' + localStorageData[i].country + '</td><td>' + localStorageData[i].diabetesCheck + '</td></tr>';
        $('table tbody').append(markup);
      }

    }

  });

});


