$('.register-organization').submit(event => {
  event.preventDefault()
  let organization = {
    name: $('input[name=name]').val(),
    description: $('textarea').val(),
    website: $('input[name=website]').val(),
    contact_person: {
      first_name: $('input[name=first_name]').val(),
      last_name: $('input[name=last_name]').val(),
      email: $('input[name=email]').val(),
      phone: $('input[name=phone]').val()
    }
  }
  fetch('http://localhost:3000/api/v1/organizations', {
    method: 'POST',
    body: JSON.stringify(organization),
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  })
  .then(response => {
    if(response.status === 204){
      $('.register-organization').fadeOut(600)
      $('.message').fadeIn(600)
    } else {
      response.json().then(response => {
        response.errors.forEach(error => {
          let input = $(`input[name="${error.path}"]`)
          input.css('border-color', "#ff3b3f")
          $(`<p class="error">${error.message}</p>`).insertBefore(input)
        })
      })
    }
  })
  .catch(error => console.error({ error }))
})
