$(function() {
  var now_drag_object = null;

  $('.cardDetail_link').draggable({
    revert: "invalid",
    start: function() {
      now_drag_object = $(this);
    },
    stop: function(event, ui) {
      // create_contents();
      now_drag_object = null;
    }
  });

  $('.list').droppable({
    classes: {
      "ui-droppable-hover": "ui-state-hover"
    },
    accept: '.cardDetail_link',
    drop: function(event, ui) {
      const id = $(this).data("id");
      console.log(id);
      console.log(now_drag_object);
    }
  });
});
