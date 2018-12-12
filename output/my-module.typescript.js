var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function myDecorator() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
}
var MyClass = /** @class */ (function () {
    function MyClass() {
        this.field1 = true;
        this.field2 = false;
    }
    MyClass.prototype.methodA = function () {
        return 'ok';
    };
    MyClass.prototype.methodB = function () {
        return -1;
    };
    MyClass.prototype.methodC = function () {
        return null;
    };
    __decorate([
        myDecorator
    ], MyClass.prototype, "field1");
    __decorate([
        myDecorator
    ], MyClass.prototype, "field2");
    __decorate([
        myDecorator
    ], MyClass.prototype, "methodA");
    __decorate([
        myDecorator
    ], MyClass.prototype, "methodB");
    __decorate([
        myDecorator
    ], MyClass.prototype, "methodC");
    return MyClass;
}());
