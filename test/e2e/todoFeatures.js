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
    var todo = $('#todo');
    expect(todo.getText()).toContain('completed');
    expect(todo.getText()).toContain('not completed');
  });


});
