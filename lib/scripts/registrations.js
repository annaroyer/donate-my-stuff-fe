$('.register-organization').submit(event => {
  event.preventDefault()
  let organization = new Organization()
  let options = new Options(organization)
  postOrganization(options)
})

function Organization() {
  this.name = $('input[name=name]').val(),
  this.description = $('textarea').val(),
  this.website = $('input[name=website]').val(),
  this.contact_person = new ContactPerson()
}

function ContactPerson() {
  this.first_name = $('input[name=first_name]').val(),
  this.last_name = $('input[name=last_name]').val(),
  this.email = $('input[name=email]').val(),
  this.phone = $('input[name=phone]').val()
}

function Options(organization) {
  this.method = 'POST',
  this.body = JSON.stringify(organization)
  this.headers = { 'Content-Type': 'application/json' },
  this.mode = 'cors'
}

function postOrganization(options) {
  fetch('http://localhost:3000/api/v1/organizations', options)
  .then(response => appendMessage(response))
  .catch(error => console.error({ error }))
}

function appendMessage(response) {
  if(response.status === 204){
    successMessage()
  } else {
    response.json()
    .then(response => getErrors(response))
  }
}

function successMessage() {
  $('.register-organization').fadeOut(600)
  $('.message').fadeIn(600)
}

function getErrors(response) {
  response.errors.forEach(error => {
    let input = $(`input[name="${error.path}"]`).addClass('red-border')
    $(`<p class="error">${error.message}</p>`).insertBefore(input)
  })
}
