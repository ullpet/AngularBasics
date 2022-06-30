import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface Data {
    userId?: number
    id?: number
    title: string
    completed: boolean
  }

@Injectable({providedIn: 'root'})
export class HttpService {
    constructor(private http: HttpClient) {

    }

    onGet(): Observable<Data[]> {
        return this.http.get<Data[]>('https://jsonplaceholder.typicode.com/todos?_limit=3')
    }

    onAdd(userPost: Data): Observable<Data> {
        return this.http.post<Data>('https://jsonplaceholder.typicode.com/todos?_limit=2', userPost)
    }

    onChange(id: number): Observable<Data> {
        return this.http.put<Data>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            completed: true
        })
    }
}
