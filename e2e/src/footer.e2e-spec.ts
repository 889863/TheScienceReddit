import { FooterComponent } from './footer.po';
import { browser, logging } from 'protractor';

describe('TheScienceReddit App - Footer Component', () => {
  let page: FooterComponent;

  beforeEach(() => {
    page = new FooterComponent();
  });


  it('should get footer text', () => {
    page.navigateTo();
    expect(page.getFooterText()).toContain('All Rights Reserved.');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
