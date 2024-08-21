/*
 * membuat link bisa dicopy
 */

const actionLink = document.querySelectorAll(".card-link .action-link");

console.log("actionLink : ", actionLink);

actionLink.forEach((action) => {
  action.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(action.parentElement.getAttribute("href"));

    /*
     * memunculkan toast notification
     */
    document.getElementById("toast").innerHTML = `
    <div class="toast-container">
          <p>👌Link <strong>${action.parentElement.innerText}</strong> telah disalin!</p>
        </div>
    `;

    /*
     * menghilangkan toast notification
     */
    setTimeout(() => {
      document
        .querySelector("#toast .toast-container")
        .classList.add("toast-gone");
    }, 300);

    setTimeout(() => {
      document.querySelector("#toast .toast-container").remove();
    }, 2000);
  });
});

/*
 * Ganti icon sosmed saat hover
 */

document.querySelectorAll(".socmed i").forEach((socmed) => {
  socmed.addEventListener("mouseenter", (e) => {
    socmed.classList.remove("ph");
    socmed.classList.add("ph-fill");
  });

  socmed.addEventListener("mouseleave", (e) => {
    socmed.classList.remove("ph-fill");
    socmed.classList.add("ph");
  });
});
