import { useParams } from "react-router-dom";

function BookPage() {

  const { id } = useParams();

  return (
    <div>
      <h1>Book Page</h1>
      <p>Book ID: {id}</p>
    </div>
  );
}

export default BookPage;