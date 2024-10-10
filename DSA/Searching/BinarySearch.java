package DSA.Searching;

public class BinarySearch {
    public static void main(String[] args) {
        int arr[]={1,2,3,4,5,6,7,8,9};
        Bs(arr, 5);
    }

    public static void Bs(int arr[], int target){
        int start=0;
        int end=arr.length-1;
        while(start<=end){
            int mid=(start+end)/2;
            if(arr[mid]==target){
                System.out.println("Target element "+target+" found at Index "+mid);
                return;
            }
            else if(arr[mid]<=target){
                start=mid+1;

            }
            else{
                end=mid-1;
            }
        }
        System.out.println("Target Element not found");
        return;

    }
}
