class Graph{
    constructor(){
        this.adjacencyList=[]
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
        }
    }
    addEdges(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
         if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return (
            this.adjacencyList[vertex1].has(vertex2)&&
            this.adjacencyList[vertex2].has(vertex2)
        )
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }
    print(){
        for(let i in this.adjacencyList){
            console.log(i+" -> "+[...this.adjacencyList[i]])
        }
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return 

        }
        for(let adj of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adj)
        }
        delete this.adjacencyList[vertex];
    }
    bfs(start){
        let queue=[];
        let visited=new Set();

        queue.push(start);
        visited.add(start);

        while(queue.length>0){
            let vertex=queue.shift();
            console.log(vertex);
            for(let neighbour of this.adjacencyList[vertex]){
                if(!visited.has(neighbour)){
                    visited.add(neighbour);
                    queue.push(neighbour);
                }
            }
        }
    }
    dfs(start){
        let stack=[];
        let visited=new Set();

        stack.push(start)

        while(stack.length>0){
            let vertex=stack.pop();
            if(!visited.has(vertex)){
                visited.add(vertex);
                console.log(vertex);
              for(let neighbour of this.adjacencyList[vertex]){
                if(!visited.has(neighbour)){
                    stack.push(neighbour)
                }
              }
            }

        }
    }
    hasCycle(){
        let visited=new Set();
        for(let start in this.adjacencyList){
            if(!visited.has(start)){

           
            let queue=[[start,null]];
            visited.add(start);
            while(queue.length){
                let [vertex,parent]=queue.shift();
                for(let adj of this.adjacencyList[vertex]){
                    if(!visited.has(adj)){
                        visited.add(adj);
                        queue.push([adj,vertex])
                    }else if(adj!==parent){
                        return true
                    }
                }
            }
             }
        }
        return false
    }
}

const grp=new Graph()

grp.addVertex("A")
grp.addVertex("B")
grp.addVertex("C")
grp.addVertex("D")
grp.addVertex("E")


grp.addEdges("A","B")
grp.addEdges("B","C")
grp.addEdges("C","D")   
grp.addEdges("D","A")


// grp.removeEdge("A","B")
// grp.removeVertex("C")
// grp.print()

// grp.bfs("B")
grp.dfs("B")
console.log(grp.hasCycle())