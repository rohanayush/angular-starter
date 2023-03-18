import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  title = 'Gallery';
  galleryImages$: Observable<string[]> | undefined;

  constructor(private gallerService: GalleryService) {}

  ngOnInit() {
    this.galleryImages$ = this.gallerService.dogImages$;
  }
}
