window.onload = function() {
    let button = document.getElementById("send-data");
    button.onclick = validateForm;
}

function validateForm(event)
{
    //prevent the form from submitting
    event.preventDefault();

    //count the number of errors...
    let errorCount = 0;

    //validate the form...
    let name = document.querySelector("#name").value;
    let error = document.querySelector("#name-error");

    //make sure the name is between 3 and 10 characters
    if (name.length < 3 || name.length > 10)
    {
        //show the error message
        error.style.display = "inline";
        errorCount++;
    }
    else
    {
        error.style.display = "none";
    }

    let phone = document.querySelector("#phone").value;
    let phoneError = document.querySelector("#phone-error");

    if (phone.length === 0)
    {
        phoneError.style.display = "inline";
        errorCount++;
    }
    else
    {
        phoneError.style.display = "none";
    }

    //submit the form if there are no errors!
    if (errorCount === 0)
    {
        document.forms["questionnaire"].submit();
    }
}

