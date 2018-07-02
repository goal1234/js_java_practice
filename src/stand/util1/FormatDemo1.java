package stand.util1;
// Use automatic resource management with Formatter.
import java.util.*;

public class FormatDemo1 {
    public static void main(String args[]) {
        try (Formatter fmt = new Formatter())
        {
            fmt.format("Formatting %s is easy %d %f", "with Java",
                    10, 98.6);
            System.out.println(fmt);
        }
    }
}

