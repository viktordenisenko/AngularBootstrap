import { Component, OnInit } from '@angular/core';
import {ITask} from '../../interfaces/ITask';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public swallOptions = {
    title: 'Are you sure ?',
    showCancelButton: true,
    icon: 'error'

  }
  public firstName: string = "George";
  public lastName: string = "pago";
  public numbers: number[] = [1,2,3,4,5,6,7];
  public todos: ITask[] = [
    {
      _id: '1',
      completed: false,
      title: 'Learn Angular',
      dueDate: new Date('2019-11-28')

    },
    {
      _id: '2',
      completed: false,
      title: 'Learn JavaScript',
      dueDate: new Date('2019-11-28')
    },
    {
      _id: '3',
      completed: false,
      title: 'Learn Firebase',
      dueDate: new Date('2019-11-28')
    },
    {
      _id: '4',
      completed: false,
      title: 'Learn MongoDb',
      dueDate: new Date('2019-11-28')
    }

  ];

  constructor() { }

  get name() {

    return this.firstName + ' ' + this.lastName;
  }
  set name(value) {
   const parts = value.split(" ");
   this.firstName = parts[0];
   this.lastName = parts[1];
  }

  get filteredNumbers() {
    return this.numbers.filter(num => num > 4);
  }
  get completedTasks() {
    return this.todos.filter(task => task.completed === true);
  }
  get uncompletedTasks() {
    return this.todos.filter(task => task.completed === false);
  }

  ngOnInit() {
  }

  public removeTask(_id:string){
    const thesi = this.todos.findIndex(i=>i._id === _id);
    this.todos.splice(thesi,1);
  }

  public completeTask(task: ITask) {
    task.completed = true;
  }

}
