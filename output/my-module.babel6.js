var _desc, _value, _class, _descriptor, _descriptor2;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

function myDecorator(...params) {}

let MyClass = (_class = class MyClass {
  constructor() {
    _initDefineProp(this, 'field1', _descriptor, this);

    _initDefineProp(this, 'field2', _descriptor2, this);
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
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'field1', [myDecorator], {
  enumerable: true,
  initializer: function () {
    return true;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'field2', [myDecorator], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _applyDecoratedDescriptor(_class.prototype, 'methodA', [myDecorator], Object.getOwnPropertyDescriptor(_class.prototype, 'methodA'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'methodB', [myDecorator], Object.getOwnPropertyDescriptor(_class.prototype, 'methodB'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'methodC', [myDecorator], Object.getOwnPropertyDescriptor(_class.prototype, 'methodC'), _class.prototype)), _class);