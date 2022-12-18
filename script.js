const ratingButton = document.querySelectorAll("[data-rating]");
const submitButton = document.querySelector("[data-submit]");
const content = document.querySelector(".card__content");
const message = document.querySelector(".card__thankyou");
const errorMessage = content.querySelector(".error-message");
const returnButton = message.querySelector(".return-btn");

ratingButton.forEach(button => {
	button.addEventListener("click", function () {
		const selectedRating = document.querySelector(".selected");
		const ratingValue = this.dataset.rating;
		const ValueOutput = document.querySelector(".result");

		if (selectedRating && selectedRating !== this) {
			selectedRating.classList.remove("selected");
		}
		this.classList.toggle("selected");

		if (!button.classList.contains("selected")) {
		} else {
			ValueOutput.innerHTML = ratingValue;
			errorMessage.classList.add("hidden");
		}

		submitButton.addEventListener("click", () => {
			if (!button.classList.contains("selected")) {
				errorMessage.classList.remove("hidden");
			} else {
				message.classList.add("show");
				content.classList.add("hide");
				errorMessage.classList.add("hidden");
			}
		});
		returnButton.addEventListener("click", () => {
			button.classList.remove("selected");
			errorMessage.classList.add("hidden");
			message.classList.remove("show");
			setTimeout(() => {
				content.classList.remove("hide");
			}, 250);
		});
	});
});

function mouseDown() {
	ratingButton.style.transform = "scale(0.9)";
}
