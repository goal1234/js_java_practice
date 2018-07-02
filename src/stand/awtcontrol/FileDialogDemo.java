package stand.awtcontrol;

/* Demonstrate File Dialog box.
This is an application, not an applet.
*/
import java.awt.*;
import java.awt.event.*;
// Create a subclass of Frame.
class SampleFrame extends Frame {
    SampleFrame(String title) {
        super(title);
// remove the window when closed
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent we) {
                System.exit(0);
            }
        });
    }
}
// Demonstrate FileDialog.
class FileDialogDemo {
    public static void main(String args[]) {
// create a frame that owns the dialog
        Frame f = new SampleFrame("File Dialog Demo");
        f.setVisible(true);
        f.setSize(100, 100);
        FileDialog fd = new FileDialog(f, "File Dialog");
        fd.setVisible(true);
    }
}