import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
	new Vue({
		el: "#app",
		data: {
			todos: [
				// "Buy shopping", "Clean bathroom", "Car's MOT"
				{ todo: "Buy shopping", priority: "High" },
				{ todo: "Clean bathroom", priority: "Low" },
				{ todo: "Car's MOT", priority: "Low" },
			],
			newItem: ""
		},
		methods: {

			saveNewItem: function(){
        // this.todos.push(this.newItem);
				this.todos.push({
					todo: this.newItem,
					purchased: "Low"
				});
				this.newItem = "";
			}

		}
	});
});
