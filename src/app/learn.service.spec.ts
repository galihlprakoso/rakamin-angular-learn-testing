import { TestBed } from '@angular/core/testing';

import { LearnService } from './learn.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

describe('LearnService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: LearnService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new LearnService(httpClientSpy)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();    
  });

  it('should return expected value', (done: DoneFn) => {
    const mockData = {
      "id": 15,
      "username": "kminchelle",
      "email": "kminchelle@qq.com",
      "firstName": "Jeanne",
      "lastName": "Halvorson",
      "gender": "female",
      "image": "https://robohash.org/Jeanne.png?set=set4",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvSmVhbm5lLnBuZz9zZXQ9c2V0NCIsImlhdCI6MTcxNDAzMDE5MywiZXhwIjoxNzE0MDMwNDkzfQ.O5EU7ShJkMnh5UCJc5ifiGer7-0J8acdH5yqSMAUXzQ"
    }

    httpClientSpy.post.and.returnValue(of(mockData))

    service.login(
      'username',
      'password'
    ).subscribe({
      next: (data) => {
        expect(data).toBe(mockData)
        done()
      },
      error: done.fail,
    })
  })

  it('should return error', (done: DoneFn) => {
    service.login(
      '',
      ''
    ).subscribe({
      next: (res) => {
        expect(0).toBe(1)
      },
      error: (err) => {
        expect(err).toBeTruthy()
        done()
      },
    })
  })
});
