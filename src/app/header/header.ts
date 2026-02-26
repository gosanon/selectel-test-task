import { Component, computed, inject, signal } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { RoutesService } from '../services/routes.service';
import { ActivatedRoute, EventType, NavigationEnd, Router } from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';


@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.html',
    styleUrl: './header.css',
})
export class Header {
    private router = inject(Router);

    itemsService = inject(ItemsService);
    routesService = inject(RoutesService);

    // skip non-navigational events
    lastNavigationEvent = toSignal(this.router.events,
        { equal: (prev, next) => next?.type !== EventType.NavigationEnd });

    // try to compute url, if undefined (first event, which is non-navigational), then skip
    pageSlug = computed(() => (this.lastNavigationEvent() as NavigationEnd)?.url,
        { equal: (prev, next) => next === undefined || prev === next });

    // 'неизвестно' for bad routes
    pageName = computed(() =>
        this.routesService.items.hasOwnProperty(this.pageSlug())
            && this.routesService.items[this.pageSlug() as unknown as keyof typeof this.routesService.items]
        || 'неизвестно');
}
