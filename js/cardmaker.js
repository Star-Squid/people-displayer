class Card {
  constructor (id, photo, name, position, description){
    this.id = id;
    this.photo = photo;
    this.name = name;
    this.position = position;
    this.description = description;
  }

  addToPage(){
    const cards = document.getElementsByClassName("cards")[0];
    const person = `<div class="card" id="${this.id}">
      <div class="photo" style="background-image: url('./img/face${this.id}.jpg')"></div>
      <h3 class="name">${this.name}</h3>
      <p class="position">${this.position}</p>
      <p class="description">${this.description}</p>
      </div>`;

    cards.innerHTML += person;
  }
};


const person001 = new Card("004", "photo", "Ovaltine Vinaigrette", "Landlord", "Humor is a complex phenomenon that scientists are still trying to understand. However, one factor that seems to contribute to many people finding something funny is the sound of a name. This may be because our brains are hard-wired to pay attention to certain patterns of sound, including those that are similar to laughter.");

person001.addToPage();
