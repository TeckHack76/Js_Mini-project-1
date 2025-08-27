const users = [
  {
    name: "John Doe",
    img: "https://images.unsplash.com/photo-1755311901131-c0b8f91a21c0?w=600&auto=format&fit=crop&q=60",
    bio: "Lorem ipsum dolor sit amet consectetur"
  },
  {
    name: "Jane Smith",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60",
    bio: "Another example user with profile card"
  },
  {
    name: "Michael Lee",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60",
    bio: "UI/UX Designer and Developer"
  },
  {
    name: "Jane Smith",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60",
    bio: "Another example user with profile card"
  },
  {
    name: "Jane Smith",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60",
    bio: "Another example user with profile card"
  },
  {
    name: "Jane Smith",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60",
    bio: "Another example user with profile card"
  }
];

function showUsers(arr){
  const container = document.querySelector(".cards"); // Use cards container
  arr.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = user.img;
    img.classList.add("bg-img");

    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.img})`;
    blurredLayer.classList.add("blurred-layer");

    const content = document.createElement("div");
    content.classList.add("content");

    const h3 = document.createElement("h3");
    h3.textContent = user.name;

    const p = document.createElement("p");
    p.textContent = user.bio;

    content.appendChild(h3);
    content.appendChild(p);

    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    container.appendChild(card); // Append inside .cards
  });
}

showUsers(users); // initial render

const inp = document.querySelector("input");

inp.addEventListener("input", function () {
  const query = inp.value.toLowerCase().trim();

  const filtered = users.filter((user) =>
    user.name.toLowerCase().includes(query) ||
    user.bio.toLowerCase().includes(query)
  );

  const container = document.querySelector(".cards");
  container.innerHTML = ""; // clear previous cards/message

  if (filtered.length) {
    showUsers(filtered);
  } else {
    const nf = document.createElement("div");
    nf.className = "not-found";
    nf.textContent = "Not Found";
    container.appendChild(nf);
  }
});