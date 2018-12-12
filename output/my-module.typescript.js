var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function myDecorator(...params) { }
class MyClass {
    constructor() {
        this.field1 = true;
        this.field2 = false;
    }
    methodA() {
        return 'ok';
    }
    methodB() {
        return -1;
    }
    methodC() {
        return null;
    }
}
__decorate([
    myDecorator
], MyClass.prototype, "field1", void 0);
__decorate([
    myDecorator
], MyClass.prototype, "field2", void 0);
__decorate([
    myDecorator
], MyClass.prototype, "methodA", null);
__decorate([
    myDecorator
], MyClass.prototype, "methodB", null);
__decorate([
    myDecorator
], MyClass.prototype, "methodC", null);
