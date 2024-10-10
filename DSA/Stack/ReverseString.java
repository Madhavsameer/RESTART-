package DSA.Stack;

import java.util.Stack;

public class ReverseString {
    public static void main(String[] args) {

        String str="hello";
        reversed(str);
        
        

        
    }

    public static void reversed(String str){
        Stack <Character> stk= new Stack<>();
        for(int i=0; i<str.length(); i++){
            stk.push(str.charAt(i));
        }
        while(!stk.isEmpty()){
            System.out.print(stk.pop());
        }

    }
}
