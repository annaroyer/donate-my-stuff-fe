const addToSearchField = (organization) => {
  $(`<option value=${organization.id}>${organization.name}</option>`)
  .appendTo($('select[name=organizations]'))
}

const buildSmallOrganization = (organization) => {
  return $('<div class="organization"></div>').append(
    $(`<img class="many-orgs-image" src=${organization.image} />`),
    $(`<a class="organization-link" href="organization.html?id=${organization.id}"><h1 class="sub-header">${organization.name}</h1><a>`),
    $(`<p class="normal">${organization.description}</p>`)
  )
}

const appendSmallOrganization = (organization) => {
  addToSearchField(organization)
  buildSmallOrganization(organization).appendTo('div.centered')
}

const getAllOrganizations = () => {
  fetch('http://localhost:3000/api/v1/organizations')
  .then(response => response.json())
  .then(organizations => {
    $('form select[name="organizations"]').attr('size',organizations.count)
    organizations.forEach(appendSmallOrganization)
  })
}

const appendLargeOrganization = (organization) => {
  $('.large-header').text(organization.name)
  $('.single-org-image').attr('src', organization.image)
  $('.website-link').text(organization.website).attr('href', organization.website)
  appendListedElements(organization.accepted_items, $('.small-list'))
  $('.organization-description').text(organization.description)
}

const appendListedElements = (elements, container) => {
  let list = elements.join(', ')
  if(list){
    container.append(list)
  } else {
    container.hide()
  }
}

const appendOrganizationPickup = (pickup, index, pickups) => {
  $('center').last().text(pickup.date)
  let zipcodes = pickup.zipcodes.map(zipcode => zipcode.zipcode)
  appendListedElements(pickup.accepted_items, $('p:nth-last-of-type(2)'))
  appendListedElements(zipcodes, $('p').last())
  $('input[type=checked]').last().val(pickup.id)
  if(index < (pickups.length - 1)){
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

$(document).ready(() => {
  setTimeout(() => $('div.modalDialog').removeClass('no-transition'))
})

window.onhashchange = $('.donor-registration-message').hide()
