package DSA.Hashing;
import java.util.*;

/**
 * Hashing
 */
public class DuplicateCheck {

    public static void main(String[] args) {

        int arr[]={7,8,9,5,4};
        duplicate(arr);
        
    }

    public static boolean duplicate(int arr[]){
        HashSet <Integer> set= new HashSet<>();
        for(int i=0; i<arr.length; i++){
            
            if(set.contains(arr[i])){
                System.out.println("Duplicate found");
                return true;
            }
            set.add(arr[i]);
        }
        System.out.println("Duplicate element not found");
        return false;
    }
}