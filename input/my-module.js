function myDecorator(...params) {}

class MyClass {
  @myDecorator field1 = true;
  @myDecorator field2 = false;

  @myDecorator methodA() {
    return 'ok';
  }

  @myDecorator methodB() {
    return -1;
  }

  @myDecorator methodC() {
    return null;
  }
}
