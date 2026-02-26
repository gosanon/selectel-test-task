import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SideMenuService {
    items = {
        '/greeting': 'Приветствие',
        '/main': 'Основная страница'
    } as const;
}
