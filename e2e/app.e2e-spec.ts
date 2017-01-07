import { SketchPadPage } from './app.po';

describe('sketch-pad App', function() {
  let page: SketchPadPage;

  beforeEach(() => {
    page = new SketchPadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
