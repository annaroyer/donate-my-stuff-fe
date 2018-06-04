const appendPickup = (pickup, index, pickups) => {
  // debugger
  // $('.pickup').clone().appendTo('div.centered').show()
  // $('h1.centered').last().append(pickup.organization.name)
  // $('img.logo').last().attr('src', pickup.organization.logo).attr('alt', pickup.organization.name)
  // $('center').last().append(`<p>${pickup.date}</p>`)
  // let items = pickup.accepted_items.join(', ')
  // if(items){
  //   $('center').last().append($('p').text(`Accepting: ${items}`))
  // }

  let heading = $(`<h1 class="centered">${pickup.organization.name}</h1>`)
  .prepend($(`<img class="logo" src=${pickup.organization.logo} alt="${pickup.organization.name} logo" />`))
   let caption = $('<center></center>').append(
     $(`<p>${pickup.date}<p>`),
     $(`<p>accepting: ${pickup.accepted_items.join(', ')}</p>`),
   )
  $('<figure class="pickup"></figure>')
  .append(heading, caption, $('<a href="#" class="schedule-link">Schedule Pickup >>></a>'))
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
