const d = document;

const dictAdd = {};
$(() => {
  $(d).on('click', 'input[type=checkbox]', function () {
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
    $('.amenities h4').text(Object.values(dictAdd).join(', '));
  });
});
