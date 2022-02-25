async function GetSubjectsData(subject,book,paper){
      
  let pagediv = document.getElementById("page");
       pagediv.innerHTML = ``;
    for (k of subject){
      
        requestURL = "https://apymaterial.github.io/Gtu-Material/" + k + ".json";
        request = new Request(requestURL);
        response = await fetch(request);
        if (response.status == "200"){
        SubjectData = await response.json();
      
     
      if(paper == true){
        pagediv.innerHTML += `
          <div class=" border-2 border-gray-700 rounded-lg shadow-inner-lg mt-2 mb-2">
      <div class="  subject_name p-2 align-center  text-white text-center font-revert font-semibold text-lg ">
          <h3 title="` + SubjectData["subject_name"] + `(` + SubjectData["subjecet_code"] + `)` + `" class="mt-2 mb-2  text-white text-center  font-semibold text-lg">` + SubjectData["subject_name"] + `(` + SubjectData["subjecet_code"] + `)` + `</h3>
      </div> 
      <div class="container mx-auto pb-2 ">
          <div class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1	" id="` + k + `"> </div>
      </div>
                `;    
      
      getSubjectPapers(SubjectData["old_paper"], k);
    }
    else if(book =true){
      if (response.status == "200"){
            
                
        pagediv.innerHTML += 
                    `
          <div class=" p-2 align-center bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white text-center font-revert font-semibold text-lg rounded mb-3">
              <h3 title="` + SubjectData["subject_name"] + `(` + SubjectData["subjecet_code"] + `)` + `" class="mt-2 mb-2  text-white text-center font-revert font-semibold text-lg">` + SubjectData["subject_name"] + `(` + SubjectData["subjecet_code"] + `)` + `</h3>
          </div> 
          <div class="container mx-auto">
              <div class="flex flex-wrap -mx-2 overflow-hidden sm:-mx-3 md:-mx-2 lg:-mx-2 xl:-mx-1 all_books justify-center	" id="` + k + `"> </div>
          </div>
                    `;

                getSubjectBooks(SubjectData["Books"], k);

                }
            else{
                continue;
            }

    }
  }
  }
}
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
function getSubjectPapers(all_papers, subject_code) {
  
    let PaperSection = document.getElementById(subject_code);
    
    if(all_papers.length > 0){
      
      for(let i of all_papers){
        
        PaperSection.innerHTML += `
        <div class="my-1 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/4 lg:my-1 lg:px-1 lg:w-1/5 xl:my-1 xl:px-1 xl:w-1/5 ">
         <div class="  pt-2 ">
                    <a target="_blank" href="` + i["link"] + `" class="old-paper-btn btn shadow-md btn-outline-dark  w-100">`+ i["year"] +`</a>
                </div>
        </div>
        </div>
        `;
        
      }
    }else {
    
    PaperSection.innerHTML += `
        <div class="">
         <div class=" align-center  pt-2 ">
                    <p>No Papers Avaliable</p>
                </div>
        </div>
        </div>
        `;
    }
  }
  