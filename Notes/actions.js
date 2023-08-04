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