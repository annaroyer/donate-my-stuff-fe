$('.search-form').submit(function(event){
  event.preventDefault()
  let zipcode = $('.zipcode-search').val()
  getPickupsByZipcode(zipcode)
})

function appendPickup(pickup) {
  let newPickup = $('<div></div>').append(
    $(`<img class="logo" src=${pickup.organization.logo} alt="${pickup.organization.name} logo" />`),
    $(`<h1>${pickup.organization.name}<h1>`),
    $(`<p>${pickup.date}<p>`),
    $(`<p>accepting: ${pickup.acceptedItems.map(item => item.name).join(', ')}</p>`),
  ).addClass('centered')
  $('.data-content').append(newPickup)
}

function getPickupsByZipcode(zipcode) {
  fetch(`http://localhost:3000/api/v1/pickups?zipcode=${zipcode}`)
  .then(response => response.json())
  .then(pickups => {
    $('main h1.sub-header').text('Pickups Near You')
    pickups.forEach(pickup => appendPickup(pickup))
  })
}
