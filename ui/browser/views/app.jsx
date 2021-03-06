/*
Copyright 2016 Mozilla

Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed
under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
*/

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { ipcRenderer } from 'electron';
import BrowserWindow from './browser.jsx';

const App = function({ state, dispatch }) {
  return (
    <BrowserWindow pages={state.pages}
      currentPageIndex={state.currentPageIndex}
      pageAreaVisible={state.pageAreaVisible}
      ipcRenderer={ipcRenderer}
      dispatch={dispatch} />
  );
};

App.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(App);
