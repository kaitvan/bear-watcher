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
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`)
}

export { addBearForm }