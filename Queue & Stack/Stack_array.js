class Stack
	{
		constructor(capacity) {
			this.capacity = capacity;
			this.top = -1;
			this.array = new Array(capacity);
		}
	}
	
	// function to create a stack of given capacity.
	function createStack(capacity)
	{
		let stack = new Stack(capacity);
        console.log("Creataed stack with capacity " + capacity)
		return stack;
	}
	
	// Stack is full when top is equal to the last index
	function isFull(stack)
	{
		return (stack.top == (stack.capacity - 1));
	}
	
	// Stack is empty when top is equal to -1
	function isEmpty(stack)
	{
		return (stack.top == -1);
	}
	
	// Function to add an item to stack.
	// It increases top by 1
	function push(stack, item)
	{
		if(isFull(stack))
			return;
		stack.array[++stack.top] = item;
        //console.log("Added " + item + " to stack")
	}
	
	// Function to remove an item from stack. 
	// It decreases top by 1
	function pop(stack)
	{
		if(isEmpty(stack))
			return Number.MIN_VALUE;
		return stack.array[stack.top--];
	}
	
	// Function to implement legal 
	// movement between two poles
	function moveDisksBetweenTwoPoles(src, dest, s, d)
	{
		let pole1TopDisk = pop(src);
		let pole2TopDisk = pop(dest);

		// When pole 1 is empty
		if (pole1TopDisk == Number.MIN_VALUE)
		{
			push(src, pole2TopDisk);
			moveDisk(d, s, pole2TopDisk);
		}
		
		// When pole2 pole is empty
		else if (pole2TopDisk == Number.MIN_VALUE)
		{
			push(dest, pole1TopDisk);
			moveDisk(s, d, pole1TopDisk);
		}
		
		// When top disk of pole1 > top disk of pole2
		else if (pole1TopDisk > pole2TopDisk)
		{
			push(src, pole1TopDisk);
			push(src, pole2TopDisk);
			moveDisk(d, s, pole2TopDisk);
		}
		
		// When top disk of pole1 < top disk of pole2
		else
		{
			push(dest, pole2TopDisk);
			push(dest, pole1TopDisk);
			moveDisk(s, d, pole1TopDisk);
		}
	}
	
	// Function to show the movement of disks
function moveDisk(fromRod , toRod , disk)
	{
		console.log ("Move the disk "+disk +" from '"+fromRod+"' to '"+toRod );
	}
	
	// Function to implement TOH puzzle
	function tohIterative(num_of_disks, src, aux, dest)
	{
		let i, total_num_of_moves;
		let s = 'Src', d = 'Dest', a = 'Aux';
	
		// If number of disks is even, then interchange
		// destination pole and auxiliary pole
		if (num_of_disks % 2 == 0)
		{
			let temp = d;
			d = a;
			a = temp;
		}
		total_num_of_moves = parseInt(Math.pow(2, num_of_disks) - 1, 10);
	
		// Larger disks will be pushed first
		for (i = num_of_disks; i >= 1; i--)
			push(src, i);
	
		for (i = 1; i <= total_num_of_moves; i++)
		{
			if (i % 3 == 1)
				moveDisksBetweenTwoPoles(src, dest, s, d);
	
			else if (i % 3 == 2)
				moveDisksBetweenTwoPoles(src, aux, s, a);
	
			else if (i % 3 == 0)
				moveDisksBetweenTwoPoles(aux, dest, a, d);
		}
	}
	
	// Input: number of disks
	let num_of_disks = 3;

	let src, dest, aux;

	// Create three stacks of size 'num_of_disks'
	// to hold the disks
	src = createStack(num_of_disks);
	dest = createStack(num_of_disks);
	aux = createStack(num_of_disks);

	tohIterative(num_of_disks, src, aux, dest);

