const cv=document.querySelector(".cv-button")
cv.addEventListener("click",()=>{
    const link = document.createElement('a');
    link.href = 'data/Pushkar_resume.pdf'; // Make sure this matches your file path
    link.download = 'PushkarGurjar_CV.pdf'; // Rename during download if needed
    link.click();
})









