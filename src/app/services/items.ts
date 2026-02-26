import { computed, Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class Items {
    items = signal([
        { id: 1, value: 20, checked: false },
        { id: 2, value: 30, checked: false },
        { id: 3, value: 40, checked: false },
        { id: 4, value: 50, checked: false }]);


    sum = computed(() => this.items().reduce(
        (result, { value, checked }) =>
            result + (checked ? value : 0), 0))


    checkedCount = computed(() => this.items().reduce(
        (result, { checked }) =>
            result + (checked ? 1 : 0), 0))


    xsum() {
        return this.items().reduce(
        (result, { value, checked }) =>
            result + (checked ? value : 0), 0);
    }


    updateChecked(id: number) {
        this.items.update(items => {
            const item = items.find((item => item.id === id));
            if (item)
                item.checked = !item.checked;

            return [...items];
        });
    }
}
