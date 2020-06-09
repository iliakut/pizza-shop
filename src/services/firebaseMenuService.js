class FirebaseMenuService {
  _apiBase = 'https://pizza-shop-66ecb.firebaseio.com/';

  async getData(route) {
    try {
      const res = await fetch(`${this._apiBase}/${route}`);
      return await res.json();
    } catch (e) {
      console.warn(e);
    }
  }

  async getMenu() {
    return await this.getData('menu.json')
  }

}

export default FirebaseMenuService;
