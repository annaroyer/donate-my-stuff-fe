const baseUrl = require('./dmsAPI').baseUrl()

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
  fetch(`${baseUrl}/api/v1/organizations`)
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
  organization.accepted_items.forEach(item => {
    $('.small-list').append($(`<li>${item}</li>`))
  })
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

const currentOrgId = () => {
  if(window.location.pathname == '/organization.html') {
    return window.location.search.slice(4)
  } else if(window.location.pathname == "/organization-dashboard.html"){
    return window.localStorage.getItem('current_org')
  }
}

const getSingleOrganization = () => {
  $('#pickup-form').hide()
  let id = window.location.search.slice(4)
  fetch(`${baseUrl}/api/v1/organizations/${id}`)
  .then(response => response.json())
  .then(organization => {
    appendLargeOrganization(organization)
    organization.pickups.forEach(appendOrganizationPickup)
  })
}

const getListOfOrgs = () => {
  fetch(`${baseUrl}/api/v1/organizations`)
  .then(response => response.json())
  .then(organizations => {
    $('form select[name="organizations"]').attr('size',organizations.count)
    organizations.forEach(addToSearchField)
  })
}

const windowOptions = {
  "/index.html": getAllOrganizations,
  "/organizations.html": getAllOrganizations,
  "/organization.html": getSingleOrganization,
  "/organization-dashboard.html": getSingleOrganization
}

const hashOptions = {
  "#openRegistration": $('.donor-registration-message').hide()
}

$('#orgLogin').submit(event => {
  event.preventDefault()
  let id = document.querySelector('[name=organizations]')[0].value
  $('#join-link').text('dashboard')
  $('#join-link').attr('href', `organization-dashboard.html?id=${id}`)
  $('#nav-login').text('logout')
  window.location.replace(`/organization-dashboard.html?id=${id}`)
  window.location.hash = '#close'
})

$('#new-pickup').click(() => {
  $('#pickup-form').addClass('pickup').show()
})

$('#add-zippy').click(() => {
  let zip = $('input[name=zipcodes]').val()
  $('<p></p>').append(zip).appendTo('#zip-list')
})

$('#pickup-form').submit(event => {
  event.preventDefault()
  let zips = []
  let zipcodes = document.getElementById('zip-list').children
  for(i=0;i< zipcodes.length;i++){
    zips.push(zipcodes[i].innerText)
  }
  let items = []
  let options = document.querySelector('[name=items]').children
  for(i=0;i<options.length;i++){
    if(options[i].selected){
      items.push(options[i].innerText)
    }
  }
  let date = $('input[name=date]').val()
  let body = {date: date, zipcodes: zips, accepted_items: items}
  fetch(`${baseUrl}/api/v1/organizations/1/pickups`,{
    method: 'POST',
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'},
    mode: 'cors'
  }).then(response => response.json())
  .then(pickup => {
    $('center').last().text(pickup.date)
    let zipcodes = pickup.zipcodes.map(zipcode => zipcode.zipcode)
    $('.pickup').last().clone().appendTo('.pickup-container')
    appendListedElements(pickup.accepted_items, $('p:nth-last-of-type(2)'))
    appendListedElements(zipcodes, $('p').last())
    $('input[type=checked]').last().val(pickup.id)
    $('#pickup-form').hide()
  })
})

$(document).ready(() => {
  setTimeout(() => {
    $('div.modalDialog').removeClass('no-transition')
  })
})

window.onload = windowOptions[window.location.pathname] || getListOfOrgs
window.onhashchange = hashOptions[window.location.hash]
