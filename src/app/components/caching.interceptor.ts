import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {

  cacheMap = new Map<string, HttpResponse<any>>();

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.isRequestCacheable(request)) {
      const url = request.url.toLowerCase();
      if(this.cacheMap.has(url)) {
        const res =  this.cacheMap.get(url) as HttpResponse<any>;
        return of(res);
      }
      else {
        return next.handle(request).pipe(
          tap(event => {
            if (event instanceof HttpResponse) {
              this.cacheMap.set(url, event);
            }
          })
        )
      }

    }
    return next.handle(request);
  }

  private isRequestCacheable(request: HttpRequest<any>): boolean {
    if (request.method === 'GET') {
      return true;
    }
    return false;
  }
}
