package DSA.Array;

public class Arrays {

    public static void main(String[] args) {

        int arr[]={5,7,8,9,5,6,9};
        duplicate(arr);
        
    }

    public static void duplicate(int arr[]){
        for(int i=0; i<arr.length; i++){
            for(int j=i+1; j<arr.length; j++){
                if(arr[j]==arr[i]){
                    System.out.println("Duplicate element found"+arr[j]);
                    
                }
            }
        }
        
    }
    
}
