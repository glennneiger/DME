import { DMEDealPage } from './app.po';

describe('dme-deal App', () => {
  let page: DMEDealPage;

  beforeEach(() => {
    page = new DMEDealPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
