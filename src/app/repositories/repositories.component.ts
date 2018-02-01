import { Component, OnInit } from '@angular/core';

import {RepoService} from './repositories.service.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})


export class RepositoriesComponent implements OnInit {

	repositories : any = [];

	repository : IRepository = {name: "", description: ""};
	newRepository : IRepository = {name:"", description:""};

  constructor(private repoService : RepoService) { }

  ngOnInit() {

  	this.repoService.getRepos().subscribe((data) =>{
  		this.repositories = data.json();

  		this.repository = this.repositories[0];
  		console.log(data.json());
  	})
  /*	this.repository = {name: "Angular code for CF", description:"Proyecto demo de CF"};

  	setTimeout(()=>{
  	this.repositories = [
  		{name: "Angular code for CF", description:"Proyecto demo de CF"},
  		{name: "Bootstrap", description:"Frontend Framework"},
  		{name: "PHP Ecommerce", description:"Codigo del curso Ecommerce"},
  		{name: "Ruby code", description:"Codigo con los ejemplo de cu"}

  			];

  		}, 2000); */
	}
	setMainRepository(repository){
		this.repository = repository;
	}

	addNewRepo(){
		this.repositories.unshift(this.newRepository);
		this.newRepository = {name:"", description:""};
	}
}


interface IRepository{
	name : string,
	description : string
}
