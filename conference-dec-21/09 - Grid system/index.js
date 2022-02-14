for (let i = 0; i < 10; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    document.body.appendChild(rowDiv);
    for (let colIndex = 0; colIndex < 8; colIndex++) {
        const cell = document.createElement('div');
        if (colIndex > 0) {
            cell.classList.add('col-sm-0');

        }
        if (colIndex > 2) {
            cell.classList.add('col-md-0');
        }
        cell.textContent = `${colIndex + 1} of 12`;
        cell.classList.add('col');
        rowDiv.appendChild(cell);
    }
}