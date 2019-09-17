import { browser, by, element } from 'protractor';

export class HeaderComponent {
  navigateTo(page) {
    return browser.get('/'+page) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('.main-posts h2')).getText() as Promise<string>;
  }

  getActiveLink() {
    return element(by.css('.nav-container ul li.active')).getText() as Promise<string>;
  }

}
