const addToSearchField = (organization) => {
  $("select[name=organizations]").append(
    $(`<option value=${organization.id}>${organization.name}</option>`)
  )
}

const appendSmallOrganization = (organization) => {
  addToSearchField(organization)
  let newOrganization = $('<div class="organization"></div>').append(
    $(`<img class="many-orgs-image" src=${organization.image} />`),
    $(`<a class="organization-link" href="organization.html?id=${organization.id}"><h1 class="sub-header">${organization.name}</h1><a>`),
    $(`<p>${organization.description}</p>`)
  )
  $('div.centered').append(newOrganization)
}

const getAllOrganizations = () => {
  fetch('http://localhost:3000/api/v1/organizations')
  .then(response => response.json())
  .then(organizations => {
    $('form select[name="organizations"]').attr('size',organizations.count)
    $('.donor-registration-message').hide()
    organizations.forEach(appendSmallOrganization)
  })
}

const appendLargeOrganization = (organization) => {
  $('.large-header').text(organization.name)
  $('.single-org-image').attr('src', organization.image)
  $('.website-link').text(organization.website).attr('href', organization.website)
  organization.accepted_items.forEach(item => {
    $('.small-list').append($(`<li>${item.name}</li>`))
  })
  $('.organization-description').text(organization.description)
}

const appendAcceptedItems = (items) => {
  if(items.length == 0){
    $('figure:nth-last-of-type(2)').hide()
  } else {
    items.forEach(item => {
      $('figure:nth-last-of-type(2)').append($(`<li>${item}</li>`))
    })
  }
}

const appendZipcodes = (zipcodes) => {
  if(zipcodes.length == 0){
    $('figure').last().hide()
  } else {
    zipcodes.forEach(zipcode => {
      $('figure').last().append($(`<li>${zipcode.zipcode}</li>`))
    })
  }
}

const appendOrganizationPickup = (pickup, index) => {
  $('center').last().text(pickup.date)
  appendAcceptedItems(pickup.accepted_items)
  appendZipcodes(pickup.zipcodes)
  if(index < (organization.pickups.length)){
    $('.pickup').last().clone().appendTo('.pickup-container')
  }
}

const getSingleOrganization = () => {
  let id = window.location.search.slice(4)
  fetch(`http://localhost:3000/api/v1/organizations/${id}`)
  .then(response => response.json())
  .then(organization => {
    appendLargeOrganization(organization)
    organization.pickups.forEach(appendOrganizationPickup)
  })
}

const windowActions = {
  "/organizations.html": getAllOrganizations,
  "/index.html": getAllOrganizations,
  "/organization.html": getSingleOrganization
}

window.onload = windowActions[window.location.pathname]
