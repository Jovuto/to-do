let toDoObjectList = [];

class toDoManager {

    static createToDo(title) {
        toDoObjectList.push(new toDo(title));
    }
    
}

class toDo {
    constructor(title, description, dueDate, priority, checklist) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = checklist;
    }
}

window.createToDo = toDoManager.createToDo;