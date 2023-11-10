  
  async function GetSingleSubjectsData(subjectCode) {
    requestURL = "https://apymaterial.github.io/Gtu-Material/" + subjectCode + ".json";
    request = new Request(requestURL);
    response = await fetch(request);
    if (response.status == "200") {
      SubjectData = await response.json();
      console.log(SubjectData.old_paper.length);
        alert("All Things Works Fine");
    }
  }

  export default GetSingleSubjectsData ;