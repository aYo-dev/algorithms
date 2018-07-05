const getNumber = (col: number, row: number): number => {
    if(col == 0 || row == 0 || row == col) return 1;

    return getNumber(col, row - 1) + getNumber(col - 1, row -1);
}
  
getNumber(2, 3);