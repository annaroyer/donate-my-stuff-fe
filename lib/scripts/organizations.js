const addToSearchField = (organization) => {
  $("select[name=organizations]").append(
    $(`<option value=${organization.name}>${organization.name}</option>`)
  )
}

const appendOrganization = (organization) => {
  addToSearchField(organization)
  let newOrganization = $('<div class="organization"></div>').append(
    $(`<img class="many-orgs-image" src=${organization.image} />`),
    $(`<h1>${organization.name}</h1>`).addClass('sub-header'),
    $(`<p>${organization.description}</p>`)
  )
  $('.centered').append(newOrganization)
}

const getOrganizations = () => {
  fetch('http://localhost:3000/api/v1/organizations')
  .then(response => response.json())
  .then(organizations => {
    $('form.data-content select[name="organizations"]').attr('size',organizations.count)
    organizations.forEach(appendOrganization)
  })
}

window.onload = getOrganizations
