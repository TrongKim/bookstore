import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { IQuestion } from 'src/app/model/contact/frequent.model';

@Injectable()
export class FrequentQuestionsService {
    constructor() {}

    protected readonly $questions = new BehaviorSubject<IQuestion[]>([
        {
            id: 1,
            answer: 'Many desktop publishing packages and web page editors to now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.',
            question: 'Do you offer discounts for education?',
        },
        {
            id: 2,
            answer: 'Many desktop publishing packages and web page editors to now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.',
            question: 'Is Hack Producivity book available on the one stores?',
        },
        {
            id: 3,
            answer: 'Many desktop publishing packages and web page editors to now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.',
            question: 'What is Hack Productivity book about?',
        },
        {
            id: 4,
            answer: 'Many desktop publishing packages and web page editors to now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.',
            question: 'Where can I get Hack Productivity book?',
        },
        {
            id: 5,
            answer: 'Many desktop publishing packages and web page editors to now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.',
            question: 'Do you offer discounts for education?',
        },
        {
            id: 6,
            answer: 'Many desktop publishing packages and web page editors to now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.',
            question: 'Do you offer discounts for education?',
        },
        {
            id: 7,
            answer: 'Many desktop publishing packages and web page editors to now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.',
            question: 'Is Hack Producivity book available on the one stores?',
        },
        {
            id: 8,
            answer: 'Many desktop publishing packages and web page editors to now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.',
            question: 'What is Hack Productivity book about?',
        },
        {
            id: 9,
            answer: 'Many desktop publishing packages and web page editors to now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.',
            question: 'What is Hack Productivity book about?',
        },
        {
            id: 10,
            answer: 'Many desktop publishing packages and web page editors to now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.',
            question: 'Where can I get Hack Productivity book?',
        },
        {
            id: 11,
            answer: 'Many desktop publishing packages and web page editors to now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.',
            question: 'Where can I get Hack Productivity book?',
        },
        {
            id: 12,
            answer: 'Many desktop publishing packages and web page editors to now use Lorem Ipsum as their default model text, and angle uncover many web sites still in their infancy.',
            question: 'Where can I get Hack Productivity book?',
        },
    ]);

    public readonly questions$ = this.$questions.asObservable();


}

