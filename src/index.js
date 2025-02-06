let toDoObjectList = [];
let completedToDos = [];

class toDoManager {

    static createToDo(title) {
        toDoObjectList.push(new toDo(title));
    }

    static setComplete(number) {
        toDoObjectList[number].complete = true;
        completedToDos.push(toDoObjectList[number]);
        toDoObjectList.splice(number, 1);
    }
    
}

class toDo {
    constructor(title, description, dueDate, priority, checklist) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = checklist;
        this.complete = false;
    }
}

window.createToDo = toDoManager.createToDo;