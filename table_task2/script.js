const searchInput = document.createElement("input");
      searchInput.type = "text";
      searchInput.placeholder = "Search for Name..";
      searchInput.addEventListener("keyup", () => filterData(searchInput.value));
      document.body.appendChild(searchInput); // Add search input wherever desired
const data = [
        // Replace this with your actual data array
        { name: "Alice", age: 25, city: "New York" },
        { name: "Bob", age: 30, city: "London" },
        { name: "Charlie", age: 28, city: "Paris" },
        // ... add more data objects
      ];
      
      const table = document.getElementById("data-table");
      const tbody = table.querySelector("tbody");
      const paginationContainer = document.getElementById("pagination-container");
      
      let currentPage = 1;
      const itemsPerPage = 10; // Adjust this value as needed
      
      function renderTableHeaders() {
        const thead = table.querySelector("thead");
        thead.innerHTML = ""; // Clear existing headers
        const row = document.createElement("tr");
        for (const key in data[0]) {
          const th = document.createElement("th");
          th.innerText = key;
          th.addEventListener("click", () => sortData(key));
          row.appendChild(th);
        }
        thead.appendChild(row);
      }
      
      function renderTableData(data) {
        tbody.innerHTML = ""; // Clear existing rows
        data.forEach((item) => {
          const row = document.createElement("tr");
          for (const value in item) {
            const td = document.createElement("td");
            td.innerText = item[value];
            row.appendChild(td);
          }
          tbody.appendChild(row);
        });
      }
      
      function sortData(key) {
        data.sort((a, b) => (a[key] > b[key] ? 1 : -1)); // Ascending sort
        renderTableData(data);
      }
      
      function filterData(searchTerm) {
        const filteredData = data.filter((item) =>
          Object.values(item).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase()))
        );
        renderTableData(filteredData);
      }
      
      function paginateData() {
        const totalPages = Math.ceil(data.length / itemsPerPage);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, data.length);
        const paginatedData = data.slice(startIndex, endIndex);
        renderTableData(paginatedData);
      
        paginationContainer.innerHTML = "";
        if (totalPages > 1) {
          for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement("button");
            button.innerText = i;
            button.classList.add("page-button");
            button.addEventListener("click", () => {
              currentPage = i;
              paginateData();
            });
            if (i === currentPage) {
              button.classList.add("active");
            }
            paginationContainer.appendChild(button);
          }
        }
      }
      
      // Add search functionality (optional)
      
      
      renderTableHeaders();
      paginateData();