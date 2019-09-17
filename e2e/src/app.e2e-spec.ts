import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('TheScienceReddit App - Home', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display URL', () => {
    page.navigateTo();
    expect(browser.baseUrl).toEqual('http://localhost:4200/');
  });

  it('should display Logo Navigation Link', () => {
    page.navigateTo();
    expect(page.getLogoNavigationUrl()).toEqual('home');
  });

  it('should get the social links Link', () => {
    page.navigateTo();
    expect(page.getSocialLinkDetails()).toEqual('http://localhost:4200/assets/images/facebook.svg');
  });

  it('should get the active navigation Link', () => {
    page.navigateTo();
    expect(page.getActiveLink()).toEqual('HOME');
  });

  it('should get the menu items', () => {
    page.navigateTo();
    expect(page.getMenuItems()).toEqual('HOMETRENDINGABOUTCONTACT');
  });



  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
