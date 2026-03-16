// --- FORM VALIDATION (Step 2) ---
const contactForm = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // Simple regex for email

    if (!email.match(emailPattern)) {
        feedback.textContent = "Please enter a valid email address.";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Success! Your message was sent.";
        feedback.style.color = "green";
        contactForm.reset();
    }
});

// --- DYNAMIC TO-DO LIST (Step 4) ---
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value;

    if (taskText === "") return; // Don't add empty tasks

    // Create the task element
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="this.parentElement.remove()">Remove</button>
    `;

    taskList.appendChild(li);
    taskInput.value = ""; // Clear input
});
