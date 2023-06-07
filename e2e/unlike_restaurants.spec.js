Feature('Unliking Restaurant');

Before(async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.movie-item .movie-item__content .movie-name a');

  I.click(locate('.movie-item .movie-item__content .movie-name a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.movie-item');
});

Scenario('showing a liked restaurant', ({ I }) => {
  I.seeElement('.movie-item .movie-item__content .movie-name');
});

Scenario('unliking one liked restaurant', async ({ I }) => {
  I.amOnPage('/#/like');

  I.seeElement('.movie-item .movie-item__content .movie-name a');

  I.click(locate('.movie-item .movie-item__content .movie-name a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.see('Belum ada restoran favorit', '.restaurant-item__not-found');
});
