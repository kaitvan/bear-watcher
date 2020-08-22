const addBearCard = (array) => {
    $('#bear-cards').html('');
    array.forEach((bear) => {
        $('#bear-cards').append(`
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${bear.bearImage}" alt="${bear.bearName}">
            <div class="card-body">
                <p class="card-text">${bear.bearName}</p>
            </div>
        </div>
        `)
    })
}

export { addBearCard }