import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap, throwError } from 'rxjs';

type AuthResponse = {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class LearnService {

  private baseUrl = 'https://dummyjson.com'

  constructor(private http: HttpClient) {}

  login(
    username: string | undefined | null,
    password: string | undefined | null
  ) {
    if (!username || !password) {
      return throwError(() => {
        return new Error("Username and password can't be null")
      })
    }

    return this.http.post<AuthResponse>(`${this.baseUrl}/auth/login`, {
      username,
      password,
      expiresInMins: 5,
    }).pipe(
      tap(res => {
        localStorage.setItem('token', res.token)
      })
    )
  }
}
