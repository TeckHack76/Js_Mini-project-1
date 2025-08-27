# Card Search UI 🔍

A simple and elegant **Card Search User Interface** built using **HTML, CSS, and JavaScript**.  
This project demonstrates how to filter cards dynamically based on user input, regardless of case sensitivity (uppercase/lowercase). It also displays a **"Not Found"** message if no matching cards are available.

---

## 🚀 Features
- ✅ Real-time card filtering as you type  
- ✅ Case-insensitive search (works with lowercase/uppercase/mixed)  
- ✅ "Not Found" message when no results match  
- ✅ Clean and responsive design  
- ✅ Built without frameworks (just pure HTML, CSS, and JS)

---

## 📂 Project Structure

- ├── index.html # Main HTML file (UI structure)
- ├── style.css # CSS file for styling the cards & search bar
- ├── script.js # JavaScript file for filtering logic
- └── README.md # Documentation file


---

## 🛠️ How It Works
1. The user types something in the **search bar**.
2. JavaScript listens for every keystroke using an `input` event listener.
3. The entered text is converted to **lowercase** using `.toLowerCase()` so the search is not case-sensitive.
4. Each card’s title is checked with `.includes()` to see if it matches the search term.
5. If matches are found → only those cards are shown.  
   If no matches are found → a **"Not Found"** message appears.

---

## 💡 Real-Life Applications
This project is a **mini version** of the search feature we use daily:
- 🔎 Searching contacts in a phonebook  
- 🛒 Filtering products in an e-commerce store  
- 📚 Finding books in a digital library  
- 🎵 Searching songs or playlists in a music app  

Learning this concept helps in understanding:
- DOM Manipulation  
- Event Handling  
- Case-insensitive string comparison  
- Dynamic filtering of UI elements  

---

## 📝 How to Run Locally
1. Clone this repo:
   ```bash
   git clone https://github.com/TeckHack76/Js_Mini-project-1.git
