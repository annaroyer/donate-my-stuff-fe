const addToSearchField = (organization) => {
  $("select[name=organizations]").append(
    $(`<option value=${organization.id}>${organization.name}</option>`)
  )
}

const appendOrganization = (organization) => {
  addToSearchField(organization)
  let newOrganization = $('<div class="organization"></div>').append(
    $(`<img class="many-orgs-image" src=${organization.image} />`),
    $(`<a href="organization.html?id=${organization.id}"><h1 class="sub-header">${organization.name}</h1><a>`),
    $(`<p>${organization.description}</p>`)
  )
  $('.centered').append(newOrganization)
}

const getAllOrganizations = () => {
  fetch('http://localhost:3000/api/v1/organizations')
  .then(response => response.json())
  .then(organizations => {
    $('form select[name="organizations"]').attr('size',organizations.count)
    organizations.forEach(appendOrganization)
  })
}

const getSingleOrganization = () => {
  let id = window.location.search.slice(4)
  fetch(`http://localhost:3000/api/v1/organizations/${id}`)
  .then(response => response.json())
  .then(organization => {
    $('.large-header').text(organization.name)
    $('.single-org-image').attr('src', organization.image)
    $('.website-link').text(organization.website).attr('href', organization.website)
    organization.accepted_items.forEach(item => {
      $('.small-list').append($(`<li>${item.name}</li>`))
    })
    $('.organization-description').text(organization.description)
    organization.pickups.forEach(pickup => {
      let box = $('<div class="pickup"><div>')
      box.append($('<a href="#" class="schedule-link">Schedule Pickup >>></a>'))
      box.append(`<center>${pickup.date}</center>`)
      let figure = $('<figure><figcaption></figcaption></figure>')
      let rows = $('<div class="even-rows"></div>')
      if(pickup.accepted_items[0]){
        let items = figure.text('Also Accepting:')
        pickup.accepted_items.forEach(item => {
          items.append($(`<li>${item}</li>`))
        })
        rows.append(items)
      }
      if(pickup.zipcodes) {
        let zipcodes = figure.text('Zipcodes:')
        pickup.zipcodes.forEach(zipcode => {
          zipcodes.append($(`<li>${zipcode.zipcode}</li>`))
        })
        rows.append(zipcodes)
      }
      box.append(rows)
      $('.pickup-container').append(box)
    })
  })
}

const windowActions = {
  "/organizations.html": getAllOrganizations,
  "/index.html": getAllOrganizations,
  "/organization.html": getSingleOrganization
}

window.onload = windowActions[window.location.pathname]
