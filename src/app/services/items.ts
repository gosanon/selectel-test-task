import { computed, Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class Items {
    items = signal<{ id: number, value: number, checked: boolean }[]>([]);


    sum = computed(() => this.items().reduce(
        (result, { value, checked }) =>
            result + (checked ? value : 0), 0))


    checkedCount = computed(() => { console.log(JSON.stringify(this.items(), null, 4)); return this.items().reduce(
        (result, { checked }) =>
            result + (checked ? 1 : 0), 0); })


    constructor() {
        this.items.set([
            { id: 1, value: 20, checked: false },
            { id: 2, value: 30, checked: false },
            { id: 3, value: 40, checked: false },
            { id: 4, value: 50, checked: false }]);
    }


    xsum() {
        return this.items().reduce(
        (result, { value, checked }) =>
            result + (checked ? value : 0), 0);
    }


    updateChecked(id: number) {
        this.items.update(items => {
            console.log('UPDATE!');

            const item = items.find((item => item.id === id));
            if (item)
                item.checked = !item.checked;

            return items;
        });
    }
}
