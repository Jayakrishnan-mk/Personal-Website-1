

function emailvali() {
    value1 = false;
    if ($("#femail").val().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        document.getElementById("pemail").style.display = "none";
        value1 = true;
    } else {
        document.getElementById("pemail").style.display = "block";
        document.getElementById("pemail").innerText = "Enter a valid email id";
        value1 = false;
    }

}

function namevali() {

    value2 = false;
    value5 = false;

    if ($("#fname").val().match(/^[A-Za-z][A-Za-z ]*$/)) {
        value2 = true;
        document.getElementById("pname").style.display = "none";
    }
    else {
        document.getElementById("pname").style.display = "block";
        document.getElementById("pname").innerText = "Enter a valid Name";
        value2 = false;

    }



    if ($("#fname").val().length < 4) {

        value5 = false;
        document.getElementById("pname").style.display = "block";
        document.getElementById("pname").innerText = "Minimum Length of this field is 4";

    }
    else {
        value5 = true;
    }


}
function subvali() {

    value6 = false;

    if ($("#fsubject").val().match(/^[A-Za-z][a-z A-Z0-9_.-]*$/)) {
        value6 = true;
        document.getElementById("psubject").style.display = "none";
    }
    else {
        document.getElementById("psubject").style.display = "block";
        document.getElementById("psubject").innerText = "Enter a valid Subject";
        value6 = false;

    }

    value3 = false;

    if ($("#fsubject").val().length < 5) {
        value4 = false;
        document.getElementById("psubject").style.display = "block";
        document.getElementById("psubject").innerText = "Minimum Length of this field is 5 characters";

    }
    else {
        value3 = true;
        // document.getElementById("pmessage").style.display="none";
    }




}
function messvali() {

    value7 = false;

    if ($("#fmessage").val().match(/^[A-Za-z][a-z A-Z0-9_.-]*$/)) {
        value7 = true;
        document.getElementById("pmessage").style.display = "none";
    }
    else {
        document.getElementById("pmessage").style.display = "block";
        document.getElementById("pmessage").innerText = "Enter a valid Message";
        value7 = false;

    }

    value4 = false;

    if ($("#fmessage").val().length < 5) {
        value4 = false;
        document.getElementById("pmessage").style.display = "block";
        document.getElementById("pmessage").innerText = "Minimum Length of this field is 5 characters";

    }
    else {
        value4 = true;
        // document.getElementById("pmessage").style.display="none";
    }




}
let a = 3
let b = 5
function numchange() {
    if (a < b) {
        value8 = true
    } else {
        value8 = false
    }
}


// $("#main-contact-form").submit((e)=>{
//   e.preventDefault()
//   let name = document.getElementById('fname').value;
//   let subject = document.getElementById('fsubject').value;
//   let message = document.getElementById('fmessage').value;
//   let email = document.getElementById('femail').value;

// // console.log(name);


// })


$("#main-contact-form").submit((e) => {
    e.preventDefault()

    if (value1 == true && value6 == true && value7 == true && value2 == true && value3 == true && value4 == true && value5 == true && value8 == true) {

        value8 = false

        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxKrci4Ztvqud8O3l72jwfmgDmDpr7b1aaZXESVQ_quozoo4I-4/exec",
            data: $("#main-contact-form").serialize(),
            method: "post",
            success: function (response) {

                //   alert("Form submitted successfully")
                document.getElementById("msg").innerHTML = "Form Submitted successfully."
                //   window.location.reload()

                fname.value = "";
                femail.value = "";
                fsubject.value = "";
                fmessage.value = "";

                //window.location.href="https://google.com"
            },
            error: function (err) {
                alert("Something Error")

            }
        })

    }


})