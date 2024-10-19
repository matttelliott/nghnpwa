import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { switchMap, zip } from 'rxjs';

@Component({
  selector: 'app-stories-list',
  standalone: true,
  imports: [],
  templateUrl: './stories-list.component.html',
  styleUrl: './stories-list.component.scss',
})
export class StoriesListComponent {
  constructor(private readonly http: HttpClient) {}

  private readonly storyIds$ = this.http.get(
    'https://hacker-news.firebaseio.com/v0/topstories.json',
  );

  private readonly stories$ = this.storyIds$.pipe(
    switchMap((storyIds) =>
      zip(
        storyIds.map((storyId) =>
          this.http.get(
            `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`,
          ),
        ),
      ),
    ),
  );

  log = this.stories$.subscribe((x) => console.log(x));
}
