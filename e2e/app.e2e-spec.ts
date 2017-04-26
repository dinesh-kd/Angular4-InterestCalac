import { SiPage } from './app.po';

describe('si App', () => {
  let page: SiPage;

  beforeEach(() => {
    page = new SiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
