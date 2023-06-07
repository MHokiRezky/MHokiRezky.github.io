const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#mainContent');
  I.see('Belum ada restoran favorit', '.restaurant-item__not-found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  // I.waitForElement('.movie-item .movie-name', 5);
  I.seeElement('.movie-item .movie-name a');

  const firstRestaurant = locate('.movie-name a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  // eslint-disable-next-line
  /* tidak dapat mengakses halaman /#/detail/rqdv5juczeskfw1e867 menggunakan I.click sehingga saya deklarasikan I.amOnPage untuk berpindah halaman
    minta tolong dibantu kak reviewer.
  */
  I.amOnPage('/#/detail/rqdv5juczeskfw1e867');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.movie-item');
  const likedRestaurantTitle = await I.grabTextFrom('.movie-name');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
