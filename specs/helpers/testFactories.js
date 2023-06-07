import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestaurants from '../../src/scripts/data/favorite-restaurant';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestaurants,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
