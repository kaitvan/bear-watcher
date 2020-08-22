let bears = [];

const addBearForm = () => {
    $('#bear-form').html(`
    <form>
  <div class="form-group">
    <label for="bear-image">Image URL:</label>
    <input type="url" class="form-control" id="bear-image" placeholder="Enter image URL.">
  </div>
  <div class="form-group">
    <label for="bear-name">Bear Name:</label>
    <input type="text" class="form-control" id="bear-name" placeholder="Choose a name for your bear.">
  </div>
  <button type="button" id="submit-button" class="btn btn-primary">Submit</button>
</form>`)
};

const clearForm = () => {
  $('#bear-image').val('');
  $('#bear-name').val('');
}

const addBearInfo = () => {

  $('#submit-button').click(() => {
    const bearImage = $('#bear-image').val();
    const bearName = $('#bear-name').val();

    bears.push({
      bearImage: bearImage,
      bearName: bearName
    })

    console.log(bears);
    clearForm();
  })
  
}

export { addBearForm, addBearInfo }