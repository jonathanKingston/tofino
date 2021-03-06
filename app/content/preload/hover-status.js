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

import { ipcRenderer as ipc } from 'electron';

function setStatus(status) {
  ipc.sendToHost('status', status);
}

window.addEventListener('mouseover', e => {
  // Watch for mouseovers of anchor elements
  let el = e.target;
  while (el) {
    if (el.tagName === 'A') {
      // Set to title or href
      if (el.getAttribute('title')) {
        setStatus(el.getAttribute('title'));
      } else if (el.href) {
        setStatus(el.href);
      }
      return;
    }
    el = el.parentNode;
  }
  setStatus(false);
});
