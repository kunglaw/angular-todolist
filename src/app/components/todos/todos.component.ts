import { Component, OnInit } from '@angular/core';
import { Todo } from "../../models/Todo"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {

  todos:Todo[] = []

  constructor() { 
    
  }

  ngOnInit(): void {
    console.log(this," todos work ")

    this.todos = [
      {
        id:1,
        title: "Todo One",
        completed: false
      },
      {
        id:2,
        title: "Todo Two",
        completed: false
      },
      {
        id:1,
        title: "Todo Three",
        completed: false
      },
    ]

  }

}
