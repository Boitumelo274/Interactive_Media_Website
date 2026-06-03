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
    favouriteArtistCard.setAttribute("artist-card-id", favouriteArtist.id);

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

//Call generateAtristCards to create artist cards
generatArtistCards(favouriteArtists);

// Handling showing more content when clicking a button/dropdown on artist cards
const artistsButton = document.querySelector(".artists-btn");

let artistsExpanded = false;

artistsButton.addEventListener("click", () => {
  const artistCards = document.querySelectorAll(".artist-card");

  artistsExpanded = !artistsExpanded;

  artistsButton.classList.toggle("rotate");

  if (artistsExpanded) {
    artistCards.forEach((card) => {
      card.style.display = "block";
    });
  } else {
    hideExtraArtists();
  }
});

const hideExtraArtists = () => {
  const artistCards = document.querySelectorAll(".artist-card");

  // Desktop
  if (window.innerWidth > 775) {
    artistCards.forEach((card) => {
      card.style.display = "block";
    });
    artistsButton.style.display = "none";
    return;
  }

  artistsButton.style.display = "block";

  let cardsToShow = 2;

  if (window.innerWidth <= 462) {
    cardsToShow = 1;
  }

  artistCards.forEach((card, index) => {
    if (index < cardsToShow) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};

hideExtraArtists();

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

//Handling showing more content when clicking a button/dropdown on album covers
const albumsButton = document.querySelector(".albums-btn");

let albumsExpanded = false;

albumsButton.addEventListener("click", () => {
  const albumCards = document.querySelectorAll(".album-card");

  albumsExpanded = !albumsExpanded;

  albumsButton.classList.toggle("rotate");

  if (albumsExpanded) {
    albumCards.forEach((card) => {
      card.style.display = "block";
    });
  } else {
    hideExtraAlbums();
  }
});

function hideExtraAlbums() {
  const albumCards = document.querySelectorAll(".album-card");

  // Desktop
  if (window.innerWidth > 775) {
    albumCards.forEach((card) => {
      card.style.display = "block";
    });

    albumsButton.style.display = "none";
    return;
  }

  albumsButton.style.display = "block";

  let cardsToShow = 2;

  if (window.innerWidth <= 462) {
    cardsToShow = 1;
  }

  albumCards.forEach((card, index) => {
    if (index < cardsToShow) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

hideExtraAlbums();

//Music Influence Timeline array of objects
const influenceTimelineCovers = [
  {
    id: 1,
    year: 2013,
    albumName: "The Marshall Mathers LP 2",
    imageUrl: "../Images/timeline-artist-images/timeline-cover1.png",
    description: "First Major Influence",
    influenceDescription:
      "I started listening to this album in the year 2018. It introduced me to raw lyricism and deep emotional storytelling.",
    imagePlaceHolderText: "Image1",
  },
  {
    id: 2,
    year: 2014,
    albumName: "2014 Forest Hills Drive",
    imageUrl: "../Images/album-cover1.png",
    description: "Finding Perspective & Identity",
    influenceDescription:
      "Later on in the same year (2018) after listening to Eminem's album I was introduced to this album. J.Cole's honesty helped me understand growth, maturity, and real-life emotions through Hip-Hop.",
    imagePlaceHolderText: "Image2",
  },
  {
    id: 3,
    year: 2018,
    albumName: "Strings and Bling",
    imageUrl: "../Images/timeline-artist-images/timeline-cover2.png",
    description: "African Hip-Hop Pride",
    influenceDescription:
      "Nasty C boosted my confidence and made me connect deeper with African rap culture.",
    imagePlaceHolderText: "Image3",
  },
  {
    id: 4,
    year: 2022,
    albumName: "DS4Ever",
    imageUrl: "../Images/album-cover2.png",
    description: "Modern Vibe & Melodic Trap Influence",
    influenceDescription:
      "Gunna's smooth, melodic style shaped the vibe and energy of my current music taste.",
    imagePlaceHolderText: "Image4",
  },
  {
    id: 5,
    year: 2026,
    albumName: "The Fall Off",
    imageUrl: "../Images/timeline-artist-images/timeline-cover3.png",
    description: "Present Day Influence",
    influenceDescription:
      "This one is my favourite album. This era represents how I'm growing with the culture today inspired by maturity, evolution, and lyrical depth.",
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

    musicCoverCard.addEventListener("click", () => {
      openModal(
        influenceTimelineCover.imageUrl,
        influenceTimelineCover.albumName,
        influenceTimelineCover.influenceDescription,
      );
    });

    musicInfluenceTimelineContainer.appendChild(musicCoverCard);
  });
};

//Generating music influence timeline cards
generateMusicInfluenceTimelineCards(influenceTimelineCovers);

//Handling showing more content when clicking a button/dropdown on timeline influence
const timelineButton = document.querySelector(".timeline-btn");

let timelineExpanded = false;

timelineButton.addEventListener("click", () => {
  const timelineCards = document.querySelectorAll(".music-cover-card");

  timelineExpanded = !timelineExpanded;

  timelineButton.classList.toggle("rotate");
  if (timelineExpanded) {
    timelineCards.forEach((card) => {
      card.style.display = "block";
    });
  } else {
    hideExtraTimelineCards();
  }
});

function hideExtraTimelineCards() {
  const timelineCards = document.querySelectorAll(".music-cover-card");

  // Desktop
  if (window.innerWidth > 775) {
    timelineCards.forEach((card) => {
      card.style.display = "block";
    });

    timelineButton.style.display = "none";
    return;
  }

  timelineButton.style.display = "block";

  let cardsToShow = 2;

  if (window.innerWidth <= 462) {
    cardsToShow = 1;
  }

  timelineCards.forEach((card, index) => {
    if (index < cardsToShow) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

hideExtraTimelineCards();

//Handling showing cards at a viewport > 775 px
window.addEventListener("resize", () => {
  if (!artistsExpanded) hideExtraArtists();
  if (!albumsExpanded) hideExtraAlbums();
  if (!timelineExpanded) hideExtraTimelineCards();
});

// Get modal elements
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeBtn = document.getElementById("closeModalBtn");

// Function to open modal
const openModal = (imageSrc, title, description) => {
  modalImage.src = imageSrc;
  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modal.style.display = "flex";
};

// Function to close modal
const closeModal = () => {
  modal.style.display = "none";
};

// Close modal when clicking close button
closeBtn.addEventListener("click", closeModal);

// Close modal when clicking outside the modal content
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Close modal when pressing Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
