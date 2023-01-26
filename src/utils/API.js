import apiConfig from './constants.js';

class API {
  constructor(config) {
    this.baseUrl = config.baseUrl;
    this.headers = config.headers;
  }

  async getCardsList() {
    const response = await fetch(`${this.baseUrl}/cards`, {
      method: 'GET',
      'headers': this.headers
    })
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return Promise.reject(`Ошибка: ${response.status}`);
    }
  }

  async getCardLike(id) {
    const response = await fetch(`${this.baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      'headers': this.headers,
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return Promise.reject(`Ошибка: ${response.status}`);
    }
  }

  async deleteLike(id) {
    const response = await fetch(`${this.baseUrl}/cards/${id}/likes`,{
      method: 'DELETE',
      headers: this.headers
    })
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return Promise.reject(`Ошибка: ${response.status}`);
    }
  }

  async getProfileInfo() {
    const response = await fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      'headers': this.headers
      }) 
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        return Promise.reject(`Ошибка: ${response.status}`);
      }
  }

  async editProfileInfo(profileUserInfo) {
    const response = await fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      'headers': this.headers,
      body: JSON.stringify({
        name: profileUserInfo.name,
        about: profileUserInfo.about
      })
    })
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return Promise.reject(`Ошибка: ${response.status}`);
    }
  }

  async editProfileAvatar(profileUserAva) {
    const response = await fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      'headers': this.headers,
      body: JSON.stringify(profileUserAva)
    })
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return Promise.reject(`Ошибка: ${response.status}`);
    }
  }

  async createCard(inputs) {
    const response = await fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      'headers': this.headers,
      body: JSON.stringify({
        name: inputs.name,
        link: inputs.link,
      })
    })
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return Promise.reject(`Ошибка: ${response.status}`);
    }
  }

  async deleteCard(id) {
    const response = await fetch(`${this.baseUrl}/cards/${id}`,{
      method: 'DELETE',
      headers: this.headers
    })
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return Promise.reject(`Ошибка: ${response.status}`);
    }
  }
}

const api = new API(apiConfig);

export default api;