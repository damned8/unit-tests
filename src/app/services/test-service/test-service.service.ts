import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable()
export class TestServiceService {
  readonly api = 'https://jsonplaceholder.typicode.com/posts/1';
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.api);
  }

  getOne(): Observable<Post> {
    return this.httpClient.get<Post>(this.api);
  }

  create(prop: Post): Observable<Post> {
    return this.httpClient.post<Post>(this.api, prop);
  }

  update(prop: Post): Observable<Post> {
    return this.httpClient.put<Post>(this.api, prop);
  }

  delete(prop: Post): Observable<Post> {
    return this.httpClient.delete<Post>(this.api);
  }
}
