import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/') as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  getLogoNavigationUrl() {
    return element(by.css('.nav-container .logo')).getAttribute('ng-reflect-router-link') as Promise<string>;
  }

  getSocialLinkDetails() {
    return element(by.css('.nav-container .social-link img')).getAttribute('src') as Promise<string>;
  }

  getActiveLink() {
    return element(by.css('.nav-container ul li.active')).getText() as Promise<string>;
  }

  getMenuItems() {
    return element(by.css('.nav-container ul')).getText() as Promise<string>;
  }

}
