const list_items = [
    {
        images: "./assets/project1.png",
        tag: ["#HTML","#css", "#Javascript"],
        name: "Project 1",
        description: " In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io"
    },
    {
        images: "./assets/project1.png",
        tag: ["#HTML","#css", "#Javascript"],
        name: "Project 2",
        description: " In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io"
    },
    {
        images: "./assets/project1.png",
        tag: ["#HTML","#css", "#Javascript"],
        name: "Project 3",
        description: " In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io"
    },
    {
        images: "./assets/project1.png",
        tag: ["#HTML","#css", "#Javascript"],
        name: "Project 4",
        description: " In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io"
    },
    {
        images: "./assets/project1.png",
        tag: ["#HTML","#css", "#Javascript"],
        name: "Project 5",
        description: " In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io"
    },
    {
        images: "./assets/project1.png",
        tag: ["#HTML","#css", "#Javascript"],
        name: "Project 6",
        description: " In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io"
    },
    {
        images: "./assets/project1.png",
        tag: ["#HTML","#css", "#Javascript"],
        name: "Project 7",
        description: " In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io"
    },
     {
        images: "./assets/project1.png",
        tag: ["#HTML","#css", "#Javascript"],
        name: "Project 8",
        description: " In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io"
    },
    {
        images: "./assets/project1.png",
        tag: ["#HTML","#css", "#Javascript"],
        name: "Project 9",
        description: " In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io"
    }
]

const projectContainer =document.querySelector('#project-container')
const pagination_element =document.querySelector('#pagination')

// console.log(list_items)
let current_page = 1;
let rows = 3;

function DisplayList (items, wrapper, rows_per_page, page) {
	wrapper.innerHTML = "";
    page--;
    

    let start = rows_per_page * page; // 5*1 = 0-1= -1 5-  10 15 20
    
    let end = start + rows_per_page; //5 + 1 = 5  10 15 20 25
   
	let paginatedItems = items.slice(start, end); // 0-4 5-9 10-14 15-19 20-24 
 

    paginatedItems.forEach(node => {
        let item_element = document.createElement('div');
        
        item_element.classList.add('project');
      
        let code = ` 
            <div class="project__img-container">
                <img src="${node.images}" alt="" class="project__img">
            </div>
            <div class="project__tag-container">
                <span class="project__tag-name">
                ${node.tag[0]}
                </span>
                <span class="project__tag-name">
                ${node.tag[1]}
                </span>
                <span class="project__tag-name">
                ${node.tag[2]}
                </span>
            </div>
    
            <div class="project__name">${node.name}</div>
            <div class="project__description">
            ${node.description}
            </div>
    
            <div class="project__btn-container">
                <a href="#" class="btn btn-primary">Demo</a>
                <a href="#" class="btn btn-secondary">Code</a>
            </div>
        `;
        item_element.innerHTML= code
        // item_element.innerText = code;
        return (
            wrapper.appendChild(item_element)         
        )
    });
}

function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

    let page_count = Math.ceil(items.length / rows_per_page); 
    // console.log(page_count)
	for (let i = 1; i < page_count + 1; i++) {
        let btn = PaginationButton(i, items);  
        // console.log(btn)
        wrapper.appendChild(btn);
        // console.log( wrapper.appendChild(btn))

	}
}

function PaginationButton (page, items) {
	let button = document.createElement('button');
	button.innerText = page;
    // button.classList.add('btn')


    
if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
    
       let  current_page = page;
		DisplayList(items, projectContainer, rows, current_page);

		let current_btn = document.querySelector('#pagination button.active');
      
        current_btn.classList.remove('active')

		button.classList.add('active');
    });
 

	return button;
}

DisplayList(list_items, projectContainer, rows, current_page);
SetupPagination(list_items, pagination_element, rows);





