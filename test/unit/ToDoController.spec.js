describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initialises with a toDo', function() {
    expect(ctrl.toDos).toContain({text: 'ToDo1', completed: false});
  });

  it('can add toDo', function() {
    ctrl.add('ToDo4');
    expect(ctrl.toDos).toContain({text: 'ToDo4', completed: false});
  });

  it('can delete a toDo', function(){
    ctrl.delete();
    expect(ctrl.toDos).not.toContain({text: 'ToDo3', completed: false});
  });

});
