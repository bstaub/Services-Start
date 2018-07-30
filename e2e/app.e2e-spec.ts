import { CompleteGuideDePage } from './app.po';

describe('complete-guide-de App', function() {
  let page: CompleteGuideDePage;

  beforeEach(() => {
    page = new CompleteGuideDePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
