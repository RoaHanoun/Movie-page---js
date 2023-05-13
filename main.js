// var click = document.getElementById('click')

var FirstName = document.getElementById('FirstName')
var SecoundName = document.getElementById('SecoundName')
var Email = document.getElementById('Email')
var Password = document.getElementById('Password')
var Comment = document.getElementById('Comment')
var Submit = document.getElementById('Submit')
var customors
// var update = document.getElementById("update");
var current_index = 0

checkInputs()
var isFNameValid = false;
var isSNameValid = false;
var isEmailValid = false;
var isPasswordValid = false;
var isCommentValid = false;

if(JSON.parse(localStorage.getItem('customors')) === null){
    customors = [];
  }else{
    customors = JSON.parse(localStorage.getItem('customors'));
  }


function checkInputs(){
    if (isFNameValid && isSNameValid && isEmailValid && isPasswordValid && isCommentValid){
      Submit.removeAttribute('disabled')
    }else{
      Submit.setAttribute('disabled','disabled')
    }
}
//submit 
Submit.onclick = function(e){
    e.preventDefault()
    addcustomor()
    resetInput()
    console.log(customors);
    Submit.setAttribute('disabled','disabled')
}
// add customor
  function addcustomor(){
    var customor = {
        FName : FirstName.value,
        SName : SecoundName.value,
        Email : Email.value,
        Password : Password.value,
        Comment : Comment.value
    }
    customors.push(customor);
    localStorage.setItem('customors',JSON.stringify(customors));
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'customor Added Sucessfully',
        showConfirmButton: false,
        timer: 1500
    })
}
// RESET 
function resetInput(){
    FirstName.value = ''
    SecoundName.value = ''
    Email.value = ''
    Password.value = ''
    Comment.value = ''
}

//update
// update.onclick = function(e){
//     e.preventDefault()
//     updateCustomor()
    
  
//     // update.style.display = 'none';
//     // click.style.display = 'inline'
//     resetInput()
  
//   }
  
// function updateCustomor(){
//     var customor = {
//       FirstName : FirstName.value,
//       SecoundName : SecoundName.value,
//       Email  : Email.value,
//       Password : Password.value,
//       Comment : Comment.value
//     }
//     console.log(customors[current_index]);
//     var nameco = customors[current_index].FirstName ;
//     customors[current_index].FirstName = customor.FirstName;
//     customors[current_index].SecoundName = customor.SecoundName;
//     customors[current_index].Email = customor.Email;
//     customors[current_index].Password = customor.Password;
//     customors[current_index].Comment = customor.Comment;
//     localStorage.setItem('customors',JSON.stringify(customors));
  
//     Swal.fire({
//       position: 'center',
//       icon: 'success',
//       title: `${nameco} Your Information Updated Sucessfully`,
//       showConfirmButton: false,
//       timer: 1500
//     })
//     console.log(customors[current_index]);
//   }

// VALIDATION
var nameAlert = document.getElementById("nameAlert")
// FIRST NAME -- START WITH CAPITAL -- 2-10 -- NO NUMBERS -- REGEX /^[A-Z][a-z]{2,10}$/
FirstName.onkeyup = function(){
  isFNameValid = true
  var pattern = /^[A-Z][a-z]{2,10}$/
  if (pattern.test(FirstName.value)){
    if (FirstName.classList.contains('is-invalid')){
      FirstName.classList.replace('is-invalid', 'is-valid')
    }
    FirstName.classList.add('is-valid')
    // nameAlert.style.display = 'none'
    nameAlert.innerHTML = ''
  }else{
    isFNameValid = false
    nameAlert.innerHTML = '*please start with capital letter and just between 3-10 wihout numbers'
    // nameAlert.style.display = 'block'
    if (FirstName.classList.contains('is-valid')){
      FirstName.classList.replace('is-valid', 'is-invalid')
    }
    FirstName.classList.add('is-invalid')
  }

  checkInputs();
}

nameAlert.style.display = 'none'
// SECOUND NAME -- START WITH CAPITAL -- 3-10 -- NO NUMBERS -- REGEX /^[A-Z][a-z]{2,10}$/
SecoundName.onkeyup = function(){
  isSNameValid = true
  var pattern = /^[A-Z][a-z]{2,10}$/
  if (pattern.test(SecoundName.value)){
    if (SecoundName.classList.contains('is-invalid')){
      SecoundName.classList.replace('is-invalid', 'is-valid')
    }
    SecoundName.classList.add('is-valid')
    nameAlert.style.display = 'none'
  }else{
    isSNameValid = false
    nameAlert.innerHTML = '*please start with capital letter and just between 3-10 wihout numbers'
    nameAlert.style.display = 'block'
    if (SecoundName.classList.contains('is-valid')){
      SecoundName.classList.replace('is-valid', 'is-invalid')
    }
    SecoundName.classList.add('is-invalid')
  }

  checkInputs();
}

var emailAlert = document.getElementById("emailAlert")
emailAlert.style.display = 'none'
// EMAIL -- REGEX \b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b.
Email.onkeyup = function(){
  isEmailValid = true
  var pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/ 
  if (pattern.test(Email.value)){ 
    if (Email.classList.contains('is-invalid')){
      Email.classList.replace('is-invalid', 'is-valid')
    }
    Email.classList.add('is-valid')
    emailAlert.style.display = 'none'
  }else{
    isEmailValid = false
    emailAlert.innerHTML = '*please enter right email '
    emailAlert.style.display = 'block'
    if (Email.classList.contains('is-valid')){
      Email.classList.replace('is-valid', 'is-invalid')
    }
    Email.classList.add('is-invalid')
  }

  checkInputs();
}

var passAlert = document.getElementById("passAlert")
passAlert.style.display = 'none'
// password -- 2-20 -- REGEX /^[A-Za-z0-9\S]{8,20}$/  [a-zA-Z0-9!@#$%^&*]{8,16}
Password.onkeyup = function(){
  isPasswordValid = true
  var pattern = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/
  if (pattern.test(Password.value)){
    if (Password.classList.contains('is-invalid')){
      Password.classList.replace('is-invalid', 'is-valid')
    }
    Password.classList.add('is-valid')
    passAlert.style.display = 'none'
  }else{
    isPasswordValid = false
    passAlert.innerHTML = '*please enter password in 8 to 16 character'
    passAlert.style.display = 'block'
    if (Password.classList.contains('is-valid')){
      Password.classList.replace('is-valid', 'is-invalid')
    }
    Password.classList.add('is-invalid')
  }

  checkInputs();
}

var COAlert = document.getElementById("COAlert")
COAlert.style.display = 'none'
// COMMENT -- REGEX /^[0-9]{2,120}$/
Comment.onkeyup = function(){
  isCommentValid = true
  var pattern = /^[A-Za-z0-9]{2,120}$/
  if (pattern.test(Comment.value)){
    if (Comment.classList.contains('is-invalid')){
      Comment.classList.replace('is-invalid', 'is-valid')
    }
    Comment.classList.add('is-valid')
    COAlert.style.display = 'none'
  }else{
    isCommentValid = false
    COAlert.innerHTML = '*please enter valid comment'
    COAlert.style.display = 'block'
    if (Comment.classList.contains('is-valid')){
      Comment.classList.replace('is-valid', 'is-invalid')
    }
    Comment.classList.add('is-invalid')
  }

  checkInputs();
}