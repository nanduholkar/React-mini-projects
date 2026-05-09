# React Router Project 🚀

This is a React-based web application built using **Vite** and **React Router DOM**. The project demonstrates routing concepts like nested routes, dynamic routing, loaders, and reusable components.

---

## 📌 Features

* ⚡ Fast setup using Vite
* 🧭 Client-side routing with React Router
* 🔗 Nested routes implementation
* 🧑 Dynamic routing using `useParams`
* 📡 Data loading using `loader` (React Router feature)
* 🎨 Responsive UI using Tailwind CSS
* 📄 Reusable components (Header, Footer, Layout)

---

## 🧱 Project Structure

```
src/
│── components/
│   ├── Home/
│   ├── About/
│   ├── Contact/
│   ├── Github/
│   ├── User/
│   ├── Header/
│   └── Footer/
│
│── Layout.jsx
│── App.jsx
│── main.jsx
│── index.css
```

---

## 🚀 Routing Overview

The routing is handled using `createBrowserRouter` and `createRoutesFromElements`.

### Routes:

* `/` → Home page
* `/about` → About page
* `/contact` → Contact page
* `/github` → GitHub profile page (uses loader)
* `/user/:userid` → Dynamic user page

---

## 🧑 Dynamic Routing Example

```js
<Route path='user' element={<User/>}>
  <Route path=':userid' element={<User/>} />
</Route>
```

Usage:

```
/user/123
```

---

## 📡 Loader Example (GitHub API)

Data is fetched before rendering the component:

```js
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/nanduholkar')
    return response.json()
}
```

---

## 🧩 Key Concepts Used

* React Components
* Props & Hooks
* `useParams`
* `useLoaderData`
* React Router DOM v6+
* Nested Routing

---

## 🛠️ Installation & Setup

```bash
# clone repo
git clone <repo-url>

# install dependencies
npm install

# run development server
npm run dev
```

---

## 📸 UI Overview

* Header with navigation links
* Footer with social links
* Home landing page UI
* About page content section
* GitHub data fetching UI
* User dynamic page

---

## 📌 Tech Stack

* React.js
* React Router DOM
* Vite
* Tailwind CSS

---

## 👨‍💻 Author

Built by Nandu for learning React Router concepts and frontend development practice.

---

