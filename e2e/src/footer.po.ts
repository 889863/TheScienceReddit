import { browser, by, element } from 'protractor';

export class FooterComponent {
  navigateTo() {
    return browser.get('/') as Promise<any>;
  }

  getFooterText() {
    return element(by.css('footer p')).getText() as Promise<string>;
  }
}
