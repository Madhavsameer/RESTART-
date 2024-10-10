package DSA.Hashing;

import java.util.HashSet;

public class DuplicateRemoval {
    public static void main(String[] args) {

        int arr[]={8,9,8,7,6,7,5,3};

        removal(arr);
        
    }

    public static void removal(int arr[]){
        HashSet <Integer> set =new HashSet<>();
        for(int num:arr){
            set.add(num);
        }
        int newArr[]= new int[set.size()];

        int index=0;
        for(int num:set){
            newArr[index]=num;
            index++;      
        }
        for(int num:newArr){
            System.out.print(num+" ");
        }
    }
}
