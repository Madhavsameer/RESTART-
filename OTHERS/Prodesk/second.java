package OTHERS.Prodesk;
public class second {
    public static void main(String[] args) {

        int arr[]={4,16,10,3,8,12,10,21,11,13,19,2,7,5,8};
        System.out.println("Duplicate elements are");
        duplicate(arr);
        
    }
    public static void duplicate(int arr[]){

        for(int i=0; i<arr.length; i++){
            for(int j=i+1; j<arr.length; j++){
                if(arr[j]==arr[i]){
                    System.out.print(arr[j]+" ");
                }
            }
        }
    }
}
