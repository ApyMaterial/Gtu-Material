function getSubjectBooks(all_books, subject_code) {
  let BookSection = document.getElementById(subject_code);

  if (all_books.length > 0) {
    for (let i of all_books) {
      BookSection.innerHTML +=
        `
<div class="my-2 px-2 w-1/2 overflow-hidden sm:my-3 sm:px-3 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3">
  <div class=" justify-center item">
        <div class="inline-block shadow-inner shadow-blue rounded-xl">
            <div class="m-2">
                <img  class="book-img shadow-md shadow-black p-2 rounded-xl rounded-2xl"
                    src="` +
        i["img"] +
        `" alt="` +
        i["alt_data"] +
        `" />
            </div>
            <div class=" pt-2 m-2">
                <a target="_blank" href="` +
        i["download_link"] +
        `" class="btn shadow-md btn-outline-dark  w-100">Download</a>
            </div>
        </div>
    </div>
</div>
`;
    }
  } else {
    BookSection.innerHTML += `
<div class="my-2 px-2 w-1/2 overflow-hidden sm:my-3 sm:px-3 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3">
  <div class=" justify-center item">
        
            <h3>No Data Avaliable</h3>                
        
    </div>
</div>
`;
  }
}
