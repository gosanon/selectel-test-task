import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class RoutesService {
    items = {
        '/greeting': 'Приветствие',
        '/main': 'Основная страница'
    } as const;
}
