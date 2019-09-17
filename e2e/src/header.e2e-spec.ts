import { HeaderComponent } from './header.po';
import { browser, logging } from 'protractor';

describe('TheScienceReddit App - Header Component', () => {
  let page: HeaderComponent;

  beforeEach(() => {
    page = new HeaderComponent();
  });


  it('should get the active navigation Link HOME PAGE', () => {
    page.navigateTo('home');
    expect(page.getActiveLink()).toEqual('HOME');
  });

  it('should get the active navigation Link HOME PAGE - Get the title', () => {
    page.navigateTo('home');
    expect(page.getTitleText()).toEqual('Latest Posts');
  });


  it('should get the active navigation Link ABOUT PAGE', () => {
    page.navigateTo('about');
    expect(page.getActiveLink()).toEqual('ABOUT');
  });

  it('should get the active navigation Link CONTACT PAGE', () => {
    page.navigateTo('contact');
    expect(page.getActiveLink()).toEqual('CONTACT');
  });

  it('should get the active navigation Link When calling  wrong URL', () => {
    page.navigateTo('test');
    expect(page.getActiveLink()).toEqual('HOME');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
