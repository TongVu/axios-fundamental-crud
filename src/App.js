import axios from "axios";
import "./App.css";

function App() {
  const PREFIX = "http://";

  async function getFromBackEndApi() {
    try {
      const allBooks = await axios.get(`${PREFIX}localhost:8080/api/ebooks`);
      console.log(allBooks.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneEbookById() {
    const ebookId = document.querySelector("#getOneBookId").value;

    try {
      const book = await axios.get(
        `${PREFIX}localhost:8080/api/ebooks/${ebookId}`
      );
      console.log(book);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateEbookById() {
    const ebookId = document.querySelector("#bookId").value;
    const ebookTitle = document.querySelector("#bookTitle").value;
    const ebookPage = document.querySelector("#bookPage").value;
    const ebookRating = document.querySelector("#bookRating").value;
    const ebookPublisherId = document.querySelector("#bookPublisher").value;

    try {
      axios.put(`${PREFIX}localhost:8080/api/ebooks/${ebookId}`, {
        title: ebookTitle,
        page: ebookPage,
        rating: ebookRating,
        purchased: false,
        viewLinkStatus: "fakelink",
        introduction: "ebook",
        publisherName: "Drawn and Quarterly",
        publisherEmail: "drawnandquarterly@gmail.com",
        publisherId: ebookPublisherId,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function createEbook() {
    const title = document.querySelector("#postBookTitle").value;

    const page = document.querySelector("#postBookPage").value;
    const rating = document.querySelector("#postBookRating").value;
    const intro = document.querySelector("#postBookIntro").value;
    const publisherId = document.querySelector("#postBookPublisher").value;

    try {
      axios.post(`${PREFIX}localhost:8080/api/ebooks`, {
        title: title,
        page: page,
        rating: rating,
        introduction: intro,
        purchased: false,
        viewLinkStatus: "fakelink",
        publisherId: publisherId,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteBook() {
    const bookId = document.querySelector("#deleteBookId").value;

    try {
      axios.delete(`${PREFIX}localhost:8080/api/ebooks/${bookId}`);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="App" id="page">
      {/* GET ALL */}
      <h1>Hello world</h1>
      <button onClick={getFromBackEndApi}>Get All Books Information</button>

      {/* GET BY ID */}
      <h1> Get Ebook by id </h1>
      <label htmlFor="getOneBookId">Book id</label>
      <input id="getOneBookId" placeholder="book id" />
      <button type="submit" onClick={getOneEbookById}>
        GET
      </button>

      {/* PUT */}
      <h1>Update Ebook</h1>
      <label htmlFor="bookId">Book id</label>
      <input id="bookId" placeholder="book id" />

      <label htmlFor="bookTitle">Book title</label>
      <input id="bookTitle" placeholder="Book title" />

      <label htmlFor="bookPage">Page</label>
      <input id="bookPage" placeholder="Page" />

      <label htmlFor="bookRating">Rating</label>
      <input id="bookRating" placeholder="Rating" />

      <label htmlFor="bookPublisher">Publisher Id</label>
      <input id="bookPublisher" placeholder="Publisher id" />

      <button type="submit" onClick={updateEbookById}>
        DONE
      </button>

      {/* POST */}
      <h1>POST Ebook</h1>
      <label htmlFor="postBookTitle">Book Title</label>
      <input id="postBookTitle" placeholder="Book title" />

      <label htmlFor="postBookPage">Page</label>
      <input id="postBookPage" placeholder="Page" />

      <label htmlFor="postBookRating">Rating</label>
      <input id="postBookRating" placeholder="Rating" />

      <label htmlFor="postBookIntro">Intro</label>
      <input id="postBookIntro" placeholder="Book intro" />

      <label htmlFor="postBookPublisher">Publisher id</label>
      <input id="postBookPublisher" placeholder="Publisher id" />

      <button type="submit" onClick={createEbook}>
        POST
      </button>

      {/* DELETE */}
      <h1>DELETE Ebook</h1>
      <label htmlFor="deleteBookId">Deleted Ebook</label>
      <input id="deleteBookId" placeholder="Enter book id" />

      <button type="submit" onClick={deleteBook}>
        DELETE
      </button>
    </div>
  );
}

export default App;
