#include <bits/stdc++.h> 
class Deque
{
    int front;
    int rear;
    int *arr;
    int size;
public:
    // Initialize your data structure.
    Deque(int n)
    {
        // Write your code here.
        front = -1;
        rear = -1;
        size = n;
        arr = new int[size];
    }

    // Pushes 'X' in the front of the deque. Returns true if it gets pushed into the deque, and false otherwise.
    bool pushFront(int x)
    {
        // Write your code here.
        if (isFull()) {

            return false;

        } else if (front == -1) {

            front = rear = 0;

        } else if (front == 0) {

            // Cyclic Nature.

            front = size - 1;

        } else {

            front = front - 1;

        }

        arr[front] = x;

        return true;
    }

    // Pushes 'X' in the back of the deque. Returns true if it gets pushed into the deque, and false otherwise.
    bool pushRear(int x)
    {
        // Write your code here.
        if (isFull()) {

            return false;

        } else if (front == -1) {

        front = rear = 0;

        } else {

        rear = (rear + 1) % size;

        }

        arr[rear] = x;

        return true;
    }

    // Pops an element from the front of the deque. Returns -1 if the deque is empty, otherwise returns the popped element.
    int popFront()
    {
        // Write your code here.
        if (isEmpty()) {

        return -1;

        }

        int ans = arr[front];

        if (front == rear) {

            front = rear = -1;

        } else {

            front = (front + 1) % size;

        }

        return ans;
    }

    // Pops an element from the back of the deque. Returns -1 if the deque is empty, otherwise returns the popped element.
    int popRear()
    {
        // Write your code here.
        if (isEmpty()) {

            return -1;

        }

        int ans = arr[rear];

        if (front == rear) {

            front = rear = -1;

        } else {

            rear = (rear - 1 + size) % size;

        }

        return ans;
    }

    // Returns the first element of the deque. If the deque is empty, it returns -1.
    int getFront()
    {
        // Write your code here.
        if(isEmpty()) return -1;
        else return arr[front];
    }

    // Returns the last element of the deque. If the deque is empty, it returns -1.
    int getRear()
    {
        // Write your code here.
        if(isEmpty()) return -1;
        else return arr[rear];
    }

    // Returns true if the deque is empty. Otherwise returns false.
    bool isEmpty()
    {
        // Write your code here.
        return front == -1;
    }

    // Returns true if the deque is full. Otherwise returns false.
    bool isFull()
    {
        // Write your code here.
        return ((rear+1)%size == front);
    }
};
