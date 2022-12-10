const submitBtn = document.getElementById('submit-btn')
const modalEl = document.getElementById('modal')
const closeBtn = document.getElementById('close-btn')
const applicationForm = document.getElementById("application-form")
const modalText = document.getElementById("modal-text")


closeBtn.addEventListener("click", function(){
    modalEl.style.display = "none";
})

applicationForm.addEventListener("submit", function(e){
       e.preventDefault()

       const applicationFormData = new FormData(applicationForm)
        const firstName = applicationFormData.get('firstaName')

         setTimeout(function(){
            modalEl.style.display = "inline";
         }, 1500)

         setTimeout(function(){
             modalText.innerHTML = `<div>
                                      <h3>Thank you for your time</h3>
                                    </div>`
         }, 3000)
})