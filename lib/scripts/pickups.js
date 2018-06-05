const pickupHeading = (organization) => {
  return $(`<h1 class="centered">${organization.name}</h1>`)
  .prepend($(`<img class="logo" src=${organization.logo} alt="${organization.name} logo" />`))
}

const pickupCaption = (pickup) => {
  return $('<center></center>').append(
    $(`<p>${pickup.date}<p>`),
    $(`<p>accepting: ${pickup.accepted_items.join(', ')}</p>`),
  )
}

const schedulePickup = (id) => {
  return $('<div></div>').addClass('spaced').append(
    $('<div></div>').append(
      $(`<input type="checkbox" name="pickup_id" value="${id}">`),
      $('<label>Choose this Pickup</label>')
    ),
    $(`<a href="#openRegistration" class="schedule-link">Schedule Pickup >>></a>`)
  )
}

const appendPickup = (pickup) => {
  $('<figure class="pickup"></figure>').append(
    pickupHeading(pickup.organization),
    pickupCaption(pickup),
    schedulePickup(pickup.id)
  ).appendTo($('div.centered').last())
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
