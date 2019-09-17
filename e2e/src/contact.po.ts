import { browser, by, element } from 'protractor';

export class ContactPage {
  navigateTo() {
    return browser.get('/contact') as Promise<any>;
  }

  getTitleText() {
    return element(by.css('.contact-container h1')).getText() as Promise<string>;
  }

  getActiveLink() {
    return element(by.css('.nav-container ul li.active')).getText() as Promise<string>;
  }

}
