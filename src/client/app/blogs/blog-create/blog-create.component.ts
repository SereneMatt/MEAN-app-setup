import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.scss']
})
export class BlogCreateComponent {
  postForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService) {
    this.createForm();
  }

  createForm() {
    this.postForm = this.fb.group({
      title: ['', Validators.required ],
      content: ['', Validators.required ],
      time: ['', Validators.required ]
    });
  }

  onCreate() {
    this.blogService.postBlog(this.postForm.value);
  }
}
