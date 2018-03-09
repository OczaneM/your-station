'use strict'

const Home = {
  render: function () {
    app.appendChild(
      div( {id: "home"}, null,
        div( {className: 'welcome-container'}, null,
          p({className: 'welcome-text'}, 'Welcome to'),
          p({className: 'sub-logo-container type-logo'}, 'Your Station'),
        ),
        div({className: 'g-signin2 signin-container', 'data-onsuccess': 'onSignIn'}, null)
        )
      )
    }
}
