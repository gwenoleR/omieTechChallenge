describe('Search a Omie product on catalogue', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show a search bar', async () => {
    await expect(element(by.id('searchBar'))).toBeVisible();
  });

  it('should show a reset search button', async () => {
    await expect(element(by.id('resetSearchButton'))).toBeVisible();
  });

  it('should show an empty message if no search string', async () => {
    await expect(element(by.id('emptyMessage'))).toBeVisible();
  });

  it('should show a list of products when search string is not empty', async () => {
    await element(by.id('searchBar')).tap();
    await element(by.id('searchBar')).typeText('a');

    await expect(element(by.id('emptyMessage'))).not.toBeVisible();
    await expect(element(by.id('productList'))).toBeVisible();
  });
});
