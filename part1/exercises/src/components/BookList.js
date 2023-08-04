export default function BookList() {
   let pageTitle = "books i have read in the past 6 months";
   let book1 = "https://languagetrainers.com/reviews/book-reviews/uploads/5679-madame%20bovary%20cover.jpg";
   let book2 = "https://m.media-amazon.com/images/I/51v+v2L6aJL.jpg";
   let book3 = "https://m.media-amazon.com/images/I/51Z6haCcnQL.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="madame bovary" />
         <img src={book2} alt="the collected works of william blake" />
         <img src={book3} alt="the alcoholics anonymous big book" />
      </div>      
   );
}