
function getDatesMentioned(content) {
    const datePattern = /\d{1,2}\/\d{1,2}\/\d{4}/g;
    const dates = content.match(datePattern);
    return dates ? dates.join(', ') : '';
}

generateNotesTable();
generateArchivedNotesTable();
updateSummaryTable();