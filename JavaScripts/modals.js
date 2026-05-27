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

//Calling the generateAtristCards to creat artist cards
generatArtistCards(favouriteArtists);

//Inspirational Albums
const albumCovers = [
  {
    id: 1,
    albumName: "2014 Forest Hills Drive-J.Cole",
    imageUrl: "../Images/album-cover1.png",
    imagePlaceHolderText: "Image1",
  },
  {
    id: 2,
    albumName: "DS4Ever-Gunna",
    imageUrl: "../Images/album-cover2.png",
    imagePlaceHolderText: "Image2",
  },
  {
    id: 3,
    albumName: "So Much Fun-Young Thug",
    imageUrl: "../Images/album-cover3.png",
    imagePlaceHolderText: "Image3",
  },
  {
    id: 4,
    albumName: "The Forever Story-JID",
    imageUrl: "../Images/album-cover4.png",
    imagePlaceHolderText: "Image4",
  },
  {
    id: 5,
    albumName: "Scorpion-Drake",
    imageUrl: "../Images/album-cover5.png",
    imagePlaceHolderText: "Image5",
  },
];

const generateAlbumCards = (albumCovers) => {
  const albumContainer = document.querySelector(".album-card-container");

  albumContainer.innerHTML = "";

  albumCovers.map((albumCover) => {
    const albumCard = document.createElement("div");
    albumCard.classList.add("album-card");
    albumCard.setAttribute("album-cover-data-id", albumCover.id);

    const albumCoverImage = document.createElement("img");
    albumCoverImage.classList.add("album-cover");
    albumCoverImage.src = albumCover.imageUrl;
    albumCoverImage.alt = albumCover.imagePlaceHolderText;

    const albumCoverName = document.createElement("h3");
    albumCoverName.textContent = albumCover.albumName;

    albumCard.appendChild(albumCoverImage);
    albumCard.appendChild(albumCoverName);

    albumContainer.appendChild(albumCard);
  });
};

// generating album cover cards with names
generateAlbumCards(albumCovers);

//Music Influence Timeline array of objects
const influenceTimelineCovers = [
  {
    id: 1,
    year: 2013,
    albumName: "The Marshall Mathers LP 2",
    imageUrl: "../Images/timeline-artist-images/timeline-cover1.png",
    description: "First Major Influence",
    imagePlaceHolderText: "Image1",
  },
  {
    id: 2,
    year: 2014,
    albumName: "2014 Forest Hills Drive",
    imageUrl: "../Images/album-cover1.png",
    description: "Finding Perspective & Identity",
    imagePlaceHolderText: "Image2",
  },
  {
    id: 3,
    year: 2018,
    albumName: "Strings and Bling",
    imageUrl: "../Images/timeline-artist-images/timeline-cover2.png",
    description: "African Hip-Hop Pride",
    imagePlaceHolderText: "Image3",
  },
  {
    id: 4,
    year: 2022,
    albumName: "DS4Ever",
    imageUrl: "../Images/album-cover2.png",
    description: "Modern Vibe & Melodic Trap Influence",
    imagePlaceHolderText: "Image4",
  },
  {
    id: 5,
    year: 2026,
    albumName: "The Marshall Mathers LP 2",
    imageUrl: "../Images/timeline-artist-images/timeline-cover3.png",
    description: "Present Day Influence",
    imagePlaceHolderText: "Image5",
  },
];

const generateMusicInfluenceTimelineCards = (influenceTimelineCovers) => {
  const musicInfluenceTimelineContainer = document.querySelector(
    ".music-influence-timeline-container",
  );

  musicInfluenceTimelineContainer.innerHTML = "";

  influenceTimelineCovers.map((influenceTimelineCover) => {
    const musicCoverCard = document.createElement("div");
    musicCoverCard.classList.add("music-cover-card");
    musicCoverCard.setAttribute("influence-id", influenceTimelineCover.id);

    const year = document.createElement("h3");
    year.classList.add("year");
    year.textContent = influenceTimelineCover.year;

    const imageCover = document.createElement("img");
    imageCover.classList.add("timeline-song-cover");
    imageCover.src = influenceTimelineCover.imageUrl;
    imageCover.alt = influenceTimelineCover.imagePlaceHolderText;

    const timelineDescription = document.createElement("h4");
    timelineDescription.textContent = influenceTimelineCover.description;

    musicCoverCard.appendChild(year);
    musicCoverCard.appendChild(imageCover);
    musicCoverCard.appendChild(timelineDescription);

    musicInfluenceTimelineContainer.appendChild(musicCoverCard);
  });
};

//Generating music influence timeline cards
generateMusicInfluenceTimelineCards(influenceTimelineCovers);
