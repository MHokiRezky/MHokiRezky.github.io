import FavoriteRestaurants from '../../data/favorite-restaurant';
import { createMovieItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
            <div class="content">
                <h2 class="content__heading">Restoran yang disukai!</h2>
                <div id="movies" class="movies"></div>
            </div>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurants.getAll();
    const moviesContainer = document.querySelector('#movies');

    if (restaurants.length >= 1) {
      restaurants.forEach((res) => {
        moviesContainer.innerHTML += createMovieItemTemplate(res);
      });
    } else {
      moviesContainer.innerHTML += '<div style="display: flex; justify-content: center; align-items: center;"><h2 class="restaurant-item__not-found">Belum ada restoran favorit</h2></div>';
    }
  },
};

export default Like;
