/* Main app js file code optimization is the  next step */

$(document).ready(function () {
  var dataArray = [];
  $('.add-row').click(function () {
    var
    email = $('#email').val();
    country_incorporation = $('#country_incorporation').val(),
    shares_purchased = $('#shares_purchased').val(),
    type__shares_= $('#type__shares_').val(),
    price_pershare = $('#price_pershare').val(),
    grace_period = $('#grace_period').val(),
    percentage_payments = $('#percentage_payments').val(),
    repurchases = $('#repurchases').val(),
    exit_multiple = $('#exit_multiple').val(),
    first_refusal_partcicipation = $('#first_refusal_partcicipation').val(),
    sale_materialtransaction = $('#sale_materialtransaction').val(),
    consent_materialtransaction = $('#consent_materialtransaction').val(),
    what_consents_and_approvals_are_needed_to_issue_this_shield_ = $('#what_consents_and_approvals_are_needed_to_issue_this_shield_').val();
    what_date_are_you_issuing_this_investment_agreement_ = $('#what_date_are_you_issuing_this_investment_agreement_').val();
    what_is_the_investment_amount_ = $('#what_is_the_investment_amount_').val();
    what_is_the_investor_s_name_ = $('#what_is_the_investor_s_name_').val();
    what_valuation_cap_will_this_shield_be_converting_ = $('#what_valuation_cap_will_this_shield_be_converting_').val();
    which_company_is_receiving_the_investment_ = $('#which_company_is_receiving_the_investment_').val();

  

    var myObject = {
    "email": email,
    "country_incorporation": country_incorporation,
    "shares_purchased": shares_purchased,
    "type__shares_": type__shares_,
    "price_pershare": price_pershare,
    "grace_period": grace_period,
    "percentage_payments": percentage_payments,
    "repurchases": repurchases,
    "exit_multiple": exit_multiple,
    "first_refusal_partcicipation": first_refusal_partcicipation,
    "sale_materialtransaction": sale_materialtransaction,
    "consent_materialtransaction": consent_materialtransaction,
    "which_company_is_receiving_the_investment_": which_company_is_receiving_the_investment_,
    "what_consents_and_approvals_are_needed_to_issue_this_shield_": what_consents_and_approvals_are_needed_to_issue_this_shield_,
    "what_date_are_you_issuing_this_investment_agreement_": what_date_are_you_issuing_this_investment_agreement_,
    "what_is_the_investment_amount_": what_is_the_investment_amount_,
    "what_is_the_investor_s_name_": what_is_the_investor_s_name_,
    "what_valuation_cap_will_this_shield_be_converting_":  what_valuation_cap_will_this_shield_be_converting_
    }

    const myHeaders = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*',
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoibGF1bmNoYmFzZWFwaSIsInBhc3N3b3JkIjoicEAhaVZ2Zk5nM3BUUmg0dHMifSwiaWF0IjoxNjM0MzE4Njc3LCJleHAiOjE2NDIwOTQ2Nzd9.B13f2dAtLueL7QLb1lpFOfgu0fZ74_YhPCMAPcfHVzY'
  });

    fetch('http://localhost:8000/api/scrld/generate/doc/rbera', {
      method: 'POST', 
      headers: myHeaders,
      body: JSON.stringify(myObject)
    })
    .then(response => response.blob())
    .then(function(myBlob) {
      var objectURL = webkitURL.createObjectURL(myBlob);
      // window.location.href = objectURL;
      // download(myBlob)
      // https://stackoverflow.com/questions/32545632/how-can-i-download-a-file-using-window-fetch
      var file = window.URL.createObjectURL(myBlob);
      window.location.assign(file)
    })
      .catch((error) => {
        console.error({'Error': error});
      });
  });

});

