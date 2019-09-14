// Bulma CSS for light weight CSS. One can any css framework
import 'bulma/css/bulma.min.css';
import './resources/css/util.scss';
import './resources/css/global.css';

export default class Client {
  static googleTrack() {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'UA-108804791-2', {
        page_path: window.location.pathname,
      });
    }
  }

  /* eslint-disable-next-line class-methods-use-this */
  apply(clientHandler) {
    clientHandler.hooks.locationChange.tapPromise('ReloadGoogleTrack', async () => Client.googleTrack());
  }
}
