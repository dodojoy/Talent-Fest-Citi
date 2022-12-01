import homepage from './pages/homepage/main.js';
import developers from './pages/developers/main.js';
import login from './pages/login/main.js';
import register from './pages/register/main.js';
import qrcode from './pages/qrcode/main.js';

const main = document.querySelector('#root');

function loadRoots() {
  main.innerHTML = '';
  switch (window.location.hash) {
    case '#homepage':
      main.appendChild(homepage());
      break;
    case '#login':
      main.appendChild(login());
      break;
    case '#register':
      main.appendChild(register());
      break;
      case '#developers':
        main.appendChild(developers());
        break;
      case '#qrcode':
        main.appendChild(qrcode());
        break;
    default:
      main.appendChild(homepage());
  }
}

window.addEventListener('hashchange', loadRoots);

window.addEventListener('load', () => {
  loadRoots();
});
