package Method;

// Demonstrate an inner class.
class Outer1 {
    int outer_x = 100;
    void test() {
        Inner inner = new Inner();
        inner.display();
    }
    // this is an inner class
    class Inner {
        void display() {
            System.out.println("display: outer_x = " + outer_x);
        }
    }
}
class InnerClassDemo {
    public static void main(String args[]) {
        Outer1 outer = new Outer1();
        outer.test();
    }
}