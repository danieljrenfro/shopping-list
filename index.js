function main() {

  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();

    let itemName = $('#shopping-list-entry').val();
    let listItem = `<li>
    <span class="shopping-item">${itemName}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
    </li>`;

    $('.shopping-list').append(listItem);
  })

  $('ul').on('click', '.shopping-item-delete', function(event) {
    console.log('event', event);
    console.log(event.target);
    console.log(this);
    event.stopPropagation();
    this.closest('li').remove();
  })

  $('ul').on('click', '.shopping-item-toggle', function(event) {
    event.stopPropagation();
    console.log($(this));
    $(this.closest('li').children[0]).toggleClass('shopping-item__checked');
  })

}

$(main);