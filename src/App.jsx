import React, { Component, lazy, Suspense } from 'react';

const Header = lazy(() => import('./components/Header'));
const Menu = lazy(() => import('./components/Menu'));

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <div className="app__menubackground"></div>
        <Suspense fallback={<div>loading</div>}>
          <Menu />
        </Suspense>
        <Suspense fallback={<div>loading</div>}>
          <Header />
        </Suspense>
      </div>
    )
  }
}

export default App;