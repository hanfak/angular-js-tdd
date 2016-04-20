describe('Todos tracker', function() {
  it('has a title', function() {
    // We don't need to put in the full url as we set baseUrl in our config
    browser.get('/');
    expect(browser.getTitle()).toEqual('Todos App');
  });
  it('has a todo', function() {
    browser.get('/');
    var todo = $('#todo');
    expect(todo.getText()).toContain('ToDo1');
  });
  it('has two todos', function(){
    browser.get('/');
    var todos = $$('#todo ul');
    expect(todos.first().getText()).toContain('ToDo1: not completed');
    expect(todos.last().getText()).toContain('ToDo3: completed');
  });

  it('can add a todo', function() {
    browser.get('/');
    var todo = $('#todo');
    var el = element(by.id('button'));
    var input = element(by.id('input'));
    input.sendKeys('toDo4');
    el.click('button');
    expect(todo.getText()).toContain('toDo4: not completed');
  });

  it('can remove a todo', function(){
    browser.get('/');
    var todo = $('#todo');
    var button = element(by.id('delete'));
    button.click('delete');
    expect(todo.getText()).not.toContain('ToDo3: not completed');
  });

});
