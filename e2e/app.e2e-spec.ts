import { NgxCliLibraryPage } from './app.po';

describe('ngx-cli-library App', () => {
  let page: NgxCliLibraryPage;

  beforeEach(() => {
    page = new NgxCliLibraryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
