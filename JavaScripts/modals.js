// Cards and modals
//Arrays of artists object
const favouriteArtists = [
  {
    id: 1,
    name: "J.Cole",
    imageUrl: "../Images/timeline-artist-images/J.Cole.png",
    imagePlaceHolderText: "Image1",
  },
  {
    id: 2,
    name: "Kendrick Lamar",
    imageUrl: "../Images/timeline-artist-images/Kendrick.png",
    imagePlaceHolderText: "Image2",
  },
  {
    id: 3,
    name: "Big Sean",
    imageUrl: "../Images/timeline-artist-images/BigSean.png",
    imagePlaceHolderText: "Image3",
  },
  {
    id: 4,
    name: "Logic",
    imageUrl: "../Images/timeline-artist-images/Logic.png",
    imagePlaceHolderText: "Image4",
  },
  {
    id: 5,
    name: "Nipsey Hussle",
    imageUrl: "../Images/timeline-artist-images/Nipsey.png",
    imagePlaceHolderText: "Image5",
  },
];

const generatArtistCards = (favouriteArtists) => {
  const cardContainer = document.querySelector(".artists-cards-container");

  cardContainer.innerHTML = "";

  favouriteArtists.map((favouriteArtist) => {
    const favouriteArtistCard = document.createElement("div");
    favouriteArtistCard.classList.add("artist-card");
    favouriteArtistCard.setAttribute("artist-card", favouriteArtist.id);

    const artistImage = document.createElement("img");
    artistImage.classList.add("artist-image");
    artistImage.src = favouriteArtist.imageUrl;
    artistImage.alt = favouriteArtist.imagePlaceHolderText;

    const artistName = document.createElement("h3");
    artistName.textContent = favouriteArtist.name;

    favouriteArtistCard.appendChild(artistImage);
    favouriteArtistCard.appendChild(artistName);

    cardContainer.appendChild(favouriteArtistCard);
  });
};

generatArtistCards(favouriteArtists);
