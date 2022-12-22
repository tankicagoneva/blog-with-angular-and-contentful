import { Observable } from 'rxjs';
import { ContentfulService } from './../services/contentful.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Document } from '@contentful/rich-text-types';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
})
export class BlogPostComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private ContentfulService: ContentfulService
  ) {}

  _returnHtmlFromRichText(richText: Document | null | undefined) {
    if (
      richText === undefined ||
      richText === null ||
      richText.nodeType !== 'document'
    ) {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
  }

  blogPost$: Observable<any> | undefined;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      this.blogPost$ = this.ContentfulService.getEntryById(id);
    });
  }
}
