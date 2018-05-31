$('.search-form').submit(function(event){
  event.preventDefault()
  let zipcode = $('.zipcode-search').val()
  getPickupsByZipcode(zipcode)
})

function getPickupsByZipcode(zipcode) {
  fetch(`http://localhost:3000/api/v1/pickups?zipcode=${zipcode}`)
  .then(response => response.json())
  .then(pickups => {
    $('main h1.sub-header').text('Pickups Near You')
    $('.organization').remove()
    pickups.forEach(pickup => appendPickup(pickup))
  })
}

function appendPickup(pickup) {
  let heading = $(`<h1 class="centered">${pickup.organization.name}</h1>`)
  .prepend($(`<img class="logo" src=${pickup.organization.logo} alt="${pickup.organization.name} logo" />`))
   let caption = $('<center></center>').append(
     $(`<p>${pickup.date}<p>`),
     $(`<p>accepting: ${pickup.acceptedItems.map(item => item.name).join(', ')}</p>`)
   )
  $('<figure class="blue-text"></figure>')
  .append(heading, caption).appendTo($('div.centered'))
}
