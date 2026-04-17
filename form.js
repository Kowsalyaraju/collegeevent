document.addEventListener("DOMContentLoaded", () => {
	const soloBtn = document.getElementById("soloBtn");
	const groupBtn = document.getElementById("groupBtn");
	const soloDetails = document.getElementById("soloDetails");
	const groupDetails = document.getElementById("groupDetails");
	const numMembersInput = document.getElementById("numMembers");
	const membersContainer = document.getElementById("membersContainer");
	const form = document.getElementById("registrationForm");

	if (!soloBtn || !groupBtn || !soloDetails || !groupDetails || !numMembersInput || !membersContainer || !form) {
		return;
	}

	const setMode = (isSolo) => {
		soloBtn.classList.toggle("active", isSolo);
		groupBtn.classList.toggle("active", !isSolo);
		soloDetails.classList.toggle("hidden", !isSolo);
		groupDetails.classList.toggle("hidden", isSolo);
	};

	const renderMembers = (count) => {
		membersContainer.innerHTML = "";

		for (let i = 2; i <= count; i++) {
			membersContainer.insertAdjacentHTML("beforeend", `
				<div class="team-member">
					<h4>Participant ${i}</h4>
					<div class="input-group"><label>Name *</label><input type="text" placeholder="Enter name" required></div>
					<div class="input-group"><label>Phone No *</label><input type="tel" placeholder="Enter phone number" required></div>
					<div class="input-group"><label>Email Address *</label><input type="email" placeholder="Enter email address" required></div>
				</div>
			`);
		}
	};

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		alert("Registration form submitted.");
	});

	soloBtn.addEventListener("click", () => {
		setMode(true);
	});

	groupBtn.addEventListener("click", () => {
		setMode(false);
	});

	numMembersInput.addEventListener("input", (e) => {
		renderMembers(Math.min(parseInt(e.target.value, 10) || 0, 20));
	});

	setMode(true);
});
