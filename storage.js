class Storage {
  constructor() {
    this.city;
    this.state;
    this.defaultCity = 'Miami';
    this.defaultState = 'FL';
  }

  get LocationData() {
    if(localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    if(localStorage.getItem('state') === null) {
      this.state = thiis.defaultState;
    } else {
      this.state = localStorage.getItem('state');
    }

    return {
      city: this.city,
      state: this.state
    }
  }

  setLocation(city, state) {
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
  }
}