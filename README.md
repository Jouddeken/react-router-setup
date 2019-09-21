# React Router Setup

Use the react-router-dom package with just a single element to render and a config file.

## Prerequisites

1. Node
2. NPM or Yarn

## Installation

Using NPM:

```
npm install @jouddeken/react-router-setup
```
Using Yarn
```markdown
yarn add @jouddeken/react-router-setup
```

## Dependencies

This package requires the following packages:

- `prop-types`
- `react`
- `react-router-dom`

## Usage

1. Create a config file, example:

   ```javascript
   import React from 'react'; // used for React.lazy
   
   export default [
     {
       id: 'home',
       path: '/',
       exact: true,
       component: React.lazy(() => import('../path/to/component')),
     },
   ];
   
   ```

2. Import the required packages and pass in the config as property to the Router component

   ```javascript
   import React from 'react';
   import Router from '@jouddeken/react-router-setup';
   import routeConfig from './path/to/config/file';
   
   const App = () => (
     <Router config={routeConfig} />
   );
   
   export default App;
   
   ```

