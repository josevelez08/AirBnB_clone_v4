const d = document;

const dictAdd = {};
$(() => {
	$(d).on("click", "input[type=checkbox]", function () {
		// console.log(this)
		// console.log(this.checked)
		if (this.checked) {
			// console.log("segundo this", this.dataset)
			dictAdd[this.dataset.id] = this.dataset.name;
			// console.log("dict =", dictAdd);
		} else {
			delete dictAdd[this.dataset.id];
			// console.log("dict =", dictAdd);
		}
		$(".amenities h4").text(Object.values(dictAdd).join(", "));
	});
});

$(() => {
	// cambiar por http://0.0.0.0:5001/api/v1/status/
	$.get("http://localhost:5001/api/v1/status/", function (data) {
		console.log("data =", data)
		// console.log(d)
		$get_id = d.getElementById("api_status");
		// console.log($get_id);
		if (data.status === "OK") {
      $get_id.classList.add("available");
			// console.log("Entre");
		} else {
      $get_id.classList.remove("available");
    }
	});
});
