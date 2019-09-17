import { browser, by, element } from 'protractor';

export class AboutPage {
  navigateTo() {
    return browser.get('/about') as Promise<any>;
  }

  getTitleText() {
    return element(by.css('.about-container h1')).getText() as Promise<string>;
  }

  getActiveLink() {
    return element(by.css('.nav-container ul li.active')).getText() as Promise<string>;
  }

}
