
// An iterative javascript program to find height of binary tree

// A binary tree node
class Node
{
	constructor(item)
	{
		this.data = item;
		this.left = this.right=null;
	}
}

let root;

// Iterative method to find height of Binary Tree
function treeHeight(node)
{

	// Base Case
		if (node == null)
			return 0;

		// Create an empty queue for level order traversal
		let q = [];

		// Enqueue Root and initialize height
		q.push(node);
		let height = 0;

		while (1 == 1)
		{
			// nodeCount (queue size) indicates number of nodes
			// at current level.
			let nodeCount = q.length;
			if (nodeCount == 0)
				return height;
			height++;

			// Dequeue all nodes of current level and Enqueue all
			// nodes of next level
			while (nodeCount > 0)
			{
				let newnode = q.shift();
				if (newnode.left != null)
					q.push(newnode.left);
				if (newnode.right != null)
					q.push(newnode.right);
				nodeCount--;
			}
		}
}

// Driver program to test above functions
// Let us create a binary tree shown in above diagram
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
console.log("Height of tree is " + treeHeight(root));


