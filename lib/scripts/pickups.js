const appendPickup = (pickup, index, pickups) => {
  let heading = $(`<h1 class="centered">${pickup.organization.name}</h1>`)
  .prepend($(`<img class="logo" src=${pickup.organization.logo} alt="${pickup.organization.name} logo" />`))
   let caption = $('<center></center>').append(
     $(`<p>${pickup.date}<p>`),
     $(`<p>accepting: ${pickup.accepted_items.join(', ')}</p>`),
   )
   let checkbox = $(`<input type="checkbox" name="pickup_id" value="${pickup.id}"><label>Choose this Pickup</label>`)
   let scheduleLink = $(`<a href="#openRegistration" id="${pickup.id}" class="schedule-link">Schedule Pickup >>></a>`)
  $('<figure class="pickup"></figure>')
  .append(heading, caption, checkbox, scheduleLink)
  .appendTo($('div.centered').last())
}

const appendAllPickups = (pickups) => {
  $('section h1.sub-header').text('Pickups Near You')
  $('.organization').hide()
  pickups.forEach(appendPickup)
}

const getPickupsByZipcode = (zipcode) => {
  fetch(`http://localhost:3000/api/v1/pickups?zipcode=${zipcode}`)
  .then(response => response.json())
  .then(appendAllPickups)
}

$('.search-form').submit(event => {
  event.preventDefault()
  let zipcode = $('.zipcode-search').val()
  getPickupsByZipcode(zipcode)
})
