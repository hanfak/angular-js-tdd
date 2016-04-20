toDoApp.controller('ToDoController', [function(){
  var self = this;
  self.toDos = [{text: 'ToDo1', completed: false},
               {text: 'ToDo2', completed: true},
               {text: 'ToDo3', completed: true}];

  self.add = function(toDo) {
    self.toDos.push({text: toDo, completed: false});
  };

  self.delete = function(){
    self.toDos.pop();
  };
}]);
