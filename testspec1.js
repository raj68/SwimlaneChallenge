# SwimlaneChallenge
describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('http://todomvc.com/examples/angular2/');

    element(by.model('todoList.todoText')).sendKeys('Item 1');
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('Item 1');

  });
});
