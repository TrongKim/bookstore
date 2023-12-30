import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IBook } from 'src/app/model/book.model';
import { SubSink } from 'subsink';
import { ProductService } from './product-list.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AlertDynamicService } from 'src/app/view/share/alert-dynamic/alert-dynamic.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {

  constructor(protected afs: AngularFireStorage, protected ps: ProductService, protected ads: AlertDynamicService) { }

  search_control = new FormControl('', [Validators.required]);

  books: IBook[] = [];

  product_form = new FormGroup({
    name: new FormControl('', Validators.required),
    genres: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.required),
    description: new FormControl('', Validators.required),
    pages: new FormControl(0, Validators.required),
    length: new FormControl(0, Validators.required),
    publisher: new FormControl('', Validators.required),
    language: new FormControl('', Validators.required),
    isbn_10: new FormControl('', Validators.required),
    dimensions: new FormControl('', Validators.required),
    who_like: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    about_author: new FormControl('', Validators.required),
    amount: new FormControl(0, Validators.required),
  });

  protected files: FileList | null = null;

  isShowDialogAddBook: boolean = false;

  isAddBook: boolean = true;

  protected isEditMode: {
    id: string;
    state: boolean;
  } | null = null;

  protected subs = new SubSink();

  ngOnInit(): void {
    this.getBooks();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    window.scrollTo(0, 0);
  }

  getBooks(): void {
    this.subs.add(this.ps.getAllBook().subscribe(books => this.books = books));
  }

  enterEventSearchProduct(): void {
    this.subs.add(this.ps.searchBook(this.search_control.value || '').subscribe(books => this.books = books));
  }

  clickEventShowAddProduct(): void {
    this.isShowDialogAddBook = true;
    this.isAddBook = true;
  }

  clickEventClosePopup(): void {
    this.isShowDialogAddBook = false;
  }

  changeEventUploadImage(event: Event) {
    const input_element = event.target as HTMLInputElement;
    if (!input_element) return;
    if (!input_element.files) return;
    this.files = input_element.files;
  }

  clickEventEditBook(book: IBook): void {
    this.isShowDialogAddBook = true;
    this.isEditMode = {
      state: true,
      id: book.id
    };
    this.isAddBook = false;
    this.product_form.setValue({
      name: book.name,
      genres: book.genres,
      price: book.price,
      description: book.description,
      pages: book.pages,
      length: book.length,
      publisher: book.publisher,
      language: book.language,
      isbn_10: book.isbn_10,
      dimensions: book.dimensions,
      who_like: book.who_like,
      message: book.message,
      about_author: book.about_author,
      amount: book.amount,
    });
  }

  async clickEventCreateBook() {
    if (!this.product_form.valid) {
      this.ads.alert({
        title: 'Valid Form Data',
        message: 'Some input is wrong',
        state: 'error'
      });
      return;
    }
    const url = await this.handleFile();
    if (!url) {
      this.ads.alert({
        title: 'Valid Form Data',
        message: 'Not contain image',
        state: 'error'
      });
      return;
    }
    if (this.isEditMode?.state) {
      this.subs.add(this.ps.updateBook({
        id: this.isEditMode.id || '',
        name: this.product_form.value.name || '',
        genres: this.product_form.value.genres || '',
        price: this.product_form.value.price || 0,
        description: this.product_form.value.description || '',
        pages: this.product_form.value.pages || 0,
        length: this.product_form.value.length || 0,
        publisher: this.product_form.value.publisher || '',
        language: this.product_form.value.language || '',
        isbn_10: this.product_form.value.isbn_10 || '',
        dimensions: this.product_form.value.dimensions || '',
        who_like: this.product_form.value.who_like || '',
        message: this.product_form.value.message || '',
        about_author: this.product_form.value.about_author || '',
        amount: this.product_form.value.amount || 0,
        images: url
      }).subscribe(state => {
        if(state) {
          this.isShowDialogAddBook = false;
          this.ads.alert({
            title: 'Update Book Success',
            message: 'Update book successfully',
            state: 'success'
          });
          let bookUpdate = this.books.find(book => book.id === (this.isEditMode?.id || ''));
          if (!bookUpdate) return;
          bookUpdate = {
            ...bookUpdate,
            name: this.product_form.value.name || '',
            genres: this.product_form.value.genres || '',
            price: this.product_form.value.price || 0,
            description: this.product_form.value.description || '',
            pages: this.product_form.value.pages || 0,
            length: this.product_form.value.length || 0,
            publisher: this.product_form.value.publisher || '',
            language: this.product_form.value.language || '',
            isbn_10: this.product_form.value.isbn_10 || '',
            dimensions: this.product_form.value.dimensions || '',
            who_like: this.product_form.value.who_like || '',
            message: this.product_form.value.message || '',
            about_author: this.product_form.value.about_author || '',
            amount: this.product_form.value.amount || 0,
            images: url
          };
          this.books = this.books.filter(book => book.id !== bookUpdate?.id);
          this.books = [...this.books, bookUpdate];
          this.product_form.patchValue({});
        }
      }));
    }
    this.subs.add(this.ps.createBook({
      name: this.product_form.value.name || '',
      genres: this.product_form.value.genres || '',
      price: this.product_form.value.price || 0,
      description: this.product_form.value.description || '',
      pages: this.product_form.value.pages || 0,
      length: this.product_form.value.length || 0,
      publisher: this.product_form.value.publisher || '',
      language: this.product_form.value.language || '',
      isbn_10: this.product_form.value.isbn_10 || '',
      dimensions: this.product_form.value.dimensions || '',
      who_like: this.product_form.value.who_like || '',
      message: this.product_form.value.message || '',
      about_author: this.product_form.value.about_author || '',
      amount: this.product_form.value.amount || 0,
      images: url
    }).subscribe(state => {
      if(state) {
        this.isShowDialogAddBook = false;
        this.product_form.patchValue({});
        this.ads.alert({
          title: 'Add Book Success',
          message: 'Create book successfully',
          state: 'success'
        });
      }
    }));
  }

  async handleFile(): Promise<string | null> {
    if (!this.files) return null;
    const file = this.files[0];
    if (!file) return null;
    const test = await this.afs.upload("files/"+file.name + new Date().toUTCString(), file);
    const url = await test.ref.getDownloadURL();
    return url;
  }
}
