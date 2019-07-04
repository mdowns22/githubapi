'use strict';


function searchUser() {
  let userName = $('#js-search-users').val();
  fetch(`https://api.github.com/users/${userName}/repos`)
  .then(response => response.json()) 
  .then(responseJson => displayResults(responseJson))
  .catch(error => alert(`${error}`))
}

function displayResults(responseJson) {
console.log(responseJson);
for(let i = 0; i < responseJson.length; i++) {
$('.results-list').append(`<h3>${responseJson[i].name}</h3>`);
$('.results-list').append(`<p><a href="${responseJson[i].html_url}">${responseJson[i].html_url}</p>`);
}
$('#results').removeClass('hidden');
}


function watchForm() {
  $('#js-form').submit(event => {
    $('.results-list').empty();
    event.preventDefault();
    searchUser();
  });
}

function ready() {
  console.log('App loaded waiting for submit');
  watchForm();
}

ready();