import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DetailProductService } from './detail-product.service';
import { ActivatedRoute } from '@angular/router';
import { IBook, IBookInCartCookie } from 'src/app/model/book.model';
import { SubSink } from 'subsink';
import { CookieUtils } from 'src/app/utils/cookie.utils';
import { AlertDynamicService } from 'src/app/view/share/alert-dynamic/alert-dynamic.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss'],
  providers: [DetailProductService]
})
export class DetailProductComponent implements OnInit {
  @ViewChild('amount_product_element', { static: false })
    amount_product_element_ref: ElementRef | null = null;
  constructor(
    protected dps: DetailProductService,
    protected ar: ActivatedRoute,
    protected ads: AlertDynamicService
  ) { }

  detail_book: IBook | null = null;

  protected subs = new SubSink();

  test(): void {
    alert(1);
  }

  ngOnInit(): void {
    this.getDetailBook();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    window.scrollTo(0, 0);
  }

  getDetailBook(): void {
    const queryParamValue = this.ar.snapshot.queryParams['query'];

    this.subs.add(this.dps.getBookDetail(queryParamValue).subscribe(book => this.detail_book = book));
  }

  clickEventAddToCart(): void {
    let raw_products = CookieUtils.getCookieProductInCart();
    const input_field_element = this.amount_product_element_ref?.nativeElement as HTMLDivElement;
    if (!input_field_element) return;
    const amount = Number(input_field_element.textContent);
    if (raw_products.trim().length === 0) {
      CookieUtils.setCookieProductToCart(JSON.stringify([{
        id: this.detail_book?.id,
        total: amount
      }]), new Date(2099, 0 ,0).toUTCString());
      return;
    }
    const products: IBookInCartCookie[] = JSON.parse(CookieUtils.getCookieProductInCart()) as IBookInCartCookie[];
    for(let product of products) {
      if (product.id === (this.detail_book?.id || '')) return;
    }
    products.push({
      id: this.detail_book?.id || '',
      total: amount
    });
    CookieUtils.setCookieProductToCart(JSON.stringify(products), new Date(2099, 0 ,0).toUTCString());
    this.ads.addCart({
      id: this.detail_book?.id || '',
      total: amount
    });
  }

}
