import { ContactPage } from './contact.po';
import { browser, logging } from 'protractor';

describe('TheScienceReddit App - Contact Us', () => {
  let page: ContactPage;

  beforeEach(() => {
    page = new ContactPage();
  });

  it('should get the about page title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('CONACT US');
  });

  it('should get the active navigation Link', () => {
    page.navigateTo();
    expect(page.getActiveLink()).toEqual('CONTACT');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
