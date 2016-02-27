import * as React from 'react';
import './Header.less';

class Header extends React.Component<any, any> {
  render() {
    return (
      <div className="Header row">
        <div className="col-lg-12 text-center">
          <h2 className="Header__title">torwinter</h2>
        </div>
      </div>
    );
  };
}

export default Header;
