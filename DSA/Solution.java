package DSA;
class Solution{
    static int evenlyDivides(int N){
        // code here
        
        int n=N;
        int count=0;
    
        while(n>0){
            
            int unit=n%10;
            if(unit % N==0){
                count++;
                
            }
            
        }
        
        return count;
        
        
    }

    public static void main(String[] args) {
       System.out.println(evenlyDivides(1580)); 
    }
}