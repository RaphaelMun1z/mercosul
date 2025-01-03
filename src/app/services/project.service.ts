import { Injectable } from '@angular/core';
import data from '../db/data.json'

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    
    constructor() { }
    
    getAll(){
        return data.projects;
    }
    
    getProjectById(id: string | null){
        return data.projects.filter(project => project.id === id)[0];
    }
}
