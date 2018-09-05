
![npm](https://img.shields.io/npm/dt/react-js-search.svg)
![npm](https://img.shields.io/npm/v/react-js-search.svg)
![npm](https://img.shields.io/npm/l/react-js-search.svg)

# React-js-search
React JS Search

# Description

Really simple search component, plug and play where you define two callbacks that are triggered when the search text has changed or when the user clicks on the search button. It will trigger back the defined function with the typed String as param so you can filter a table, call your backend, etc. 

# How it looks

![alt text](screenshots/search.png "React JS Search")

# Installation

Install it from npm and include it in your React build process (using Webpack, Browserify, etc).

```
npm i react-js-search
```

# Usage

Import `SearchBar` in your react component.

```javascript
import SearchBar from 'react-js-search';
```

Props available:


For example:
```javascript
<SearchBar 
  onSearchTextChange={this.onSearchChange}
  onSearchButtonClick={this.onSearchClick}
  placeHolderText={"Search here..."}
/>
```

# Props

| Name        | Type            | Mandatory | Description 
| ------------- |:-------------:| -----:|:-----|
| onSearchTextChange      | function | Y | Function to call back when the input text change |
| onSearchButtonClick | function     | Y| Function to call back when the search button is pressed |
| placeholder | String   |N  | Default: 'Search...', Place holder text for the textfield |


#What's new
v0.1.0
* Search bar with callbacks and customizable placeholder text


# License 

Licensed under the MIT License.
