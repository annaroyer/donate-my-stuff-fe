const baseUrl = require('./dmsAPI').baseUrl()

function DonorPickup() {
  this.street_address = $('input[name=street_address]').val(),
  this.city = $('input[name=city]').val(),
  this.state = $('select[name=state]').val(),
  this.zipcode = $('input[name=zipcode]').val(),
  this.phone = $('input[name=phone]').val(),
  this.email = $('input[name=email]').val()
}

const successMessage = (donor) => {
  $('.register-donor-pickup > input').hide()
  $('.register-donor-pickup > select').hide()
  $('.register-donor-pickup > label').hide()
  $('.donor-registration-message').show()
  $('.donor-registration-message').addClass('unframed')
  $('.donor-registration-message').append(
    $(`<p>Pickup donation with ${donor.pickup.organization.name} on ${donor.pickup.date}</p>`),
    $(`<p>${donor.street_address}<br>${donor.city}, ${donor.state} ${donor.zipcode}</p>`),
    $(`<input type="checkbox" name="phone-reminder"><label>Remind me via phone ${donor.phone}<label><br>`),
    $(`<input type="checkbox" name="email-reminder"><label>Remind me via email ${donor.email}</label><br>`),
    $('<br><a href="#close" class="done-button">Finish</a>')
  )
}

const errorMessage = (errors) => {
  errors.forEach(error => {
    let input = $(`input[name=${error.path}]`) || $(`select[name=${error.path}]`)
    input.addClass('red-border')
    $(`<p class="error">${error.message}</p>`).insertBefore(input)
  })
}

const appendMessage = (response) => {
  if(response.errors) {
    errorMessage(response.errors)
  } else {
    successMessage(response)
  }
}
const postDonorPickup = (pickup_id) => {
  fetch(`${baseUrl}/api/v1/pickups/${pickup_id}/donors`, {
    method: 'POST',
    body: JSON.stringify(new DonorPickup),
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors'
  }).then(response => response.json())
  .then(appendMessage)
  .catch(error => console.error({ error }))
}

$('.register-donor-pickup').submit(event => {
  event.preventDefault()
  let pickup_id = $('input:checked').val()
  postDonorPickup(pickup_id)
})
