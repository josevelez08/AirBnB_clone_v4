const d = document;

const dictAdd = {};
$(() => {
	$(d).on("click", "input[type=checkbox]", function () {
		this.checked
			? (dictAdd[this.dataset.id] = this.dataset.name)
			: delete dictAdd[this.dataset.id];
		$(".amenities h4").text(Object.values(dictAdd).join(", "));
	});
});

$(() => {
	// cambiar por http://0.0.0.0:5001/api/v1/status/
	$.get("http://localhost:5001/api/v1/status/", function (data) {
		$queryId = d.getElementById("api_status");
		data.status === "OK"
			? $queryId.classList.add("available")
			: $queryId.classList.remove("available");
	});
});
