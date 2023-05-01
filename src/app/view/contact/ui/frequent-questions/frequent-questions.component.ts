import { Component, OnInit } from '@angular/core';
import { IQuestion } from 'src/app/model/contact/frequent.model';
import { SubSink } from 'subsink';
import { FrequentQuestionsService } from './frequent-questions.service';

@Component({
  selector: 'app-frequent-questions',
  templateUrl: './frequent-questions.component.html',
  styleUrls: ['./frequent-questions.component.scss'],
  providers: [FrequentQuestionsService]
})
export class FrequentQuestionsComponent implements OnInit {

  indexActiveQuestion: number | null = null;

  questions: IQuestion[] = [];

  protected subs = new SubSink();

  constructor(protected frequentQuestionsService: FrequentQuestionsService) { }

  ngOnInit(): void {
    this.onGetQuestions();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  //=================OBSERVABLE FUNCTION=================

  onGetQuestions(): void {
    this.subs.add(this.frequentQuestionsService.questions$.subscribe(questions => this.questions = questions));
  }

  //==================DOM EVENT FUNCTION==================

  clickEventOpenQuestion(index: number): void {
    if(this.indexActiveQuestion == index) {
      this.indexActiveQuestion = null;
      return;
    }
    
    this.indexActiveQuestion = index;
  }

}
