import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  constructor() {}

  private client = createClient({
    space: environment.spaceId as string,
    accessToken: environment.accessToken as string,
  });

  getAllEntries() {
    const promise = this.client.getEntries();
    return from(promise);
  }

  getEntryById(id: string) {
    const promise = this.client.getEntry(id);
    return from(promise);
  }
}
