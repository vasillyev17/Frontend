let archivedNotes = [];

//Generate Tabels
function generateNotesTable() {
    const notesTable = document.getElementById('notesTable');
    notesTable.innerHTML = '<table><tr><th>Name</th><th>Created</th><th>Category</th><th>Content</th><th>Dates</th><th>Actions</th></tr></table>';

    const tableBody = notesTable.querySelector('table');

    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];
        const row = document.createElement('tr');
        row.innerHTML = `<td>${note.name}</td><td>${new Date(note.time).toLocaleString()}</td><td>${note.category}</td><td>${note.content}</td><td>${getDatesMentioned(note.content)}</td><td><button onclick="archive(${i})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
  <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
</svg></button><button onclick="editNote(${i})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg></button><button onclick="removeNote(${i})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg></button></td>`;
        tableBody.appendChild(row);
    }
}

function generateArchivedNotesTable() {
    const archivedNotesTable = document.getElementById('archivedNotesTable');
    archivedNotesTable.innerHTML = '<table><tr><th>Name</th><th>Created</th><th>Archived Date</th><th>Category</th><th>Content</th><th>Dates</th><th>Actions</th></tr></table>';

    const tableBody = archivedNotesTable.querySelector('table');

    for (let i = 0; i < archivedNotes.length; i++) {
        const note = archivedNotes[i];
        const row = document.createElement('tr');
        row.innerHTML = `<td>${note.name}</td><td>${new Date(note.time).toLocaleString()}</td><td>${new Date(note.archivedDate).toLocaleString()}</td><td>${note.category}</td><td>${note.content}</td><td>${getDatesMentioned(note.content)}</td><td><button onclick="unarchive(${i})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
  <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
</svg></button></td>`;
        tableBody.appendChild(row);
    }
}

function updateSummaryTable() {
    const summaryTable = document.getElementById('summaryTable');
    const categories = ["Task", "Random Thought", "Idea"];

    summaryTable.innerHTML = '<table><tr><th>Category</th><th>Active</th><th>Archived</th></tr></table>';

    const tableBody = summaryTable.querySelector('table');

    for (let category of categories) {
        const activeCount = notes.filter(note => note.category === category).length;
        const archivedCount = archivedNotes.filter(note => note.category === category).length;

        const row = document.createElement('tr');
        row.innerHTML = `<td>${category}</td><td>${activeCount}</td><td>${archivedCount}</td>`;
        tableBody.appendChild(row);
    }
}

//Row Actions
function archive(index) {
    const noteToArchive = notes.splice(index, 1)[0];
    noteToArchive.archivedDate = new Date().toISOString();
    archivedNotes.push(noteToArchive);
    generateNotesTable();
    generateArchivedNotesTable();
    updateSummaryTable();
}

function unarchive(index) {
    const noteToUnarchive = archivedNotes.splice(index, 1)[0];
    notes.push(noteToUnarchive);
    generateNotesTable();
    generateArchivedNotesTable();
    updateSummaryTable();
}

function removeNote(index) {
    const confirmDelete = confirm("Are you sure you want to delete this note?");
    if (confirmDelete) {
        notes.splice(index, 1);
        generateNotesTable();
        updateSummaryTable();
    }
}

function editNote(index) {
    const note = notes[index];
    const editForm = document.createElement("div");
    editForm.innerHTML = `
    <input type="text" value="${note.name}" id="editNoteName" placeholder="Note Name" />
    <input type="text" value="${note.content}" id="editNoteContent" placeholder="Note Content" />
    <select id="editNoteCategory">
      <option value="Task" ${note.category === "Task" ? "selected" : ""}>Task</option>
      <option value="Random Thought" ${note.category === "Random Thought" ? "selected" : ""}>Random Thought</option>
      <option value="Idea" ${note.category === "Idea" ? "selected" : ""}>Idea</option>
    </select>
    <button onclick="saveEditedNote(${index})">Save</button>
    <button onclick="cancelEdit()">Cancel</button>
  `;
    const noteRow = document.querySelector(`#notesTable tr:nth-child(${index + 2})`);
    noteRow.innerHTML = ""; // Clear the current row content
    noteRow.appendChild(editForm);
}

function saveEditedNote(index) {
    const editedName = document.getElementById("editNoteName").value;
    const editedContent = document.getElementById("editNoteContent").value;
    const editedCategory = document.getElementById("editNoteCategory").value;

    if (editedName && editedContent && editedCategory) {
        notes[index].name = editedName;
        notes[index].content = editedContent;
        notes[index].category = editedCategory;

        generateNotesTable();
        updateSummaryTable();
    }
}

function cancelEdit() {
    generateNotesTable();
}

function createNote() {
    const name = document.getElementById('noteName').value;
    const content = document.getElementById('noteContent').value;
    const category = document.getElementById('noteCategory').value;

    if (name && content && category) {
        const newNote = {
            time: new Date().toISOString(),
            name,
            content,
            category,
        };

        notes.push(newNote);
        generateNotesTable();
        updateSummaryTable();
        hideCreateNoteForm();
    }
}

function showCreateNoteForm() {
    const createNoteForm = document.getElementById('createNoteForm');
    createNoteForm.style.display = 'block';
}

function hideCreateNoteForm() {
    const createNoteForm = document.getElementById('createNoteForm');
    createNoteForm.style.display = 'none';
}

function cancelCreateNote() {
    hideCreateNoteForm();
    document.getElementById('noteName').value = '';
    document.getElementById('noteContent').value = '';
    document.getElementById('noteCategory').value = 'Task';
}
//Get dates from content
function getDatesMentioned(content) {
    const datePattern = /\d{1,2}\/\d{1,2}\/\d{4}/g;
    const dates = content.match(datePattern);
    return dates ? dates.join(', ') : '';
}

generateNotesTable();
generateArchivedNotesTable();
updateSummaryTable();
