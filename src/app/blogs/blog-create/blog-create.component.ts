import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.scss']
})
export class BlogCreateComponent {
  enteredValue = '';
  newBlog = 'Nothing written';

  onAddBlog(blogInput: HTMLTextAreaElement) {
    console.dir(blogInput);
    this.newBlog = this.enteredValue;
  }
}
