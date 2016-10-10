import 'normalize.css/normalize.css';
import 'styles/App.css';

import React from 'react';
import { observer } from 'mobx-react';

@observer
class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <span>{this.props.store.decorated}</span>
        <input defaultValue={this.props.store.value}
               onChange={(event) => this.props.store.value = event.currentTarget.value}
        />
      </div>
    );
  }
}

export default AppComponent;
