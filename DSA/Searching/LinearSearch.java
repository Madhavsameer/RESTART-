package DSA.Searching;

public class LinearSearch {
    public static void main(String[] args) {
        int myArr[]={7,5,9,8,4,6,3,1};
        Ls(myArr, 4);

    }

    public static void Ls(int arr[], int target){
        for(int i=0; i<arr.length; i++){
            if(arr[i]==target){
                System.out.println("Target Element "+arr[i]+" found at Index "+i);
                return;
            }
        }
        System.out.println("Target Element not found");
        return;

    }
}
