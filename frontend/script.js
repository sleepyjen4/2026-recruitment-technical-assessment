// JSON Data for Building Cards
fetch("./data.json")
  .then((res) => res.json())
  .then((buildings) => {
    const grid = document.getElementById("buildingCards");

    buildings.forEach((building) => {
      const imgSrc = building.building_file || building.building_picture || "";

      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${imgSrc}" alt="${building.name}">
        <div class="card-title">${building.name}</div>
        <div class="room-available-text"><span class="circle-status"></span>Rooms available: ${building.rooms_available}</div>
      `;

      grid.appendChild(card);
    });
  })
  .catch((err) => console.error("Error loading data:", err));

// Door Open and Closing Feature
const freeRoomsDoor = document.getElementById("doorLogo");

function handleClick() {
  if (freeRoomsDoor.src.includes("freeRoomsLogo.png")) {
    freeRoomsDoor.src = "assets/freeroomsDoorClosed.png";
  } else {
    freeRoomsDoor.src = "assets/freeRoomsLogo.png";
  }
}

freeRoomsDoor.addEventListener("click", handleClick);
