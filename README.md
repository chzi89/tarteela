# 🌙 Tarteela – Quran Tilawat & Dua App

Tarteela is a modern Islamic web app built with **Next.js, Node.js, and MySQL**.
It allows users to read Quran, listen to tilawat, and access daily duas in a clean and peaceful UI.

---

## 🚀 Features

* 📖 Quran Surah listing
* 📜 Ayah display with Arabic text & translation
* 🎧 Tilawat (audio recitation support)
* 🤲 Dua collection (categorized)
* ⭐ Favorites (save ayahs & duas)
* 🌙 Clean Islamic UI design

---

## 🧱 Tech Stack

### Frontend

* Next.js (App Router)
* TypeScript (.tsx)
* CSS / Tailwind (optional)

### Backend

* Node.js (Express.js)

### Database

* MySQL

### Storage

* Cloud (AWS S3 / Firebase) for audio files

---

## 📁 Project Structure

```
tarteela-app/
├─ backend/        # Node.js API
├─ mobile/         # React Native (optional)
├─ web/            # Next.js frontend
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```
git clone https://github.com/chzi89/tarteela-app.git
cd tarteela-app
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=tarteela
JWT_SECRET=yoursecret
```

Run server:

```
node server.js
```

---

### 3️⃣ Frontend Setup (Next.js)

```
cd web
npm install
npm run dev
```

App will run on:

```
http://localhost:3000
```

---

## 🔌 API Endpoints

### Surahs

```
GET /surahs
```

### Ayahs

```
GET /ayahs/:surah_id
```

### Duas

```
GET /duas
GET /duas?category=morning
```

### Favorites

```
POST /favorites
GET /favorites/:user_id
```

---

## 🗄️ Database

Main tables:

* users
* surahs
* ayahs
* audio
* duas
* favorites

---

## 💡 Future Improvements

* 🔐 Authentication (JWT login system)
* 📥 Offline mode
* 🔍 Search & filter
* 🎨 Advanced UI (Islamic theme)
* 📱 Mobile app (React Native)

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

---

## 📜 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Zaki ur Rehman**

---

## 🌟 Support

If you like this project, please ⭐ the repository!
# tarteela
# tarteela
