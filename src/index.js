let toDoObjectList = [];
let completedToDos = [];
const priorities = ["low", "medium", "high"];

class toDoManager {

    static createToDo(title) {
        toDoObjectList.push(new toDo(title));
    }

    static setComplete(number) {
        toDoObjectList[number].complete = true;
        completedToDos.push(toDoObjectList[number]);
        toDoObjectList.splice(number, 1);
    }

    static changeDescription(number, description) {
        toDoObjectList[number].description = description;
    }

    static changePriority(toDoNumber, priorityNumber) {
        toDoObjectList[toDoNumber].priority = priorities[priorityNumber];
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