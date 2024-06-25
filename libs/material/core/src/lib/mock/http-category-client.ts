import { of } from 'rxjs';
import { getBuiltinCategories } from '@webpackages/data';
import { Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class MockHttpCategoryClient {
  get(queryPath: string) {
    const search = queryPath.split('=')[1].split('&')[0];
    return of(
      getBuiltinCategories()
        .filter((e) => {
          return e.name.toLowerCase().includes(search?.toLowerCase() || '');
        })
        .slice(0, 10)
    );
  }
}

export function provideMockCategoryHttpClient(): Provider {
  return {
    provide: HttpClient,
    useClass: MockHttpCategoryClient,
  };
}
