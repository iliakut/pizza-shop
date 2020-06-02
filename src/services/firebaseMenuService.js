class FirebaseMenuService {
  _apiBase = 'https://pizza-shop-66ecb.firebaseio.com/';

  async getData(route) {
    const res = await fetch(`${this._apiBase}/${route}`);
    return await res.json();

  }

  async getMenu() {
    return await this.getData('menu/pizza.json')
  }

}

export default FirebaseMenuService;
