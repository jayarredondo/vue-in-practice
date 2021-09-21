"use strict";

var nationalParks = [
    {id: 1, name: "Grand Canyon National Park"},
    {id: 2, name: "Rocky Mountain National Park"},
    {id: 3, name: "White Sands National Park"},
    {id: 4, name: "Joshua Tree National Park"},
    {id: 5, name: "Redwoods National Park"}
];

Vue.component('parks-to-visit', {
    props: ['park'],
    template: '<li>{{park.name}}</li>'
})

Vue.component('top-nav', {
    props: ['title'],
    template: '<nav class="navbar navbar-expand-lg navbar-light bg-light">\n' +
        '  <a class="navbar-brand" href="#">{{title}}</a>\n' +
        '  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n' +
        '    <span class="navbar-toggler-icon"></span>\n' +
        '  </button>\n' +
        '\n' +
        '  <div class="collapse navbar-collapse" id="navbarSupportedContent">\n' +
        '    <ul class="navbar-nav mr-auto">\n' +
        '      <li class="nav-item active">\n' +
        '        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>\n' +
        '      </li>\n' +
        '      <li class="nav-item">\n' +
        '        <a class="nav-link" href="#">Link</a>\n' +
        '      </li>\n' +
        '      <li class="nav-item dropdown">\n' +
        '        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
        '          Dropdown\n' +
        '        </a>\n' +
        '        <div class="dropdown-menu" aria-labelledby="navbarDropdown">\n' +
        '          <a class="dropdown-item" href="#">Action</a>\n' +
        '          <a class="dropdown-item" href="#">Another action</a>\n' +
        '          <div class="dropdown-divider"></div>\n' +
        '          <a class="dropdown-item" href="#">Something else here</a>\n' +
        '        </div>\n' +
        '      </li>\n' +
        '      <li class="nav-item">\n' +
        '        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>\n' +
        '      </li>\n' +
        '    </ul>\n' +
        '    <form class="form-inline my-2 my-lg-0">\n' +
        '      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">\n' +
        '      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>\n' +
        '    </form>\n' +
        '  </div>\n' +
        '</nav>'
})

var app = new Vue({
    el: '#app',
    data: {
        message: "Hello from Vue!",
        nationalParks: nationalParks
    }
})