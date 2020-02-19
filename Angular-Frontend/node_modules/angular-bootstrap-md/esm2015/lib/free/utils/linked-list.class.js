/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
export class LinkedList {
    constructor() {
        // public length: = 0;
        this.length = 0;
        this.asArray = [];
        // Array methods overriding END
    }
    /**
     * @protected
     * @param {?} position
     * @return {?}
     */
    getNode(position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        /** @type {?} */
        let current = this.head;
        for (let index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    }
    /**
     * @protected
     * @return {?}
     */
    createInternalArrayRepresentation() {
        /** @type {?} */
        const outArray = [];
        /** @type {?} */
        let current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    }
    // public get(position: number): T {
    /**
     * @param {?} position
     * @return {?}
     */
    get(position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        /** @type {?} */
        let current = this.head;
        for (let index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    }
    /**
     * @param {?} value
     * @param {?=} position
     * @return {?}
     */
    add(value, position = this.length) {
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        /** @type {?} */
        const node = {
            value: (/** @type {?} */ (value)),
            next: (/** @type {?} */ (undefined)),
            previous: (/** @type {?} */ (undefined))
        };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
        }
        else {
            if (position === 0) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            }
            else if (position === this.length) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            else {
                // node in middle
                /** @type {?} */
                const currentPreviousNode = this.getNode(position - 1);
                /** @type {?} */
                const currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
            }
        }
        this.length++;
        this.createInternalArrayRepresentation();
    }
    /**
     * @param {?=} position
     * @return {?}
     */
    remove(position = 0) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        if (position === 0) {
            // first node
            this.head = this.head.next;
            if (this.head) {
                // there is no second node
                this.head.previous = undefined;
            }
            else {
                // there is no second node
                this.tail = undefined;
            }
        }
        else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
        }
        else {
            // middle node
            /** @type {?} */
            const removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
        }
        this.length--;
        this.createInternalArrayRepresentation();
    }
    /**
     * @param {?} position
     * @param {?} value
     * @return {?}
     */
    set(position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        /** @type {?} */
        const node = this.getNode(position);
        node.value = value;
        this.createInternalArrayRepresentation();
    }
    /**
     * @return {?}
     */
    toArray() {
        return this.asArray;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    findAll(fn) {
        /** @type {?} */
        let current = this.head;
        /** @type {?} */
        const result = [];
        for (let index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result.push({ index, value: current.value });
            }
            current = current.next;
        }
        return result;
    }
    // Array methods overriding start
    /**
     * @param {...?} args
     * @return {?}
     */
    push(...args) {
        args.forEach((/**
         * @param {?} arg
         * @return {?}
         */
        (arg) => {
            this.add(arg);
        }));
        return this.length;
    }
    // public pop(): T {
    /**
     * @return {?}
     */
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        /** @type {?} */
        const last = this.tail;
        this.remove(this.length - 1);
        return last.value;
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    unshift(...args) {
        args.reverse();
        args.forEach((/**
         * @param {?} arg
         * @return {?}
         */
        (arg) => {
            this.add(arg, 0);
        }));
        return this.length;
    }
    // public shift(): T {
    /**
     * @return {?}
     */
    shift() {
        if (this.length === 0) {
            return undefined;
        }
        /** @type {?} */
        const lastItem = this.head.value;
        this.remove();
        return lastItem;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    forEach(fn) {
        /** @type {?} */
        let current = this.head;
        for (let index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    indexOf(value) {
        /** @type {?} */
        let current = this.head;
        /** @type {?} */
        let position = 0;
        for (let index = 0; index < this.length; index++) {
            if (current.value === value) {
                position = index;
                break;
            }
            current = current.next;
        }
        return position;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    some(fn) {
        /** @type {?} */
        let current = this.head;
        /** @type {?} */
        let result = false;
        while (current && !result) {
            if (fn(current.value)) {
                result = true;
                break;
            }
            current = current.next;
        }
        return result;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    every(fn) {
        /** @type {?} */
        let current = this.head;
        /** @type {?} */
        let result = true;
        while (current && result) {
            if (!fn(current.value)) {
                result = false;
            }
            current = current.next;
        }
        return result;
    }
    /**
     * @return {?}
     */
    toString() {
        return '[Linked List]';
    }
    // public find(fn: any): T {
    /**
     * @param {?} fn
     * @return {?}
     */
    find(fn) {
        /** @type {?} */
        let current = this.head;
        // let result: T;
        /** @type {?} */
        let result;
        for (let index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = current.value;
                break;
            }
            current = current.next;
        }
        return result;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    findIndex(fn) {
        /** @type {?} */
        let current = this.head;
        // let result: number;
        /** @type {?} */
        let result;
        for (let index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = index;
                break;
            }
            current = current.next;
        }
        return result;
    }
}
if (false) {
    /** @type {?} */
    LinkedList.prototype.length;
    /**
     * @type {?}
     * @protected
     */
    LinkedList.prototype.head;
    /**
     * @type {?}
     * @protected
     */
    LinkedList.prototype.tail;
    /**
     * @type {?}
     * @protected
     */
    LinkedList.prototype.current;
    /**
     * @type {?}
     * @protected
     */
    LinkedList.prototype.asArray;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLWxpc3QuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWJvb3RzdHJhcC1tZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL2xpbmtlZC1saXN0LmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNLE9BQU8sVUFBVTtJQUF2Qjs7UUFHUyxXQUFNLEdBQVEsQ0FBQyxDQUFDO1FBSWIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQWdRNUIsK0JBQStCO0lBQ2pDLENBQUM7Ozs7OztJQS9QVyxPQUFPLENBQUMsUUFBZ0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hFLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztTQUNoRDs7WUFFRyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUk7UUFFdkIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUM3QyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztTQUN4QjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7O0lBRVMsaUNBQWlDOztjQUNuQyxRQUFRLEdBQVUsRUFBRTs7WUFDdEIsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJO1FBRXZCLE9BQU8sT0FBTyxFQUFFO1lBQ2QsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDOzs7Ozs7SUFHUSxHQUFHLENBQUMsUUFBZ0I7UUFDM0IsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMs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QUUsRUFBRTtZQUNoRCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUM1QixNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNmLE1BQU07YUFDUDtZQUNELE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztDQUdGOzs7SUFyUUMsNEJBQXVCOzs7OztJQUN2QiwwQkFBb0I7Ozs7O0lBQ3BCLDBCQUFvQjs7Ozs7SUFDcEIsNkJBQXVCOzs7OztJQUN2Qiw2QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTGlua2VkTGlzdCA8VD4ge1xuXG4gIC8vIHB1YmxpYyBsZW5ndGg6ID0gMDtcbiAgcHVibGljIGxlbmd0aDogYW55ID0gMDtcbiAgcHJvdGVjdGVkIGhlYWQ6IGFueTtcbiAgcHJvdGVjdGVkIHRhaWw6IGFueTtcbiAgcHJvdGVjdGVkIGN1cnJlbnQ6IGFueTtcbiAgcHJvdGVjdGVkIGFzQXJyYXk6IFRbXSA9IFtdO1xuXG4gIHByb3RlY3RlZCBnZXROb2RlKHBvc2l0aW9uOiBudW1iZXIpOiBhbnkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCB8fCBwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUG9zaXRpb24gaXMgb3V0IG9mIHRoZSBsaXN0Jyk7XG4gICAgfVxuXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcG9zaXRpb247IGluZGV4KyspIHtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50O1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUludGVybmFsQXJyYXlSZXByZXNlbnRhdGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCBvdXRBcnJheTogYW55W10gPSBbXTtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcblxuICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICBvdXRBcnJheS5wdXNoKGN1cnJlbnQudmFsdWUpO1xuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG4gICAgdGhpcy5hc0FycmF5ID0gb3V0QXJyYXk7XG4gIH1cblxuICAvLyBwdWJsaWMgZ2V0KHBvc2l0aW9uOiBudW1iZXIpOiBUIHtcbiAgICBwdWJsaWMgZ2V0KHBvc2l0aW9uOiBudW1iZXIpOiBUIHwgYW55IHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDAgfHwgcG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cblxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBvc2l0aW9uOyBpbmRleCsrKSB7XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudC52YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBhZGQodmFsdWU6IFQsIHBvc2l0aW9uOiBudW1iZXIgPSB0aGlzLmxlbmd0aCk6IHZvaWQge1xuICAgIGlmIChwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPiB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQb3NpdGlvbiBpcyBvdXQgb2YgdGhlIGxpc3QnKTtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0ge1xuICAgICAgdmFsdWU6IHZhbHVlIGFzIGFueSxcbiAgICAgIG5leHQ6IHVuZGVmaW5lZCBhcyBhbnksXG4gICAgICBwcmV2aW91czogdW5kZWZpbmVkIGFzIGFueVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuaGVhZCA9IG5vZGU7XG4gICAgICB0aGlzLnRhaWwgPSBub2RlO1xuICAgICAgdGhpcy5jdXJyZW50ID0gbm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBvc2l0aW9uID09PSAwKSB7XG4gICAgICAgIC8vIGZpcnN0IG5vZGVcbiAgICAgICAgbm9kZS5uZXh0ID0gdGhpcy5oZWFkO1xuICAgICAgICB0aGlzLmhlYWQucHJldmlvdXMgPSBub2RlO1xuICAgICAgICB0aGlzLmhlYWQgPSBub2RlO1xuICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgLy8gbGFzdCBub2RlXG4gICAgICAgIHRoaXMudGFpbC5uZXh0ID0gbm9kZTtcbiAgICAgICAgbm9kZS5wcmV2aW91cyA9IHRoaXMudGFpbDtcbiAgICAgICAgdGhpcy50YWlsID0gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vZGUgaW4gbWlkZGxlXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcmV2aW91c05vZGUgPSB0aGlzLmdldE5vZGUocG9zaXRpb24gLSAxKTtcbiAgICAgICAgY29uc3QgY3VycmVudE5leHROb2RlID0gY3VycmVudFByZXZpb3VzTm9kZS5uZXh0O1xuXG4gICAgICAgIGN1cnJlbnRQcmV2aW91c05vZGUubmV4dCA9IG5vZGU7XG4gICAgICAgIGN1cnJlbnROZXh0Tm9kZS5wcmV2aW91cyA9IG5vZGU7XG5cbiAgICAgICAgbm9kZS5wcmV2aW91cyA9IGN1cnJlbnRQcmV2aW91c05vZGU7XG4gICAgICAgIG5vZGUubmV4dCA9IGN1cnJlbnROZXh0Tm9kZTtcbiAgICAgIH1cblxuICAgIH1cbiAgICB0aGlzLmxlbmd0aCsrO1xuICAgIHRoaXMuY3JlYXRlSW50ZXJuYWxBcnJheVJlcHJlc2VudGF0aW9uKCk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKHBvc2l0aW9uOiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwIHx8IHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQb3NpdGlvbiBpcyBvdXQgb2YgdGhlIGxpc3QnKTtcbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24gPT09IDApIHtcbiAgICAgIC8vIGZpcnN0IG5vZGVcbiAgICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXh0O1xuXG4gICAgICBpZiAodGhpcy5oZWFkKSB7XG4gICAgICAgIC8vIHRoZXJlIGlzIG5vIHNlY29uZCBub2RlXG4gICAgICAgIHRoaXMuaGVhZC5wcmV2aW91cyA9IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoZXJlIGlzIG5vIHNlY29uZCBub2RlXG4gICAgICAgIHRoaXMudGFpbCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSB0aGlzLmxlbmd0aCAtIDEpIHtcbiAgICAgIC8vIGxhc3Qgbm9kZVxuICAgICAgdGhpcy50YWlsID0gdGhpcy50YWlsLnByZXZpb3VzO1xuICAgICAgdGhpcy50YWlsLm5leHQgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG1pZGRsZSBub2RlXG4gICAgICBjb25zdCByZW1vdmVkTm9kZSA9IHRoaXMuZ2V0Tm9kZShwb3NpdGlvbik7XG4gICAgICByZW1vdmVkTm9kZS5uZXh0LnByZXZpb3VzID0gcmVtb3ZlZE5vZGUucHJldmlvdXM7XG4gICAgICByZW1vdmVkTm9kZS5wcmV2aW91cy5uZXh0ID0gcmVtb3ZlZE5vZGUubmV4dDtcbiAgICB9XG5cbiAgICB0aGlzLmxlbmd0aC0tO1xuICAgIHRoaXMuY3JlYXRlSW50ZXJuYWxBcnJheVJlcHJlc2VudGF0aW9uKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0KHBvc2l0aW9uOiBudW1iZXIsIHZhbHVlOiBUKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwIHx8IHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQb3NpdGlvbiBpcyBvdXQgb2YgdGhlIGxpc3QnKTtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKHBvc2l0aW9uKTtcbiAgICBub2RlLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jcmVhdGVJbnRlcm5hbEFycmF5UmVwcmVzZW50YXRpb24oKTtcbiAgfVxuXG4gIHB1YmxpYyB0b0FycmF5KCk6IFRbXSB7XG4gICAgcmV0dXJuIHRoaXMuYXNBcnJheTtcbiAgfVxuXG4gIHB1YmxpYyBmaW5kQWxsKGZuOiBhbnkpOiBhbnlbXSB7XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKGZuKGN1cnJlbnQudmFsdWUsIGluZGV4KSkge1xuICAgICAgICByZXN1bHQucHVzaCh7aW5kZXgsIHZhbHVlOiBjdXJyZW50LnZhbHVlfSk7XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIC8vIEFycmF5IG1ldGhvZHMgb3ZlcnJpZGluZyBzdGFydFxuICBwdWJsaWMgcHVzaCguLi5hcmdzOiBUW10pOiBudW1iZXIge1xuICAgIGFyZ3MuZm9yRWFjaCgoYXJnOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuYWRkKGFyZyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xuICB9XG5cbiAgLy8gcHVibGljIHBvcCgpOiBUIHtcbiAgICBwdWJsaWMgcG9wKCk6IFQgfCBhbnkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgbGFzdCA9IHRoaXMudGFpbDtcbiAgICB0aGlzLnJlbW92ZSh0aGlzLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiBsYXN0LnZhbHVlO1xuICB9XG5cbiAgcHVibGljIHVuc2hpZnQoLi4uYXJnczogVFtdKTogbnVtYmVyIHtcbiAgICBhcmdzLnJldmVyc2UoKTtcbiAgICBhcmdzLmZvckVhY2goKGFyZzogYW55KSA9PiB7XG4gICAgICB0aGlzLmFkZChhcmcsIDApO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmxlbmd0aDtcbiAgfVxuXG4gIC8vIHB1YmxpYyBzaGlmdCgpOiBUIHtcbiAgICBwdWJsaWMgc2hpZnQoKTogVCB8IGFueSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBsYXN0SXRlbSA9IHRoaXMuaGVhZC52YWx1ZTtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICAgIHJldHVybiBsYXN0SXRlbTtcbiAgfVxuXG4gIHB1YmxpYyBmb3JFYWNoKGZuOiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGZuKGN1cnJlbnQudmFsdWUsIGluZGV4KTtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGluZGV4T2YodmFsdWU6IFQpOiBudW1iZXIge1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgIGxldCBwb3NpdGlvbiA9IDA7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmIChjdXJyZW50LnZhbHVlID09PSB2YWx1ZSkge1xuXG4gICAgICAgIHBvc2l0aW9uID0gaW5kZXg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgcHVibGljIHNvbWUoZm46IGFueSk6IGJvb2xlYW4ge1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgIGxldCByZXN1bHQgID0gZmFsc2U7XG4gICAgd2hpbGUgKGN1cnJlbnQgJiYgIXJlc3VsdCkge1xuICAgICAgaWYgKGZuKGN1cnJlbnQudmFsdWUpKSB7XG4gICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHB1YmxpYyBldmVyeShmbjogYW55KTogYm9vbGVhbiB7XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgbGV0IHJlc3VsdCAgPSB0cnVlO1xuICAgIHdoaWxlIChjdXJyZW50ICYmIHJlc3VsdCkgIHtcbiAgICAgIGlmICghZm4oY3VycmVudC52YWx1ZSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdbTGlua2VkIExpc3RdJztcbiAgfVxuXG4gIC8vIHB1YmxpYyBmaW5kKGZuOiBhbnkpOiBUIHtcbiAgICBwdWJsaWMgZmluZChmbjogYW55KTogVCB8IGFueSB7XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgLy8gbGV0IHJlc3VsdDogVDtcbiAgICBsZXQgcmVzdWx0OiBUIHwgYW55O1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKGZuKGN1cnJlbnQudmFsdWUsIGluZGV4KSkge1xuICAgICAgICByZXN1bHQgPSBjdXJyZW50LnZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwdWJsaWMgZmluZEluZGV4KGZuOiBhbnkpOiBudW1iZXIge1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgIC8vIGxldCByZXN1bHQ6IG51bWJlcjtcbiAgICBsZXQgcmVzdWx0OiBudW1iZXIgfCBhbnk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBpZiAoZm4oY3VycmVudC52YWx1ZSwgaW5kZXgpKSB7XG4gICAgICAgIHJlc3VsdCA9IGluZGV4O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyBBcnJheSBtZXRob2RzIG92ZXJyaWRpbmcgRU5EXG59XG4iXX0=