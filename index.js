const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const faviconPath = path.join(__dirname, "public", "favicon.jpeg");

// Serve the favicon
app.use("/favicon.jpeg", express.static(faviconPath));


const subject = [
  {
    name: "Amharic",
    videos: 1,
    videosLink: "amharic/videos",
    ytVidLink: "https://www.youtube.com/watch?v=frtfPvRBCkM&pp=ygUPYW1oYXJpYyBncmFkZSA4",
    books: 1,
    booksLink: "amharic/books",
    booksZipLink: "./db/g-8-amh.zip",
    exams: 5,
    examsLink: "amharic/exams",
    
  },
  {
    name: "English",
    videos: 1,
    videosLink: "english/videos",
    ytVidLink: "https://www.youtube.com/playlist?list=PLi0JpWsJzI9INpqrx1W32noAJuoh-qjIX",
    books: 1,
    booksLink: "english/books",
    exams: 5,
    examsLink: "english/exams",
    
  },
  {
    name: "Maths",
    videos: 1,
    videosLink: "maths/videos",
    ytVidLink: "https://www.youtube.com/playlist?list=PLfXpdCfxjXmYeJECjlNgbHT47eMJI_ZUG",
    books: 1,
    booksLink: "maths/books",
    exams: 5,
    examsLink: "maths/exams",
    
  },
  {
    name: "Social",
    videos: 1,
    videosLink: "social/videos",
    ytVidLink: "https://www.youtube.com/playlist?list=PLfXpdCfxjXmZvf_erVo6FoQef8ERnvz0E",
    books: 1,
    booksLink: "social/books",
    exams: 5,
    examsLink: "social/exams",
    
  },
  {
    name: "General Science",
    videos: 1,
    videosLink: "gs/videos",
    ytVidLink: "https://www.youtube.com/playlist?list=PLfXpdCfxjXmYsunbtJp10EeRdkoRj5rYt",
    books: 1,
    booksLink: "gs/books",
    exams: 5,
    examsLink: "gs/exams",
    
  },
  {
    name: "Citizenship",
    videos: 1,
    videosLink: "citizen/videos",
    ytVidLink: "https://www.youtube.com/playlist?list=PLfXpdCfxjXmYlBj9FUFJzNoDDO-rQZD22",
    books: 1,
    booksLink: "citizen/books",
    exams: 5,
    examsLink: "citizen/exams",
    
  },
];

app.get("/amharic", (req, res) => {
  res.render("index", { name: subject[0].name, content: subject[0].content, videos: subject[0].videos, books: subject[0].books, exams: subject[0].exams, videosLink: subject[0].videosLink, booksLink: subject[0].booksLink, examsLink: subject[0].examsLink });
});
app.get("/amharic/videos", (req, res) => {
    res.render("videos", { title: subject[0].name, ytVidLink: subject[0].ytVidLink})
});
app.get("/amharic/books", (req, res) => {
    res.render("books", { title: subject[0].name })
});
app.get("/amharic/exams", (req, res) => {
    res.render("exams", { title: subject[0].name })
});
    
app.get("/amharic/books/download", (req, res) => {
    res.download("./db/g-8-amh.rar")
});
app.get("/amharic/exams/download", (req, res) => {
    res.download("./db/g-8-amh-model.rar")
});




app.get("/english", (req, res) => {
  res.render("index", { name: subject[1].name, content: subject[1].content, videos: subject[1].videos, books: subject[1].books, exams: subject[1].exams, videosLink: subject[1].videosLink, booksLink: subject[1].booksLink, examsLink: subject[1].examsLink });
});
app.get("/english/videos", (req, res) => {
    res.render("videos", { title: subject[1].name, ytVidLink: subject[1].ytVidLink})
});
app.get("/english/books", (req, res) => {
    res.render("books", { title: subject[1].name})
});
app.get("/english/exams", (req, res) => {
    res.render("exams", { title: subject[1].name })
});
app.get("/english/books/download", (req, res) => {
    res.download("./db/g-8-english.rar")
});
app.get("/english/exams/download", (req, res) => {
    res.download("./db/g-8-english-model.rar")
});




app.get("/maths", (req, res) => {
  res.render("index", { name: subject[2].name, content: subject[2].content, videos: subject[2].videos, books: subject[2].books, exams: subject[2].exams, videosLink: subject[2].videosLink, booksLink: subject[2].booksLink, examsLink: subject[2].examsLink });
});
app.get("/maths/videos", (req, res) => {
    res.render("videos", { title: subject[2].name, ytVidLink: subject[2].ytVidLink})
});
app.get("/maths/books", (req, res) => {
    res.render("books", { title: subject[2].name})
});
app.get("/maths/exams", (req, res) => {
    res.render("exams", { title: subject[2].name })
});
app.get("/maths/books/download", (req, res) => {
    res.download("./db/g-8-maths.rar")
});
app.get("/maths/exams/download", (req, res) => {
    res.download("./db/g-8-maths-model.rar")
});





app.get("/social", (req, res) => {
  res.render("index", { name: subject[3].name, content: subject[3].content, videos: subject[3].videos, books: subject[3].books, exams: subject[3].exams, videosLink: subject[3].videosLink, booksLink: subject[3].booksLink, examsLink: subject[3].examsLink });
});
app.get("/social/videos", (req, res) => {
    res.render("videos", { title: subject[3].name, ytVidLink: subject[3].ytVidLink})
});
app.get("/social/books", (req, res) => {
    res.render("books", { title: subject[3].name})
});
app.get("/social/exams", (req, res) => {
    res.render("exams", { title: subject[3].name })
});
app.get("/social/books/download", (req, res) => {
    res.download("./db/g-8-social.rar")
});
app.get("/social/exams/download", (req, res) => {
    res.download("./db/g-8-social-model.rar")
});



app.get("/gs", (req, res) => {
  res.render("index", { name: subject[4].name, content: subject[4].content, videos: subject[4].videos, books: subject[4].books, exams: subject[4].exams, videosLink: subject[4].videosLink, booksLink: subject[4].booksLink, examsLink: subject[4].examsLink });
});
app.get("/gs/videos", (req, res) => {
    res.render("videos", { title: subject[4].name, ytVidLink: subject[4].ytVidLink})
});
app.get("/gs/books", (req, res) => {
    res.render("books", { title: subject[4].name})
});
app.get("/gs/exams", (req, res) => {
    res.render("exams", { title: subject[4].name })
});
app.get("/gs/books/download", (req, res) => {
    res.download("./db/g-8-gs.rar")
});
app.get("/gs/exams/download", (req, res) => {
    res.download("./db/g-8-gs-model.rar")
});




app.get("/citizen", (req, res) => {
  res.render("index", { name: subject[5].name, content: subject[5].content, videos: subject[5].videos, books: subject[5].books, exams: subject[5].exams, videosLink: subject[5].videosLink, booksLink: subject[5].booksLink, examsLink: subject[5].examsLink });
});
app.get("/citizen/videos", (req, res) => {
    res.render("videos", { title: subject[5].name, ytVidLink: subject[5].ytVidLink})
});
app.get("/citizen/books", (req, res) => {
    res.render("books", { title: subject[5].name})
});
app.get("/citizen/exams", (req, res) => {
    res.render("exams", { title: subject[5].name })
});
app.get("/citizen/books/download", (req, res) => {
    res.download("./db/g-8-citizen.rar")
});
app.get("/citizen/exams/download", (req, res) => {
    res.download("./db/g-8-citizen-model.rar")
});





app.get("/", (req, res) => {
  res.render("home");
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
