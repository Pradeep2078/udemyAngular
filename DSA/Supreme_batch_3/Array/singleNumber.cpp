#include<iostream>
#include <vector>
using namespace std;


int singleNumber(int nums[],int n)
{
    int ans = 0;
    // int n = nums.size();

    for (int i = 0; i < n; i++)
    {
        ans = ans ^ nums[i];
    }

    return ans;
    
}

int main() {
    int arr[] = {0,4,1,4,1};
    int size = sizeof(arr)/sizeof(int);

    cout << singleNumber(arr,size);
    return 0;
}