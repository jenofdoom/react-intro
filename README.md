# React Introduction

## Why React?

* It's incredibly popular
* There is a good community
* You can transition to mobile apps with a only a small learning curve
* The performance is pretty good
* Development backed by a company with deep pockets
* It's incredibly popular

## Differences from MV* frameworks

By itself, React is _not_ a MV* framework - it's not even a framework at all.
It's a views library (just the V in MVC).

We bolt other libraries on the side to provide deeper functionality - of course
you could write your own, but there are lots of good established patterns
already, don't invent your own.

React is strongly based on components - modular units of functionality that you
can bolt together and pass application state between.

A common stack is:

* ES6
* React
* React Router
* Redux
* Thunk
* Jest

Today we'll be covering the first three of those, by building a simple app which
displays a searchable list of MP's in New Zealand, and their email addresses.

## Getting started 

If you have your own github account already, you might prefer to fork this
repository and clone that instead. If you don't just run the following commands
on a terminal or command line interface (assuming that your machine already has
[git available](https://git-scm.com/downloads)):

```
git clone https://github.com/jenofdoom/react-intro.git
cd react-intro
```

### Install node, npm and project dependencies

First, we need to install [node.js](https://nodejs.org/) and its package manager, npm.

[Ubuntu/Debian/Mint instructions](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)

[Mac instructions](http://blog.teamtreehouse.com/install-node-js-npm-mac)

[Windows instructions](http://blog.teamtreehouse.com/install-node-js-npm-windows)

Next, from within the `react-intro/tutorial` folder, run:

```
npm install
```

### Code editor

If you have a favourite code editor feel free to use that, but I recommend
[Atom](https://atom.io/) plus the
[language-javascript-jsx](https://atom.io/packages/language-javascript-jsx)
package.

In Atom, right click in the left panel, select `Add Project Folder` and open the
`react-intro/tutorial` folder. You should see a number of already existing files.

### Project starter files

To get to the starter set of files, I ran (so you don't need to):

```
npm init
npm install --save-dev react react-dom
```

I also set up a [Webpack](https://webpack.github.io/) based development build
process. If you'd like to learn more about how that works, I run a
JavaScript Build Pipelines training.

If you want to refer to a finished, working version of today's project, have a
look at the `example` folder.

In the `tutorial` folder you should have the following files already present:

* `src/components/homepage/homepage.jsx` our basic React component
* `src/data.js` raw data we'll use in our web app
* `src/index.html` a template for the HTML for our SPA (single-page-app)
* `src/index.js` our root JS file
* `src/styles.css` our (very simple) CSS styles
* `.babelrc` this is configuration for the transpilation from ES6 to ES5
* `.eslintrc.json` this is configuration for the JS linter
* `.gitignore` this keeps our `node_nodules` and `dist` folders out of version control
* `README.md` this file
* `webpack.config.js` configuration for the build process - note that this is a simple version that doesn't tackle production appropriate builds

We keep all of our project code in the `src` folder.

We could have used the
[create-react-app](http://github.com/facebookincubator/create-react-app) utility
to get our project started, but it hides a bit of stuff under the hood that I
want to show you explicitly.

## Development builds

In a terminal in the `react-intro` folder, run:

```
npm start
```

Right click on the link to open in a browser. This terminal process will watch
for changes and automatically recompile _and_ reload the pages in your browser.
to quit from it use _Control-C_.

## ES6

[Cheatsheet](https://github.com/DrkSephy/es6-cheatsheet)

Some basics:

* instead of `var`, use `let` for variables that will change their value over time, and `const` for variables which cannot be reassigned
* functions can be written as arrow functions:
```
(param1, param2) => {
    // body of function goes here
}
```
* we can import from other files using modules
* classes can be created without needing to mess around with function prototypes

## Your first component

Open `src/components/homepage/homepage.jsx`. We're going to modify this file to
replace the `[table goes here]` with a new table component.

First, we need to get the data for the table. At the top of the file add a line:

```
import data from 'data';
```

We can check that's working as we expect by adding a `console.log(data);`
statement temporarily.

We also want to import the new component that we're adding, for the table. 

> It's a good idea to only have one component per file, so we should create a new file.

At the top of the file, add:

```
import Table from 'components/table/table';
```

In place of the `[table goes here]` we'll add in the reference to our new
component:

```
<Table mpData={data} />
```

You can see that we're passing down the data we loaded into our new component as
a __property__.

If you look at the terminal, you'll see that the app tried to recompile and is
now throwing an error, because the file we're trying to import doesn't exist
yet.

Create a new file, `src/components/table/table.jsx`. In the new file, we're
going to add the basic HTML (JSX!) structure for the new component:

```
import React, { Component } from 'react';

class Table extends Component {
  render () {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Party</th>
            <th>Electorate</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    );
  }
}

export default Table;
```

### JSX

So what is JSX?

It's a lot closer to XML than regular HTML (the parser is very strict about
closing things properly). There are also a few subtle changes to attribute names
compared to regular HTML: `className` instead of `class`, for example.

You can use a `.jsx` file extension to indicate that a file contains JSX, but
it's optional, you can just use a regular `.js` extension.

> JSX lets you encapsulate the whole of your component, including the markup, into one file. This only works well if you do a good job of keeping your components small and modular.

### React dev tools

In your browser, open developer tools (usually _F12_) and go to the console tab.
Any errors rendering the application will show up here. You'll also note there
is a link to install the [React Dev
Tools](https://facebook.github.io/react/blog/2015/09/02/new-react-developer-tools.html).
Install them and you'll get another tab that lets you poke around in the JSX
structure more easily.

### PropTypes

React comes with a rudimentary type checking system that is good to use, called
[PropTypes](https://facebook.github.io/react/docs/typechecking-with-proptypes.html). 

PropTypes are added to every component and they validate that __props__ that are
being passed in conform to a particular _type_ (like, a string, or an array).
Let's add the PropTypes to our Table component now (you can see that the linter
is complaining at us for not having it).

First, in a terminal in the `tutorial` directory, run:

```
npm install --save-dev prop-types
```

Change:
```
import React, { Component } from 'react';
```

to:
```
import React, { Component, } from 'react'; 
import PropTypes from 'prop-types';
```

and underneath the Table class (before the `export default Table;` line), add:

```
Table.propTypes = {
  mpData: PropTypes.array.isRequired
};
```

### Logic in your render method

So far we have a table header... and no data. Let's fix that. We need to add
each MP as a new row of the table.

Rendering variables into JSX is really easy, let's temporarily try it now:

```
render () {
  
  let test = 'MP';
  
  return (
    <table className="table">
      <thead>
        <tr>
          <th>{test} Name</th>
          <th>Party</th>
```

You can get rid of that, but it shows how you can directly use variables and
other JS in your JSX.

We don't want to have to manually output every row of data though, we want to
use a loop:

```
render () {
  let rows = [];
  
  this.props.mpData.forEach(mp => {
    rows.push(
      <tr>
        <td>{mp.name}</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  });
  
  return (
```

```
<tbody>
  {rows}
</tbody>
```

### Props

We used a special variable reference to get the data that was passed in from the
Homepage component: `this.props`. All the data passed in (the __props__) are
immutable: you _cannot_ change their value within the component. By passing data
in as a prop, you are indicating that the parent component owns it rather than
this component. There is a different type of special value that _is_ mutable and
specific to the current component, __state__, which we'll look at more soon.

### Arrays of elements need keys

You can see in the web dev tools console that React is complaining that arrays
of elements need unique keys. We can fix that by using an index parameter on our
`forEach` loop:

```
this.props.mpData.forEach((mp, index) => {
  rows.push(
    <tr key={index}>
      <td>{mp.name}</td>
```

### Reformatting the names

We can use normal JS to perform transformations on the data.

```
this.props.mpData.forEach((mp, index) => {
  let name = mp.name.split(',');
  name = name.reverse().join(' ');
  
  rows.push(  
    <tr key={index}>
      <td>{name}</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
});
```

### Adding the rest of the columns

```
this.props.mpData.forEach(mp => {
  let name = mp.name.split(',');
  name = name.reverse().join(' ');
  
  rows.push(  
    <tr key={mp.email}>
      <td>{name}</td>
      <td>{mp.party}</td>
      <td>{mp.electorate}</td>
      <td><a href={'mailto:' + mp.email}>{mp.email}</a></td>
    </tr>
  );
});
```

### Calling methods on the class

Our render method is getting a bit long and unruly: let's refactor it a bit.
We're going to change the current code:

```
class Table extends Component {
  render () {
    let rows = [];
    
    this.props.mpData.forEach((mp, index) => {
      let name = mp.name.split(',');
      name = name.reverse().join(' ');
      
      rows.push(  
        <tr key={index}>
          <td>{name}</td>
          <td>{mp.party}</td>
          <td>{mp.electorate}</td>
          <td><a href={'mailto:' + mp.email}>{mp.email}</a></td>
        </tr>
      );
    });
    
    return (
```

to:

```
class Table extends Component {
  renderRows () {
    let rows = [];
    
    this.props.mpData.forEach((mp, index) => {
      let name = mp.name.split(',');
      name = name.reverse().join(' ');
      
      rows.push(  
        <tr key={index}>
          <td>{name}</td>
          <td>{mp.party}</td>
          <td>{mp.electorate}</td>
          <td><a href={'mailto:' + mp.email}>{mp.email}</a></td>
        </tr>
      );
    });
  }
  
  render () {
    const rows = this.renderRows();
    
    return (
```

## Searching the table

Add a new file `src/components/search/search.jsx`.

```
import React, { Component } from 'react';

class Search extends Component {
  render () {  
    return (
      <div className="mb-3">
        <label>
          Search: 
          <input
            className="ml-2"
            type="search"
            autoComplete="off" 
          />
        </label>
      </div>
    );
  }
}

export default Search;
```

and in `src/components/homepage/homepage.jsx`, import the new component at the
top of the file, and replace the `{/* some controls here later? */}` line:

```
import Search from 'components/search/search';

...

<Search />
```

### Controlled form elements

We want to be able to take the value of the form field and use it elsewhere in
our application. Because we want React to manage that form value for us, we must
set it up as a [controlled
component](https://facebook.github.io/react/docs/forms.html#controlled-components).
In a controlled component, the value attribute is assigned to a variable in the
components __state__.

### State

Unlike __props__, __state__ _is_ mutable within the component. But you should
never directly set the value of `this.state` other than in the class
constructor. Instead, use the
[setState](https://facebook.github.io/react/docs/react-component.html#setstate)
function. You can also specify a callback that will execute once the state
change has re-rendered.

### Implementing our controlled search box

First, we set up the initial value of our field in the class constructor. We
then assign this state variable to the value of the field:

```
import React, { Component } from 'react';

class Search extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      searchFieldValue: ''
    };
  }
  
  render () {  
    return (
      <div className="mb-3">
        <label>
          Search:
          <input
            className="ml-2"
            type="search"
            autoComplete="off"
            value={this.state.searchFieldValue}
          />
        </label>
```

The `constructor (props) { super(props)` bit is boilerplate for adding a
constructor to a class.
  
Now we need to set up a trigger so as the user interacts
with the field their input values are reflected in the state:

```
class Search extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      searchFieldValue: ''
    };

    this.searchFieldChange = this.searchFieldChange.bind(this);
  }
  
  searchFieldChange (event) {
    this.setState({
      searchFieldValue: event.target.value
    });
  }
  
  render () {  
    return (
      <div className="mb-3">
        <label>
          Search:
          <input
            className="ml-2"
            type="search"
            autoComplete="off"
            onChange={this.searchFieldChange}
            value={this.state.searchFieldValue}
          />
        </label>
```

When a change event is called, the method `searchFieldChange` is executed, which
then sets the value of `searchFieldValue` in the component state.

There was one other non-obvious thing we needed to do here in order to make this
code work: using ES6 classes in React, the reference to `this` gets broken when
called from and event in the JSX, so we need to add the line
`this.searchFieldChange = this.searchFieldChange.bind(this);` in the constructor
to preserve that reference. There are a [couple of alternate ways of doing
this](https://facebook.github.io/react/docs/handling-events.html) but this is
the most broadly used method.

## Communication between components

We need to get the search value back up into the Homepage component, and from
there down to the Table component.

The action to grab that data from the Search component need to come from the top
down - the Homepage component needs to reach in and pull the data out (data
transmission in React is top to bottom - child components can't directly affect
their parents). We can do this by setting up a method in the Homepage
component (plus some more constructor boilerplate):

```
class Homepage extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      searchFieldValue: ''
    };
    
    this.searchValueEntered = this.searchValueEntered.bind(this);
  }
  
  searchValueEntered (value) {
    this.setState({
      searchFieldValue: value
    });
  }
```

```
<Search searchValueEntered={this.searchValueEntered} />
```

Now we've passed this down to to Search we can pick it up there and use it (not
forgetting to set up a PropType for `searchValueEntered`):

```
import React, { Component, } from 'react'; 
import PropTypes from 'prop-types';

...
  
  searchFieldChange (event) {
    this.setState({
      searchFieldValue: event.target.value
    });
    this.props.searchValueEntered(event.target.value);
  }

...

Search.propTypes = {
  searchValueEntered: PropTypes.func.isRequired
};

export default Search;
```

And finally back in Homepage we now want to pass that value down to the Table
component...

```
<Table mpData={data} searchFieldValue={this.state.searchFieldValue} />
```

... and set up a corresponding PropType in Table, too:

```
Table.propTypes = {
  mpData: PropTypes.array.isRequired,
  searchFieldValue: PropTypes.string
};
```

There __are__ much more elegant ways of managing this transmission of data, such
as [Redux](https://github.com/reactjs/react-redux) which is covered in the
intermediate course.

### Using the searchFieldValue to filter the data

Unlike a lot of frameworks, React doesn't give you off the shelf filtering. It
expects you to use another tool, or write your own filter code in JS.

We'll transform each row into a string and use `indexOf()` to see if the search
value is contained in it, and then only push our row of data if 1) there was no
search string supplied or 2) the row does contain the search value.

```
this.props.mpData.forEach((mp, index) => {
  const fulltext = Object.values(mp).join().toLowerCase();
  const searchValue = this.props.searchFieldValue.toLowerCase();

  if (!searchValue || fulltext.indexOf(searchValue) > -1) {
    let name = mp.name.split(',');
    name = name.reverse().join(' ');
    
    rows.push(
      <tr key={index}>
      <td>{name}</td>
      <td>{mp.party}</td>
      <td>{mp.electorate}</td>
      <td><a href={'mailto:' + mp.email}>{mp.email}</a></td>
      </tr>
    );
  }
});
```

> Note that [Object.values()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Object/values) is only supported by recent browsers

That should now filter the table!

It's nice to have a message if nothing has been found, let's add a check after
our loop:

```
if (rows.length === 0) {
  rows = (<tr><td colSpan="4"><i>Nothing found</i></td></tr>);
}
```

## Routes using React Router

We're building a Single Page App (SPA) (it's totally fine to use Ract for just
indivdual bits on a page that is otherwise rendered by the way) but we don't yet
have any other routes. We can add an About page using [React
Router](https://reacttraining.com/react-router/web/guides/quick-start).

First, as we're adding a project dependency we need to install it:

```
npm install --save-dev react-router-dom
```

First, let's make a component for our About page at `src/components/about/about.jsx`:

```
import React, { Component } from 'react';

class About extends Component {
  render () {  
    return (
      <div className="container-fluid">
        <div className="row mb-3">
          <div className="col">
            <h1>About</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Get the most up to date details at <a href="https://www.parliament.nz/en/get-involved/have-your-say/contact-an-mp/">https://www.parliament.nz/en/get-involved/have-your-say/contact-an-mp/</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
```

Now we'll add the navigation and routes. It's common to put the routes at the
top level of the app, so we'll going to be editing `src/index.jsx`:

```
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'styles';
import Homepage from 'components/homepage/homepage';
import About from 'components/about/about';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Homepage}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>,
  document.getElementById('app')
);
```

You can now directly access `/about` through the URL bar, be we want some user
interface. First, add
[NavLink](https://reacttraining.com/react-router/web/api/NavLink) to the module
imports:

```
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
```

Then add the NavLinks above the routes:

```
  <Router>
    <div>
      <ul className="nav nav-pills mb-3">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active" exact>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
        </li>
      </ul>

      <Route exact path="/" component={Homepage}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>,
```

## Using third party components

### react-scroll-up

There plenty of react-specific add ons that are typically very easy to
integrate. For example,
[react-scroll-up](https://www.npmjs.com/package/react-scroll-up), which adds a
flaoting back to top button, can be installed by:

```
npm install --save-dev react-scroll-up
```

and then used very easily, for example here in
`src/components/homepage/homepage.jsx`:

```
import ScrollToTop from 'react-scroll-up';
```

with the component itself being added just before the closing `div`:

```
<ScrollToTop showUnder={160}>
  <button className="btn btn-primary">Back to top</button>
</ScrollToTop>
```

The actual contents of the button are totally customisable, you can put whatever
markup you like in there.

### clipboard.js

You might also want to integrate another library that's not React-specific. This
has a bit more overhead but is usually doable. For example, if we wanted to add
a `Copy` button to each email addresses, we might want to utilise
[Clipboard.js](https://clipboardjs.com/).

Hopefully the library you want to use supports being included as a module and
can be added as an npm dep - Clipboard.js does and can:

```
npm install clipboard --save-dev
```

To use it, we want to add one per row. This is a good time to break up our Table
component up further.

Create a new file, `src/components/row/row.jsx`, into which we'll set up a
component and copy over some of the logic from Table:

```
import React, { Component, } from 'react'; 
import PropTypes from 'prop-types';

class Row extends Component {
  
  render () {  
    let name = this.props.mp.name.split(',');
    name = name.reverse().join(' ');
    
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.mp.party}</td>
        <td>{this.props.mp.electorate}</td>
        <td>
          <a href={'mailto:' + this.props.mp.email}>
            <span ref={(ref) => { this.email = ref; }}>{this.props.mp.email}</span>
          </a>
        </td>
      </tr>
    );
  }
}

Row.propTypes = {
  mp: PropTypes.object.isRequired
};

export default Row;
```

Notice that the `tr` no longer has a `key` attribute, we'll keep that in the
Table component, in which we need to make some small changes, first importing
the new component:

```
import Row from 'components/row/row';
```

Just the contents of the `rows.push` command needs to change:

```
if (!searchValue || fulltext.indexOf(searchValue) > -1) {
  rows.push(
    <Row key={index} mp={mp} />
  );
}
```

Now we're in good shape to add the clipboard library over in our Row component.

```
import Clipboard from 'clipboard';
```

We want the clipboard to be hooked up to a button on the page, and that button
on the page needs to copy the email. To be able to reach into the virtual DOM
and attach the library, we need to pass in a reference to the element in the
_real_ DOM. We do this using `ref`:

```
<td>
  <a href={'mailto:' + this.props.mp.email}>
    <span ref={(ref) => { this.email = ref; }}>{this.props.mp.email}</span>
  </a>
  <button className="copybutton btn btn-default" ref={(ref) => { this.copy = ref; }}>Copy</button>
</td>
```

We want the clipboard to be set up when the component first loads. So we'll use
a lifecycle event, `componentDidMount`:

```
componentDidMount() {
  new Clipboard(this.copy, {
    text: () => {
      return this.email.innerText;
    }
  });
}
```

That should work, but really when we set up these sorts of hooks, we should tidy
up after ourselves when the component is later unloaded:

```
class Row extends Component {
  constructor (props) {
    super(props);
    
    this.copyAction = null;
  }
  
  componentDidMount() {
    this.copyAction = new Clipboard(this.copy, {
      text: () => {
        return this.email.innerText;
      }
    });
  }
  
  componentWillUnmount() {
    this.copyAction.destroy();
  }
```

### Component lifecycles

There are many [component lifecycle
events](https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle)
that trigger on particular mount, update or unmount events.

If our list of MPs that gets passed into Table could be altered by a component
further up the chain, then we might have needed to use the
[componentWillReceiveProps()](https://facebook.github.io/react/docs/react-component.html#componentwillreceiveprops)
event to re-render our component. That and
[componentDidMount()](https://facebook.github.io/react/docs/react-component.html#componentdidmount)
often end up sharing a lot of logic that you should abstract out.

## Further reading

You can define default props for a component using
[defaultProps](https://facebook.github.io/react/docs/react-component.html#defaultprops).

React's [own tutorial](https://facebook.github.io/react/tutorial/tutorial.html) is worth doing.

Read about the different types of [synthetic
events](https://facebook.github.io/react/docs/events.html#supported-events)
React supports (we only used onChange, there are loads more).

A [searchable list](http://dvemac.github.io/react-component-list/) of react components, and a [list of other lists](https://github.com/enaqx/awesome-react#components).
